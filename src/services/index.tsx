import axios from 'axios';
import {urls} from '../utils';
const configAxios = () => {
  axios.defaults.baseURL = urls.baseURL;
};

export default configAxios;
