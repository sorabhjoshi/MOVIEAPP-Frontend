import axios from 'axios';
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
export default axios.create({
    baseURL:'https://movieapp-backend-production.up.railway.app/',
});
