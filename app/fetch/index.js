import 'whatwg-fetch'
import APILIST from 'W/api'


const fetchapi = {
    getOrganizeList: fetch(APILIST.organizelist)
}

export default fetchapi