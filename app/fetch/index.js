import 'whatwg-fetch'
import APILIST from './api'


const fetchapi = {
    getOrganizeList: fetch(APILIST.organizelist)
}

export default fetchapi