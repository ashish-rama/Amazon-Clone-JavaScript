import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:5001/ecomm-clone-8906a/us-central1/api" // THE API (clound function) URL
});

export default instance;