import React, {useEffect, useState} from "react";
import Field from "../../components/forms/Field";
import Select from "../../components/forms/Select";
import {toast} from "react-toastify";
import massagesAPI from "../../services/massagesAPI";
import reservationsAPI from "../../services/reservationsAPI";
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import fr from 'date-fns/locale/fr'
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import moment from "moment";
import isSameDay from "date-fns/isSameDay";
import {getDay} from "date-fns";
import ReservationDomicile from "../../components/ReservationDomicile";

registerLocale('fr', fr);

const ReservationPage = (props) => {

    const [massages, setMassages] = useState([]);

    const fetchMassages = async () => {
        try {
            const data = await massagesAPI.findAll();
            setMassages(data);
        } catch (error) {
            toast.error("Impossible de charger les massages");
        }
    };

    // load de la liste de massage
    useEffect(() => {
        fetchMassages();
    }, []);


    const [reservation, setReservation] = useState({
        nom: "",
        prenom: "",
        email: "",
        tel: "",
        dateRdv: "",
        massage: ""
    });

    const [errors, setErrors] = useState({
        nom: "",
        prenom: "",
        email: "",
        tel: "",
        dateRdv: "",
        massage: ""
    });

    // gestion des changements du form input
    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setReservation({...reservation, [name]: value});
    };

    //gestion de la soumission du form
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await reservationsAPI.create({
                ...reservation,
                massage: `/api/massages/${reservation.massage}`
            });
            toast.success("Votre réservation à bien été prise en compte");
        } catch ({response}) {
            const {violations} = response.data;
            if (violations) {
                const apiErrors = {};
                violations.forEach(({propertyPath, message}) => {
                    apiErrors[propertyPath] = message;
                });
                setErrors(apiErrors);
                toast.error("Il y a des erreurs dans votre formulaire");

            }
        }
    };

    const [reservationsDate, setReservationsDate] = useState([]);
    const [date, setDate] = useState(setHours(setMinutes(new Date(), 0), 9));

    // recuperation des Dates de RDv
    const fetchReservationsDateList = async () => {
        try {
            const data = await reservationsAPI.findDate();
            setReservationsDate(data);
        } catch (error) {
            toast.error("Veuillez appeler pour prendre un rendez vous car le calendrier n'est pas à jour");
        }
    };

    // chargment du composant => recherche date resa
    useEffect(() => {
        fetchReservationsDateList();
    }, [])

    const formatHeure = (str) => moment.utc(str).locale('fr').format('H');
    const formatMinute = (str) => moment.utc(str).locale('fr').format('mm');
    const test = (str) => moment.utc(str).toString();
    const formatDate = (str) => moment(str).locale('fr').format('yyyy/MM/DD  HH:mm');

    const allExcludeTimes = reservationsDate.map(reservationDate => setHours(setMinutes(new Date(test(reservationDate.date)), formatMinute(reservationDate.date)), formatHeure(reservationDate.date)),);
    const getExcludeTimesForDate = (date) => allExcludeTimes.filter((time) => isSameDay(date, time));
    const [excludeTimes, setExcludeTimes] = useState(getExcludeTimesForDate(date));
    const isWeekday = (date) => {
        const day = getDay(date);
        return day !== 0;
    };

    return (

        <div className="py-3 mx-1">
            <h1 className="font-link text-center mt-1">Réservation au cabinet</h1>
            <form onSubmit={handleSubmit} className="row">
                <Field
                    name="nom"
                    label="Nom"
                    placeholder="Votre nom"
                    value={reservation.nom}
                    onChange={handleChange}
                    error={errors.nom}
                />
                <Field
                    name="prenom"
                    label="Prénom"
                    placeholder="Votre prénom"
                    value={reservation.prenom}
                    onChange={handleChange}
                    error={errors.prenom}
                />

                <Field
                    name="email"
                    label="Email"
                    placeholder="Votre adresse email"
                    type="email"
                    value={reservation.email}
                    onChange={handleChange}
                    error={errors.email}
                />

                <Field
                    name="tel"
                    label="N° de téléphone"
                    placeholder="Votre numéro de téléphone"
                    type="string"
                    value={reservation.tel}
                    onChange={handleChange}
                    error={errors.tel}
                />

                <div className="form-group col-12 col-md-6 my-2">
                    <label className="fs-3 mb-1" htmlFor="dateRdv">Date & heure du rendez vous</label>
                    <DatePicker
                        className="form-control"
                        name="dateRdv"
                        locale="fr"
                        required
                        label="Date & heure du rendez vous"
                        value={reservation.dateRdv = formatDate(date)}
                        error={errors.dateRdv}
                        showTimeSelect
                        dateFormat="Pp"
                        selected={date}
                        filterDate={isWeekday}
                        onChange={(date) => setDate(date)}
                        excludeTimes={excludeTimes}
                        onSelect={(date) => {
                            setExcludeTimes(getExcludeTimesForDate(date));
                        }}
                        timeIntervals={60}
                        minTime={setHours(setMinutes(new Date(), 0), 9)}
                        maxTime={setHours(setMinutes(new Date(), 0), 19)}

                    />
                </div>

                <Select
                    name="massage"
                    label="Quel massage avez vous choisi ?"
                    value={reservation.massage ? reservation.massage : reservation.massage = 1}
                    placeholder="Choisir un massage"
                    error={errors.massage}
                    onChange={handleChange}>
                    {massages.map(massage =>
                        <option key={massage.id} value={massage.id}>
                            {massage.nom} | {massage.prix}€
                        </option>)
                    }
                </Select>

                <div className="form-group">
                    <button type="submit" className="btn btn-primaire fs-3 mt-3 col-12">Réserver un moment de détente (
                        au cabinet )
                    </button>
                </div>
            </form>
            <ReservationDomicile/>
        </div>
    );
};

export default ReservationPage;