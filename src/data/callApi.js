// 导入本工程所需要的一个外部工具（该工具为ajax的封装）
import axios from 'axios'

/*******************************************************************************
  该文件封装了一些调用接口的函数，主要是针对本公司提供的服务器所封装的(方便本人自身)
  其中的 url是以/api/ums/为前缀的，而/api则ums/是一个代理地址，详细配置请查看
  config/index.js 中的
  dev: {
  proxyTable: {
  .....
  }
}
*******************************************************************************/

/*******************************************************************************
 form 表单提交 输入地址， key-value对象，回调函数
如 callFormApi('pub/login', {username: root, password: 123}, function(res){

})
*******************************************************************************/
export function callFormApi(url, paramObj, fun) {
  axios({
    url: '/api/ums/' + url,
    method: 'POST',
    params: paramObj
  }).then((res) => {
    fun(res)
  }).catch(res=>{
    me.$message.error(res)
  })
}
/*******************************************************************************
使用方法同上，发送数据方式为json对象
*******************************************************************************/
export function callJsonApi(url, jsonData, fun) {
  axios({
    url: '/ums/' + url,
    method: 'POST',
    data: jsonData
  }).then((res) => {
    fun(res)
  }).catch(res=>{
    me.$message.error(res)
  })
}

export function callApiToken(url, jsonData, fun) {
  let me = this
  var str = localStorage.getItem('access_token')
  axios({
    url: '/ums/api/' + url +'?access_token=' + str,
    method: 'POST',
    data: jsonData
  }).then((res) => {
    if (res.status >= 200 && res.status < 300) {
      if (res.data.errcode == 500 && res.data.errmsg != null && res.data.errmsg.indexOf('Token') != -1) {
            localStorage.removeItem('access_token')
            window.location.href='http://proxy.tintop.cn:26082/mbs/index.html'
      } else {
        fun(res)
      }
    }
  }).catch(res=>{
    me.$message.error(res)
  })
}

export function callApiForMbs(url, jsonData, fun) {
  var str = localStorage.getItem('access_token')
  axios({
    url: '/mbs/api/' + url +'?access_token=' + str,
    method: 'POST',
    data: jsonData
  }).then((res) => {
    if (res.status >= 200 && res.status < 300) {
      if (res.data.errcode == 500 && res.data.errmsg != null && res.data.errmsg.indexOf('Token') != -1) {
            localStorage.removeItem('access_token')
            window.location.href='http://proxy.tintop.cn:26082/mbs/index.html'
            return
      }
    }
    fun(res)
  }).catch(res=>{
    me.$message.error(res)
  })
}
export function callApiWithToken(url, jsonData, fun) {
  console.log(url)
  var str = localStorage.getItem('access_token')
  axios({
    url: '/api/' + url +'?access_token=' + str,
    method: 'POST',
    data: jsonData
  }).then((res) => {
    if (res.status >= 200 && res.status < 300) {
      if (res.data.errcode == 500) {
        localStorage.removeItem('access_token')
        window.location.href='/'
      } else {
        fun(res)
      }
    }
  }).catch(res=>{
    me.$message.error(res)
  })
}

/**************************************************************
    时间格式转换，将时间戳转为字符串格式 yyyy-MM-dd hh:mm:ss
***************************************************************/
export function changeDateFormat (time) {
  var timeDate = new Date(time)
  var date = ''
  date += timeDate.getFullYear() + '-'
  if (timeDate.getMonth()+1 < 10) {
    date += '0'
  }
  date += timeDate.getMonth() + 1 + '-'
  if (timeDate.getDate() < 10) {
    date += '0'
  }
  date += timeDate.getDate() + ' '

  if (timeDate.getHours() < 10) {
    date += '0'
  }
  date += timeDate.getHours() + ':'
  if (timeDate.getMinutes() < 10) {
    date += '0'
  }
  date += timeDate.getMinutes() + ':'
  if (timeDate.getSeconds() < 10) {
    date += '0'
  }
  return date += timeDate.getSeconds()
}
