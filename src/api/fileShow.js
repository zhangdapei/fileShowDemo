import request from '@/utils/request'

export function getKeyEntries() {
    return request({
        url: 'https://qualtrics-sv.cs111.force.com/services/apexrest/doc/keyentries',
        method: 'get',
    })
}