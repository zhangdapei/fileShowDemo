import request from '@/utils/request'

export function getKeyEntries() {
    return request({
        //url: '/services/apexrest/doc/keyentries',
        url: 'https://qualtrics-sv.cs111.force.com/services/apexrest/doc/keyentries',
        method: 'Get',
    })
}
export function setKeyEntries(data) {
    return request({
        url: '/services/apexrest/doc/keyentries',
        method: 'POST',
        data
    })
}