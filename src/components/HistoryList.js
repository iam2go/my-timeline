import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import HistoryItem from "./HistoryItem";

const TimelinesByDate = styled.ul`
  list-style: none;
  width: 400px;
  height: fit-content;
  margin: 0 auto;
  padding: 0;

  .date_block {
    font-weight: 600;
    margin: 20px 0;
  }
`;

function HistoryList({ timeline, date }) {
  return (
    <TimelinesByDate>
      <li className="date_block">
        <span className="date">
          {dayjs(date).locale("ko").format("MM.DD dddd")}
        </span>
      </li>
      {timeline.map((data, idx) => {
        return <HistoryItem key={idx} data={data} />;
      })}
    </TimelinesByDate>
  );
}

export default HistoryList;
