import Axios from 'axios';
import environments from 'environments';

export const query = body =>
    Axios.post(`${environments.BASE_URL}/contactus`, body);
