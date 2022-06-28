import request from '@/utils/request'

export function getKeyEntries() {
    return request({
        url: '/keyEntries.json',
        method: 'get',
    })
}