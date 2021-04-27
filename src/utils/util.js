(function (object) {
  object.isAndroid = function () {
    var u = navigator.userAgent.toLowerCase()
    var isAndroid = u.indexOf('android') > -1 || u.indexOf('adr') > -1// android终端
    return isAndroid
  }

  object.isIPhone = function () {
    var u = navigator.userAgent.toLowerCase()
    var isIOS = u.indexOf('iphone') > -1 // ios终端
    return isIOS
  }

  object.getQueryString = function (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return decodeURI(r[2]); return null
  }

  object.initformatter = function (value) {
    const year = value.getFullYear()
    const month = value.getMonth()
    const day = value.getDate()
    const _month = month + 1 < 10 ? '0' + (month + 1) : month + 1
    const _day = day < 10 ? '0' + day : day
    return year + '-' + _month + '-' + _day
  }
})(window.Util = window.Util || {})
