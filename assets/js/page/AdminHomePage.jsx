import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import RESERVATIONS_API from '/assets/js/services/reservationsAPI';
import axios from "axios";
import Pagination from "../components/Pagination";

const AdminHomePage = (props) => {

    const [reservations, setReservations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    /*// recuperation des customers
    const fetchReservations = async () => {
        try {
            axios.get("http://127.0.0.1:8000/api/reservations")
                .then(response => response.data["hydra:member"])
                .then(data => setReservations(data));

        } catch (error) {
            toast.error("Impossible de charger les clients");
        }
    };*/

    // chargment du composant => recherche  customers
    useEffect(() => {

        axios.get("http://127.0.0.1:8000/api/reservations")
            .then(response => response.data["hydra:member"])
            .then(data => setReservations(data))
           .catch(error => console.log(error.response));
    }, [])

    // gestion de delete client
    const handleDelete = async id => {

        const originalReservations = [...reservations];

        // 1 approche optimiste ( probleme si serveur down )
        setReservations(reservations.filter(reservation => reservation.id !== id));

        // 1 approche pessimiste ( alors solution avec copie de tableau )
        try {
            await RESERVATIONS_API.delete(id);
            toast.success("Le client à bien été supprimé")
        } catch (error) {
            setReservations(originalReservations);
            toast.error("La suppression à échouée")
        }

        // meme chose qu au dessus
        /* customersAPI.delete(id)
            .then(response => console.log("ok"))
            .catch(error => {
                setCustomers(originalCustomers);
                console.log(error.response);
            }); */
    };

    // gestion de la pagination / switch page
    const handlePageChange = page => setCurrentPage(page);

    // gestion de la recherche
    const handleSearch = ({ currentTarget }) => {
        setSearch(currentTarget.value);
        setCurrentPage(1);
    };

    const itemsPerPage = 10;

    // <filtrage customers recherche
    const filteredReservations = reservations.filter(
        c => c.nom.toLowerCase().includes(search.toLowerCase()) ||
            c.prenom.toLowerCase().includes(search.toLowerCase()) ||
            c.email.toLowerCase().includes(search.toLowerCase()) ||
            (c.massage && c.massage.toLowerCase().includes(search.toLowerCase()))
    );

    //pagination donnes
    const paginatedReservations = Pagination.getData(
        filteredReservations,
        currentPage,
        itemsPerPage);

    const formatDate = (str) => moment(str).format('DD/MM/YYYY hh:m');


    return (
        <>
            <div className="mb-3 py-3 d-flex justify-content-between align-items-center">
                <h1>Liste des clients</h1>
                <Link to="/reservation" className="btn btn-primary" >Créer une réservation</Link>
            </div>
            <div className="form-group">
                <input type="text" onChange={handleSearch} value={search} className="form-control" placeholder="Rechercher..." />
            </div>

            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>Nbre reservation</th>
                    <th>Massage</th>
                    <th>Date du rendez vous</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {paginatedReservations.map(reservation => <tr key={reservation.id}>
                    <td>{reservation.id}</td>
                    <td>
                        <Link to={"/reservations/" + reservation.id}>{reservation.nom} {reservation.prenom}</Link>
                    </td>
                    <td>{reservation.email}</td>
                    <td>{reservation.tel}</td>
                    <td className='text-center'>
                        <span className="badge badge-primary bg-primary">{reservation.nbrePassage}</span>
                    </td>
                    <td className='text-center'>{reservation.massage.nom} </td>
                    <td className='text-center'>{formatDate(reservation.dateRdv)} </td>
                    <td className='text-center'>{reservation.massage.nom} </td>
                    <td>
                        <button
                            onClick={() => handleDelete(reservation.id)}
                            className="btn btn-sm btn-danger text-center">Supprimer</button>
                    </td>
                </tr>)}

                </tbody>
            </table>
            {itemsPerPage < filteredReservations.length && (
                <Pagination
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    length={filteredReservations.length}
                    onPageChanged={handlePageChange} />)}

        </>
    );
}

export default AdminHomePage;