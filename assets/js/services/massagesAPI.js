import axios from 'axios';
import { MASSAGES_API } from '../config';

function findAll () {
    return axios
    
    .get(MASSAGES_API)
    .then(response => response.data);
}

export default {
    findAll
};