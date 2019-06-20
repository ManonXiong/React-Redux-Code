import axios from 'axios';

export default axios.create({
    baseURL: 'https://nycdotsigns.net/api/v1',
    headers: {
        Authorization: {
          username: 'public',
          password: 'D0tPu6l1c@p1'
        }
    }
})

