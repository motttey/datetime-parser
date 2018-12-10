function extractDateTimePrimitive(date_object_first, date_object_second){
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
  }
  return flag;
}

// UTC time
// YYYY-MM-DDTHH:MM:SS(,MS)
function parseDateTime(input_str, flag) {
  let time_splited = input_str.toISOString().split('T');
  let date_str = time_splited[0];
  let time_str = time_splited[1];
  let splited_date_str = date_str.split('-');
  let splited_time_str = time_str.split(':');

  if (flag === 0){
    return "." + parseInt(splited_time_str[splited_time_str.length-1]);
  }
  else if (flag === 1){
    return parseInt(splited_time_str[splited_time_str.length-2]) + "." + parseInt(splited_time_str[splited_time_str.length-1]);
  }
  else if (flag === 2){
    return parseInt(splited_time_str[0]) + ":" + parseInt(splited_time_str[splited_time_str.length-2]);
  }
  else if (flag === 3){
    return date_str + ":" + parseInt(splited_time_str[0]);
  }
  else if (flag === 4){
    return parseInt(splited_date_str[splited_date_str.length-2]) + "-" + parseInt(splited_date_str.length-1);
  }
  else if (flag === 5){
    return parseInt(splited_date_str[0]) + "-" + parseInt(splited_date_str.length-2);
  }
  else if(flag === 6){
    return parseInt(splited_date_str[0]);
  }
}
