import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Pagination from "../../components/Pagination";
import reservationsAPI from "../../services/reservationsAPI";
import massagesAPI from "../../services/massagesAPI";

const ReservationPageListe = (props) => {

    const [reservations, setReservations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [massages, setMassages] = useState([]);

    const fetchMassages = async () => {
        try {
            const data = await massagesAPI.findAll();
            setMassages(data);
        } catch (error) {
            toast.error("Impossible de charger les massages");
        }
    };

    // chargment du composant => recherche  customers
    useEffect(() => {
        fetchMassages();
    }, [])

    // recuperation des customers
    const fetchReservations = async () => {
        try {
            const data = await reservationsAPI.findAll();
            setReservations(data);
        } catch (error) {
            toast.error("Impossible de charger les reservations");
        }
    };

    // chargment du composant => recherche  customers
    useEffect(() => {
        fetchReservations();
    }, [])

    // gestion de delete client
    const handleDelete = async id => {
        const originalReservations = [...reservations];

        // 1 approche optimiste ( probleme si serveur down )
        setReservations(reservations.filter(reservation => reservation.id !== id));

        // 1 approche pessimiste ( alors solution avec copie de tableau )
        try {
            await reservationsAPI.delete(id);
            toast.success("La reservation à bien été supprimé")
        } catch (error) {
            setReservations(originalReservations);
            toast.error("La suppression à échouée")
        }
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
            c.massage.nom.toLowerCase().includes(search.toLowerCase())
    );

    //pagination donnes
    const paginatedReservations = Pagination.getData(
        filteredReservations,
        currentPage,
        itemsPerPage);

    const formatDate = (str) => moment.utc(str).locale('fr').format('LLL');

    return (
        <>
            <div className="mb-3 py-3 d-flex justify-content-between align-items-center">
                <h1>Liste des réservations</h1>
                <Link to="/admin/reservationCreer" className="btn btn-primary" >Créer une réservation</Link>
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
                    <th>Fidélité</th>
                    <th>Massage</th>
                    <th>Date RDV</th>
                    <th>Action</th>
                    <th></th>
                </tr>
                </thead>
                <tbody >

                {paginatedReservations.map(reservation => <tr key={reservation.id}>
                    <td>{reservation.id}</td>
                    <td>
                        {reservation.nom} {reservation.prenom}
                    </td>
                    <td>{reservation.email}</td>
                    <td>{reservation.tel}</td>
                    <td className='text-center'>
                        <span className="badge badge-primary bg-info">{reservation.nbrePassage}</span>
                    </td>
                    <td className='text-center'>{reservation.massage.nom } </td>
                    <td className='text-center'>{formatDate(reservation.dateRdv)} </td>
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

export default ReservationPageListe;