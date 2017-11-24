import { to, CITY } from './userinfo'

export function test() {
    return {
        type: 'test',
    }
}
export function city(city) {
    return {
        type: CITY.CHANGE,
        city,
    }
}