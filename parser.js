function extractDateTimePrimitive(first_str, second_str){
  const date_object_first = new Date(first_str);
  const date_object_second = new Date(second_str);
  // let date_diff = first_str - second_str;
  let flag = 0;
  if (date_object_first.getMilliseconds() !== date_object_second.getMilliseconds()) {
    flag = 0;
  }
  if (date_object_first.getSeconds() !== date_object_second.getSeconds()) {
    flag = 1
  }
  else if (date_object_first.getMinutes() !== date_object_second.getMinutes()) {
    flag = 2;
  }
  else if (date_object_first.getHours() !== date_object_second.getHours()) {
    flag = 3;
  }
  else if (date_object_first.getUTCDate() !== date_object_second.getUTCDate()) {
    flag = 4;
  }
  else if (date_object_first.getUTCMonth() !== date_object_second.getUTCMonth()) {
    flag = 5;
  }
  else if (date_object_first.getUTCFullYear() !== date_object_second.getUTCFullYear()) {
    flag = 6;
    alert("diff");
  }
  // console.log(date_diff);
  return flag;
}

function parseDateTime(flag) {
  // var time = parseInt(date[date.length-2], 10) + "." + parseInt(date[date.length-1], 10);
  // return time;
}
