import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

// Selector
export const timelineSelector = (state) => state.timeline;

// 초기 State
const initialState = {
  loading: false,
  error: null,
  timelines: {
    days: [],
    history: {},
  },
  nextId: null,
};

const groupByDay = (data, histories) => {
  const history = data.reduce((history, timeline) => {
    const day = timeline.created_at.split(" ")[0];
    if (!history[day]) history[day] = [];
    history[day] = history[day].concat(timeline);
    return history;
  }, histories);
  return {
    days: Object.keys(history).sort((a, b) => dayjs(b).isBefore(a, "date")),
    history,
  };
};

// Slice
const timeline = createSlice({
  name: "timeline",
  initialState,
  reducers: {
    getTimelineRequest: (state, action) => {
      state.loading = true;
    },
    getTimelineSuccess: (state, action) => {
      const { data, nextId } = action.payload;
      state.loading = false;
      state.timelines = groupByDay(data, state.timelines.history);
      state.error = null;
      state.nextId = nextId;
    },
    getTimelineFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.nextId = null;
    },
    resetTimeline: (state, action) => {
      state.timelines = {
        days: [],
        history: {},
      };
      state.nextId = null;
    },
  },
});

export const {
  getTimelineRequest,
  getTimelineSuccess,
  getTimelineFailure,
  resetTimeline,
} = timeline.actions;
export const timelineReducer = timeline.reducer;
