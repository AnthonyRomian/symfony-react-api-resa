import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import massagesAPI from "../../services/massagesAPI";
import Pagination from "../../components/Pagination";

const MassagePageListe = (props) => {

    const [massages, setMassages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');

    // recuperation des customers
    const fetchMassages = async () => {
        try {
            const data = await massagesAPI.findAll();
            setMassages(data);
            /*try {
                axios.get(MASSAGES_API)
                    .then(response => response.data)
                    .then(data => setMassages(data));*/

        } catch (error) {
            toast.error("Impossible de charger les massages");
        }
    };

    // chargment du composant => recherche  customers
    useEffect(() => {

        fetchMassages();

    }, [])

    // gestion de delete client
    const handleDelete = async id => {
        const originalMassages = [...massages];

        // 1 approche optimiste ( probleme si serveur down )
        setMassages(massages.filter(massage => massage.id !== id));

        // 1 approche pessimiste ( alors solution avec copie de tableau )
        try {
            await massagesAPI.delete(id);
            toast.success("Le client à bien été supprimé")
        } catch (error) {
            setMassages(originalMassages);
            toast.error("La suppression à échouée")
        }

    };

    // gestion de la pagination / switch page
    const handlePageChange = page => setCurrentPage(page);

    // gestion de la recherche
    const handleSearch = ({currentTarget}) => {
        setSearch(currentTarget.value);
        setCurrentPage(1);
    };

    const itemsPerPage = 10;

    // <filtrage customers recherche
    const filteredMassages = massages.filter(
        c => c.nom.toLowerCase().includes(search.toLowerCase())
    );

    //pagination donnes
    const paginatedMassages = Pagination.getData(
        filteredMassages,
        currentPage,
        itemsPerPage);

    const formatDate = (str) => moment(str).format('DD/MM/YYYY hh:m');

    return (

        <>
            <div className="mb-3 py-3 d-flex justify-content-between align-items-center">
                <h1>Liste des massages</h1>
                <Link to="/tables/bootstrap-massage-creation" className="btn btn-primary">Créer un massage</Link>
            </div>
            <div className="form-group">
                <input type="text" onChange={handleSearch} value={search} className="form-control"
                       placeholder="Rechercher..."/>
            </div>

            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th>Durée</th>
                    <th>Action</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {paginatedMassages.map(massage => <tr key={massage.id}>
                    <td>{massage.nom}</td>

                    <td>{massage.prix}€</td>
                    <td>{massage.duree}</td>
                    <td>

                        {/*<Link
                            to={"/admin/massageEdit/" + massage.id}
                            className="btn btn-sm btn-primary mr-2">Editer</Link>*/}
                        <button
                            onClick={() => handleDelete(massage.id)}
                            className="btn btn-sm btn-danger text-center">Supprimer
                        </button>
                    </td>
                </tr>)}

                </tbody>
            </table>
            {/*{itemsPerPage < filteredMassages.length && (
                <Pagination
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    length={filteredMassages.length}
                    onPageChanged={handlePageChange} />)}*/}

        </>
    );
}

export default MassagePageListe;