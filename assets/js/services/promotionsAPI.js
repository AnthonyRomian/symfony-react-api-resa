import axios from 'axios';
import { PROMO_API} from '../config';

function findAll () {
    return axios
    .get(PROMO_API)
    .then(response => response.data);

}

export default {
    findAll
};