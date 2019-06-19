import axios from 'axios';

//Create custom clients
export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 6566c36588f255fc19e1d91e7eb88156ca50c9d8086297e8abbdc8949ce563f2"
    }
})
//axios.create() method creates an instance of axios client with default properties.
//Here, unsplash is an instance of axios client with baseURL and authentication key.