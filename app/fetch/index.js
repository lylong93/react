import 'whatwg-fetch'

export default function () {
    fetch('http://www.easy-mock.com/mock/5a099ffa7b68855a07f76d57/example/user')
        .then(function(res) {
            return res.json()
        })
        .then(function(body) {
            console.log(body)
        })
}