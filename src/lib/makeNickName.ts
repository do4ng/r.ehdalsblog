const first = [
  "즐거운",
  "더운",
  "행복한",
  "귀찮은",
  "잘생긴",
  "졸린",
  "배고픈",
  "예쁜",
  "멋진",
  "화난",
  "슬픈",
  "아픈",
];
const next = [
  "낙타",
  "코끼리",
  "사자",
  "여우",
  "강아지",
  "개",
  "고양이",
  "기린",
  "해적",
];

export default function MakeNickName(): string {
  let result: string = "";
  let random = Math.floor(Math.random() * first.length);
  result = first[random];
  random = Math.floor(Math.random() * next.length);
  result = `${result} ${next[random]}`;
  return result;
}
