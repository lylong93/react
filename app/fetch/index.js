import 'whatwg-fetch'
import APILIST from './api'


const fetchapi = {
    getOrganizeList: function(page) {
        return fetch(APILIST.organizelist + page)
    }
}

export default fetchapi