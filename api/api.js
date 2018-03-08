import { fetch } from "./fetch"; //引用fetch.js
import api from './url'; //引用url.js
import qs from 'qs'; 
var token = localStorage.getItem('token');
console.log(qs)
//添加产品
export function addProduct(param) { //lookOption是你要调用接口的名字，issuer,userId是传进来的参数
    return fetch({
        //api.Hallowmas 引用url.js里面的数据
        url: api.Hallowmas + '/add_listing',
        method: 'post',//请求方法
        params: param
    })
}
//抓取一个商品
export function grabProduct(param) {
    return fetch({
        //api.Hallowmas 引用url.js里面的数据
        url: api.Hallowmas + '/grab_listing',
        method: 'post',//请求方法
        params: param
    })
}
//商品列表查询
export function queryProduct(param) {
    return fetch({
        //api.Hallowmas 引用url.js里面的数据
        url: api.Hallowmas + '/query_listings',
        method: 'post',//请求方法
        data: qs.stringify(param)
    })
}
//绑定店铺
export function bindshop(param) {
    return fetch({
        //api.Hallowmas 引用url.js里面的数据
        url: api.Hallowmastore + '/bind_web_store',
        method: 'post',//请求方法
        params: param
    })
}
//有新接口的时候像上面那样再来一次
// //修改昵称接口
// export function userID(name){
//   return fetch({
//     url:api.myself_name,
//     method:"put",
//     data:{
//       nickname:name
//     }
//   })
// }
//
//
// //取消转发赞踩接口
// export function cancelForward(articleId,type){
//   return fetch({
//     url:api.detail_article+articleId+"/forwarded_impress",
//     method:"delete",
//     params:{
//       type:type
//     }
//   })
// }