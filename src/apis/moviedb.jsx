import axios from "axios";

const TOKEN = '3e0e9b813edc08720d091135d99d925f';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        "api_key" : TOKEN
    }
})