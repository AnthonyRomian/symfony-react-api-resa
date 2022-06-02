import axios from 'axios';
import { PROMO_API} from '../config';

function findAll () {
    return axios
        .get(PROMO_API)
        .then(response => response.data);
}

function deletePromo(id)  {
    return axios
        .delete(PROMO_API+ "/" + id);
}

function find(id) {
    return axios.get(PROMO_API+ "/" + id)
        .then(response => response.data);
}

function update(id, promo) {
    return axios.put(PROMO_API+ "/" + id,
        promo
    );
}

function create(promotion) {
    return axios.post(PROMO_API,
        promotion
    );
}


export default {
    findAll,
    find,
    update,
    create,
    delete: deletePromo
};