import axios from 'axios';//引入axios
var token = localStorage.getItem('token');
console.log(token)
export function fetch(options) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({  //instance创建一个axios实例，可以自定义配置，可在 axios文档中查看详情
            //所有的请求都会带上这些配置，比如全局都要用的身份信息等。
            baseURL:'http://proxy.tintop.cn:26081/api/mbs/api',
            headers: {
                'Content-Type': 'application/json',
                // 'access_token': token,
            },
            params:{
                'access_token': token,
            },
            timeout: 30 * 1000 // 30秒超时
        });
        instance(options).then(response => { //then 请求成功之后进行什么操作
                resolve(response);//把请求到的数据发到引用请求的地方
            })
            .catch(error => {
                console.log('请求异常信息：' + error);
                reject(error);
            });
    });
}