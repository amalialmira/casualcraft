import axios from "axios";

const GetProducts = axios.create({
    baseURL: 'https://mrkive.site'
})

export default GetProducts