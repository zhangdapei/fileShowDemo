import request from '@/utils/request'
let base_ming_url = "https://zhangdapei.github.io/fileShowDemo/#/dashboard"
// let base_ming_url = ""
export function getKeyEntries() {
    return request({
        //url: '/services/apexrest/doc/keyentries',
        url: base_ming_url+'/services/apexrest/doc/keyentries',
        method: 'Get',
    })
}
export function setKeyEntries(data) {
    return request({
        url: base_ming_url+'/services/apexrest/doc/keyentries',
        method: 'POST',
        data
    })
}