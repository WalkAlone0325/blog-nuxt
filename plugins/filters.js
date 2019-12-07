import Vue from 'vue'
/**
* 格式化时间戳
* @param {时间戳} date
* @param {*} type
*/

export function timeFormat (date, type) {
  if (!date) { return '' }
  const time = new Date(date)
  if (!time) { return '' }
  const year = time.getFullYear()
  const month = time.getMonth() < 9 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1
  const day = time.getDate() < 10 ? '0' + time.getDate() : time.getDate()
  const hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
  const minute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()

  if (type === 'yyyy-mm-dd') {
    return [year, month, day].join('-')
  } else if (type === 'mm-dd') {
    return [month, day].join('-')
  } else if (type === 'MM-DD') {
    return `${month}月${day}日`
  } else {
    return [year, month, day].join('-') + ' ' + [hour, minute].join(':')
    // 取消秒的转换
    // return [year, month, day].join("-") + " " + [hour, minute, second].join(":")
  }
}
Vue.filter('timeFormat', timeFormat)
