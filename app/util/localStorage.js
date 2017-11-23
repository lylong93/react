export function setStorage(key, value) {
    localStorage.setItem(key, value)
}
export function getStorage(key) {
    value = localStorage.getItem(key)
    return value
}