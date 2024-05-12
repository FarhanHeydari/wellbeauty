import React from 'react';
import {Navigate} from "react-router-dom";

export function Home() {

    return (

        <Navigate to={(localStorage.getItem('token')? '/profile': '/login')}/>
    );
}

