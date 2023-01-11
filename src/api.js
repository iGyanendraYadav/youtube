import axios from 'axios';
const request = axios.create({
    baseURL : `https://youtube.googleapis.com/youtube/v3/`,
    params : {
        key : "AIzaSyBq2hmyAgplMJ8-2NypLN5AaAUziWUIjlg"
    },
})

export default request