import axios from 'axios';
export default class UsageHistory {

    getPosts() {
        return axios.get('http://localhost:3000/usage').then(res => res.data);
    }

}