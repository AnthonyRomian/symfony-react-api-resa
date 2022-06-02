import React, {useEffect, useState} from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { formatDate } from '@fullcalendar/core'

import reservationsAPI from "../../services/reservationsAPI";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";

const ReservationPageCalendrier = (props) => {

    const [reservations, setReservations] = useState([]);
    const [tableauEvents, setTableauEvents] = useState([]);

    // recuperation des reservations
    const fetchReservations = async () => {
        try {
            const data = await reservationsAPI.findAll();
            setReservations(data);
        } catch (error) {
            toast.error("Impossible de charger les clients");
        }
    };

    // chargment du composant => recherche  Reservations
    useEffect(() => {
        fetchReservations();
    }, [])


    // chaque mise a jour de reservation => mise à jour des events dans le calendier
    useEffect(() => {
        const test = reservations.map(reservation => (
            {
                title: reservation.nom,
                date: reservation.dateRdv,
                prix: reservation.massage.prix,
                massage: reservation.massage.nom,
                dateRdv: formatDate(reservation.dateRdv , {
                timeZoneName: 'short',
                timeZone: 'UTC',
                locale: 'fr'
            })
            }
        ));
        setTableauEvents(test);
    }, [reservations])

    const renderEventContent = (eventInfo) => {
        return (
            <>
                <div className="bg-info">
                    <p className="text-black"><i>{eventInfo.event.title}</i></p>
                    <p className="text-black"><i>{eventInfo.event.extendedProps.massage}</i></p>
                    <p className="text-black"><i>{eventInfo.event.extendedProps.dateRdv}</i></p>
                    <p className="text-black"><i>{eventInfo.event.extendedProps.start}</i></p>
                    <p className="text-black">{eventInfo.timeText}</p>
                </div>

            </>
        )
    };
    return (
        <div className="py-3">

            <div className="mb-3 py-3 d-flex justify-content-between align-items-center">
                <h1>Calendrier</h1>
                <div>
                    <Link to="/admin/reservationCreer" className="btn btn-primary mx-2">Créer une réservation</Link>
                    <Link to="/admin/reservationList" className="btn btn-primary mx-2">Liste des réservations</Link>
                </div>

            </div>
            <FullCalendar
                eventContent={renderEventContent}
                plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                initialView="dayGridMonth"
                weekends={true}
                locale={'fr'}
                events={tableauEvents}
                eventTimeFormat={[ // like '14:30:00'
                    {hour:'2-digit'},
                    {minute:'2-digit'},
                    {second:'2-digit'},
                    {meridiem:'false'}
                ]}
                eventColor={'#db8824'}
                eventTextColor={'#000000FF'}
                buttonText={[
                    {today: "Aujourd'hui"},
                    {month: "Mois"},
                    {week: "Semaine"},
                    {list: "Liste"}
                ]}
            />
        </div>

    );
}

export default ReservationPageCalendrier;