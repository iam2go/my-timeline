import React, { useRef } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const History = styled.li`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;

  .profile {
    border-radius: 35px;
    width: 40px;
    height: 40px;
    display: inline-block;
    flex-shrink: 0;
  }
  .content_box {
    padding-left: 10px;
    display: inline-block;
  }
  .title {
    display: block;
  }
  .time {
    font-size: 12px;
    color: #6b8eb3;
    font-weight: 600;
  }
`;

dayjs.extend(relativeTime);

const profile_color = ["#a28fbf", "#91b2cf", "#bae3dd", "#db9797"];

function HistoryItem({ data }) {
  const { user_id, user_name, created_at, text } = data;
  const profile = useRef(
    `https://avatars.dicebear.com/api/croodles-neutral/${user_name}.svg?radius=50&scale=90`
  );

  return (
    <History>
      <div
        className="profile"
        style={{ background: profile_color[user_id[0] - 1] }}
      >
        <img src={profile.current} alt="user_profile" />
      </div>
      <div className="content_box">
        <strong className="title">{user_name}</strong>
        {text}
        <div className="time">{dayjs(created_at).locale("ko").fromNow()}</div>
      </div>
    </History>
  );
}

export default HistoryItem;
