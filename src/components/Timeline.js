import React from "react";
import styled from "styled-components";
import useTimeline from "../hooks/useTimeline";
import HistoryList from "./HistoryList";
import TimelineLoader from "./TimelineLoader";

const TimelineWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 600px;
  overflow-y: scroll;
  border: 1px solid #bbbbbb;
  border-radius: 30px;
  padding-top: 20px;
  background-color: #edf1f5;
`;

const Button = styled.button`
  border: none;
  background: #fff;
  border-radius: 15px;
  padding: 7px;
  width: 120px;
  font-weight: 600;
  color: #6b8eb3;
  cursor: pointer;
`;

function Timeline() {
  const { loading, timelines, onClickMoreButton } = useTimeline();

  return (
    <TimelineWrap>
      {loading ? (
        <TimelineLoader />
      ) : (
        <div className="timeline_box" style={{ overflowY: "auto" }}>
          {timelines.days.map((date) => (
            <HistoryList
              key={date}
              timeline={timelines.history[date]}
              date={date}
            />
          ))}
          <div
            className="button_box"
            style={{ textAlign: "center", margin: "20px" }}
          >
            <Button onClick={onClickMoreButton}> + read more...</Button>
          </div>
        </div>
      )}
    </TimelineWrap>
  );
}

export default Timeline;
