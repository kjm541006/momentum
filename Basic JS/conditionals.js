const age = parseInt(prompt("몇살인가요?"));

if (isNaN(age) || age < 0) {
  console.log("0 이상의 숫자를 입력하세요.");
} else {
  if (age < 19) {
    console.log("음주가 불가능합니다.");
  } else {
    if (age >= 50) {
      console.log("지나친 음주는 건강에 해롭습니다.");
    } else {
      console.log("음주가 가능합니다.");
    }
  }
}
