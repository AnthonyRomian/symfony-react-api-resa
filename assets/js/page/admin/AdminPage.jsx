import React, {useState} from 'react';
import Sidebar from "../../components/Sidebar";
import { HashRouter, Route, Switch} from "react-router-dom";

import AuthAPI from "../../services/AuthAPI";
import AuthContext from "../../contexts/AuthContext";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ReservationPageListe from "./ReservationPageListe";
import ReservationPageCalendrier from "./ReservationPageCalendrier";
import MassagePageCreation from "./MassagePageCreation";
import PromotionPageCreation from "./PromotionPageCreation";
import PrivateRoute from "../../components/PrivateRoute";
import MassagePageList from "./MassagePageList";
import PromotionPageList from "./PromotionPage";
import PromotionPageEdit from "./PromotionPageEdit";
import {toast, ToastContainer} from "react-toastify";
import ReservationPageCreation from "./ReservationPageCreation";

AuthAPI.setup();

const AdminPage = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        AuthAPI.isAuthenticated()
    );
    return (
        <>
            <AuthContext.Provider value={{
                isAuthenticated,
                setIsAuthenticated
            }}>
                <HashRouter  >
                        <div  >
                            <Sidebar />
                            <main className="container">
                                <Switch>
                                    <PrivateRoute exact path="/admin/reservationList" component={ReservationPageListe} />
                                    <PrivateRoute exact path="/admin/reservationCreer" component={ReservationPageCreation} />
                                    <PrivateRoute exact path="/admin/calendar" component={ReservationPageCalendrier} />
                                    <PrivateRoute exact path="/admin/massageList" component={MassagePageList} />
                                    <PrivateRoute exact path="/admin/massageCreer" component={MassagePageCreation} />
                                    <PrivateRoute exact path="/admin/promoList" component={PromotionPageList} />
                                    <PrivateRoute exact path="/admin/promoCreer" component={PromotionPageCreation} />
                                    <PrivateRoute exact path="/admin/promoEdit/:id" component={PromotionPageEdit} />
                                    <Route path="/admin/register" component={RegisterPage}/>
                                    <Route path="/admin/" component={LoginPage}/>
                                </Switch>
                            </main>
                        </div>
                    </HashRouter>
                <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
            </AuthContext.Provider>

        </>

     );
};
 
export default AdminPage;