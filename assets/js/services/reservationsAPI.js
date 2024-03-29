import axios from 'axios';
import {DATE_LISTE_API, RESERVATIONS_API} from '../config';
import Cache from './cache';


async function findAll () {
    
const cachedReservations = await Cache.get("reservations");

  if (cachedReservations) return cachedReservations;

  return axios.get(RESERVATIONS_API).then(response => {
    const reservations = response.data;
    Cache.set("reservations", reservations);
    return reservations;
  });
}

async function findDate () {

    const cachedReservations = await Cache.get("reservations");

    if (cachedReservations) return cachedReservations;

    return axios.get(DATE_LISTE_API).then(response => {
        const reservationsDate = response.data;
        Cache.set("reservations", reservationsDate);
        return reservationsDate;
    });
}

function deleteReservation(id)  {
    return axios.delete(RESERVATIONS_API + "/" + id).then(async response => {
    const cachedReservations = await Cache.get("reservations");

    if (cachedReservations) {
      Cache.set("reservations", cachedReservations.filter(c => c.id !== id));
    }

    return response;
  });
}

async function find(id) {
    const cachedReservation = await Cache.get("reservations." + id);

  if (cachedReservation) return cachedReservation;

  return axios.get(RESERVATIONS_API + "/" + id).then(response => {
    const reservation = response.data;

    Cache.set("reservations." + id, reservation);

    return reservation;
  });
}

function update(id, reservation) {
    return axios.put(RESERVATIONS_API + "/" + id, reservation).then(async response => {
    const cachedReservations = await Cache.get("reservations");
    const cachedReservation = await Cache.get("reservations." + id);

    if (cachedReservation) {
      Cache.set("customers." + id, response.data);
    }

    if (cachedReservations) {
      const index = cachedReservations.findIndex(c => c.id === +id);
        cachedReservations[index] = response.data;
    }

    return response;
  });
}

function create (reservation) {
    return axios.post(RESERVATIONS_API, reservation).then(async response => {
        const cachedReservations = await Cache.get("reservations");
    
        if (cachedReservations) {
          Cache.set("reservations", [...cachedReservations, response.data]);
        }
    
        return response;
      });
}

export default {
    findAll,
    findDate,
    find,
    update,
    create,
    delete: deleteReservation
};