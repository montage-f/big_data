/**
 * Created by MonTage_fz on 2019/7/19
 */
import axios from 'axios';
axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);
axios.interceptors.response.use(
    (response) => {
        const { data } = response;
        return data;
    },
    (error) => Promise.reject(error)
);
export default axios;
