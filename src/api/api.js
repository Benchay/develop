import fetch from './fetch.js'

// // 登录
// export function login (data) {
//   return fetch({
//     url: '',
//     method: 'post',
//     data
//   })
// }
// // 登出
// export function logout () {
//   return fetch({
//     url: '',
//     method: 'post'
//   })
// }

const addProduct = params => {
  return fetch({
    url: 'http://proxy.tintop.cn:26081/{apigroup}/api/listing/add_listing',
    method: 'post',
    params: ''
  })
}

const productList = params => {
  return fetch({
    url: 'http://proxy.tintop.cn:26081/{apigroup}/api/listing/query_listings',
    method: 'post',
    params: ''
  })
}

const userList = params => {
  return fetch({
    url: '/api/person/getPersonListByCompany',
    method: 'get',
    params: params
  })
}

/**
 * 提交用户注册信息
 * @param params
 */
const postUserInfo = params => {
  return fetch({
    url: '',
    method: 'post',
    data: params
  })
}

/**
 * 验证邮箱 token是否过期
 * @param params
 */
const checkToken = params => {
  return fetch({
    url: '',
    method: 'get',
    params: params
  })
}
const apiList = {
  addProduct,
  productList,
  userList,
  postUserInfo,
  checkToken
}

export default apiList
