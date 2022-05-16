import axios from 'axios';
export default class MemberList {

    getPosts() {
        return axios.get('http://localhost:3000/member').then(res => res.data);
    }

}