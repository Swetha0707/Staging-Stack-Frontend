import axios from 'axios';
export default class CustomerService {

    getPosts() {
        return axios.get('http://localhost:3000/data').then(res => res.data);
    }

}