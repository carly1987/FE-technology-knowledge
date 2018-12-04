export function isNum(num) {
  if(typeof num === 'number'){
    return true;
  } else {
    return false;
  }
}

function formatNumber (num) {
  num = num.toString();
  num = num.length <= 1 ? `0${num}` : num;
  return num;
}

export function formatTime (time) {
  const date = new Date(time);
  let h = date.getUTCHours() + 8;
  h = h >= 24 ? h - 24 : h;
  h = formatNumber(h);
  let m = date.getUTCMinutes();
  m = formatNumber(m);
  return `${h}:${m}`;
}