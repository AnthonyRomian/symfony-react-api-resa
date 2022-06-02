import axios from 'axios';
import {MASSAGES_API} from "../config";

function findAll () {
    return axios
        .get(MASSAGES_API)
        .then(response => response.data);
}

function deleteMassage(id)  {
    return axios
        .delete(MASSAGES_API + "/" +  id);
}

function find(id) {
    return axios.get(MASSAGES_API + "/" + id)
        .then(response => response.data);
}

function update(id, massage) {
    return axios.put(MASSAGES_API + "/" +  id, massage
    );
}

function create(massage) {
    return axios.post(MASSAGES_API,
        massage
    );
}


export default {
    findAll,
    find,
    update,
    create,
    delete: deleteMassage
};