import Axios from 'axios';

// const url = "https://billing-grocery.herokuapp.com/"
const url = "http://localhost:2000/"

export const http =  Axios.create({
    baseURL:url
})




