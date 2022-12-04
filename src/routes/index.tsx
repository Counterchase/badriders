import {useContext} from "react";
import {AuthGoogleContext} from "../contextes/authGoogle";
import {Navigate, Outlet} from "react-router-dom";

export default function PrivateRoutes() {
    const {signed} = useContext(AuthGoogleContext);
    console.log(signed)
    return signed ? <Outlet/> : <Navigate to={'/'}/>
}
