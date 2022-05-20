import dayjs from "dayjs";

export const getTimelineData = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, 1000)
  );
};

const data = [
  {
    id: 1,
    user_name: "몽몽",
    user_id: "11111",
    created_at: dayjs().subtract(5, "minute").format("YYYY.MM.DD HH:mm"),
    text: "Seems I`ve been dreaming for too long. I can`t find the reasons to move on.",
  },
  {
    id: 2,
    user_name: "뉴",
    user_id: "33333",
    created_at: dayjs().subtract(10, "minute").format("YYYY.MM.DD HH:mm"),
    text: "hello🤪",
  },
  {
    id: 3,
    user_name: "kk",
    user_id: "44444",
    created_at: dayjs().subtract(3, "hour").format("YYYY.MM.DD HH:mm"),
    text: "This is test message.",
  },
  {
    id: 4,
    user_name: "몽몽",
    user_id: "11111",
    created_at: dayjs().subtract(6, "hour").format("YYYY.MM.DD HH:mm"),
    text: "Wake up to the reality.",
  },
  {
    id: 5,
    user_name: "뉴",
    user_id: "33333",
    created_at: dayjs().subtract(7, "hour").format("YYYY.MM.DD HH:mm"),
    text: "All our bones are breaking down.",
  },
  {
    id: 5,
    user_name: "kk",
    user_id: "44444",
    created_at: dayjs().subtract(1, "day").format("YYYY.MM.DD HH:mm"),
    text: "I just lay here chained somehow.",
  },
  {
    id: 6,
    user_name: "몽몽",
    user_id: "11111",
    created_at: dayjs().subtract(1, "day").format("YYYY.MM.DD HH:mm"),
    text: "For the lies that I`ve been hiding from them",
  },
  {
    id: 7,
    user_name: "피치",
    user_id: "22222",
    created_at: dayjs().subtract(1, "day").format("YYYY.MM.DD HH:mm"),
    text: "I`ve been sleep walking for some days.",
  },
  {
    id: 8,
    user_name: "피치",
    user_id: "22222",
    created_at: dayjs().subtract(1, "day").format("YYYY.MM.DD HH:mm"),
    text: "Tip toe through our fantasy, Realize it`s just a show.",
  },
  {
    id: 9,
    user_name: "몽몽",
    user_id: "11111",
    created_at: dayjs().subtract(1, "day").format("YYYY.MM.DD HH:mm"),
    text: "All we`ve known is breaking down.",
  },
  {
    id: 10,
    user_name: "kk",
    user_id: "4444",
    created_at: dayjs().subtract(2, "day").format("YYYY.MM.DD HH:mm"),
    text: "Someday after everything fades, We`ll find a way to leave it all behind.",
  },
  {
    id: 11,
    user_name: "kk",
    user_id: "4444",
    created_at: dayjs().subtract(2, "day").format("YYYY.MM.DD HH:mm"),
    text: "Til then we`ll fall in circles.",
  },
  {
    id: 12,
    user_name: "뉴",
    user_id: "33333",
    created_at: dayjs().subtract(3, "day").format("YYYY.MM.DD HH:mm"),
    text: "Slowly lose our minds?",
  },
  {
    id: 13,
    user_name: "피치",
    user_id: "22222",
    created_at: dayjs().subtract(3, "day").format("YYYY.MM.DD HH:mm"),
    text: "This is test.",
  },
  {
    id: 14,
    user_name: "몽몽",
    user_id: "11111",
    created_at: dayjs().subtract(3, "day").format("YYYY.MM.DD HH:mm"),
    text: "This is the end.",
  },
];
