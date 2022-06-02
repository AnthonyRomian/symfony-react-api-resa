import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import reservationsAPI from "../../services/reservationsAPI";
import promotionsAPI from "../../services/promotionsAPI";
import Pagination from "../../components/Pagination";

const PromotionPage = (props) => {

    const [promotions, setPromotions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');

    // recuperation des promos
    const fetchPromotions = async () => {
        try {
            const data = await promotionsAPI.findAll();
            setPromotions(data);
        } catch (error) {
            toast.error("Impossible de charger les clients");
        }
    };

    // chargment du composant => recherche  customers
    useEffect(() => {

        fetchPromotions();
    }, [])

    // gestion de delete client
    const handleDelete = async id => {

        const originalPromotions = [...promotions];

        // 1 approche optimiste ( probleme si serveur down )
        setPromotions(promotions.filter(promotion => promotion.id !== id));

        // 1 approche pessimiste ( alors solution avec copie de tableau )
        try {
            await promotionsAPI.delete(id);
            toast.success("La promotion à bien été supprimée")
        } catch (error) {
            setPromotions(originalPromotions);
            toast.error("La suppression à échouée")
        }
    };

    // gestion de delete client
    const handleEdit = async id => {

        const originalPromotions = [...promotions];

        // 1 approche optimiste ( probleme si serveur down )
        setPromotions(promotions.filter(reservation => reservation.id !== id));

        // 1 approche pessimiste ( alors solution avec copie de tableau )
        try {
            await reservationsAPI.delete(id);
            toast.success("La promotion à bien été supprimée")
        } catch (error) {
            setPromotions(originalPromotions);
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
    const filteredPromotions = promotions.filter(
        c => c.nom.toLowerCase().includes(search.toLowerCase()) ||
            c.description.toLowerCase().includes(search.toLowerCase())
    );

    //pagination donnes
    const paginatedPromotions = Pagination.getData(
        filteredPromotions,
        currentPage,
        itemsPerPage);

    const formatDate = (str) => moment(str).format('DD/MM/YYYY hh:m');


    return (
        <>
            <div className="mb-3 py-3 d-flex justify-content-between align-items-center">
                <h1>Liste des promo</h1>
                <Link to="/admin/promoCreer" className="btn btn-primary" >Créer une promo</Link>
            </div>
            <div className="form-group">
                <input type="text" onChange={handleSearch} value={search} className="form-control" placeholder="Rechercher..." />
            </div>

            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {paginatedPromotions.map(promotion => <tr key={promotion.id}>
                    <td>{promotion.id}</td>
                    <td>{promotion.nom}</td>
                    <td>{promotion.description}</td>
                    <td className='text-center'>{promotion.img} </td>
                    <td>
                        <Link
                            to={"/admin/promoEdit/" + promotion.id}
                            className="btn btn-sm btn-primary mr-2">Editer</Link>
                        <button
                            onClick={() => handleDelete(promotion.id)}
                            className="btn btn-sm btn-danger text-center">Supprimer</button>
                    </td>
                </tr>)}

                </tbody>
            </table>

        </>
    );
}

export default PromotionPage;