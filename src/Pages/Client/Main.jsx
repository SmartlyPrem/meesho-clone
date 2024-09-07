import React from 'react';
import Clientheader from '../../Components/Client/Header';
import Clientfooter from '../../Components/Client/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Clientheader/>
                <Outlet/>
            <Clientfooter/>
        </>
    );
}

export default Main;
