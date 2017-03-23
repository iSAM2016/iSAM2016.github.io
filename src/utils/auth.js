//common
var util = require('./utils');

module.exports = {
  login(email, pass,cb) {
       /* 登录系统的cookie 没有对接，添加cookie 的判断
        var uid = util.getCookie("uid");
        if (!uid) {
            window.location.href = ShareDefaultLink;
          }
      */
     console.log(email);
     console.log(pass);
    if (email === '1228901986@qq.com' && pass === '123456'/* &&uid*/) {
        console.log("success")
        localStorage.token = Math.random().toString(36).substring(7);
        localStorage.userId = 'ae7e24b3-dbff-44ed-b6ea-458b15a8782d';
        setTimeout(cb(),200)
     
    } else {
     
    }
  },

  getToken: function () {
    return localStorage.token
  },

  logout: function (cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn: function () {

    /**
     * 检测是否未登录 cookie 检测 
     */
    var uid = util.getCookie("uid");
    return true
    // return localStorage.token 
  },

  onChange: function () {}
}
