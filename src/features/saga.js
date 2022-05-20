import { call, put, takeLatest } from "redux-saga/effects";
import {
  getTimelineFailure,
  getTimelineRequest,
  getTimelineSuccess,
} from "./slice";
import { createAction } from "@reduxjs/toolkit";
import { getTimelineData } from "../data/data.js";

export const getTimelineAction = createAction("timeline/getTimelineAction");

// 임시 함수 : 정해진 개수만큼 데이터 호출
function getLimitedData(data, start = 0, cnt) {
  const end = start + cnt;
  return {
    data: data.slice(start, end),
    nextId: data.length < end ? null : end,
  };
}

// 타임라인 가져오는 제너레이터
function* getTimelineFlow(action) {
  try {
    yield put(getTimelineRequest());
    const response = yield call(getTimelineData);
    // 임시 로직
    const { count, next_id } = action.payload;
    const limited_result = getLimitedData(response, next_id, count);
    yield put(getTimelineSuccess(limited_result));
  } catch (error) {
    console.log(error);
    yield put(getTimelineFailure(error));
  }
}

function* timelineWatcher() {
  yield takeLatest(getTimelineAction, getTimelineFlow);
}

export { timelineWatcher };
