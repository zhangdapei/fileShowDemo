import request from '@/utils/request'
let base_ming_url = "https://qualtrics-sv.cs111.force.com"
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
        method: 'post',
        data
    })
}