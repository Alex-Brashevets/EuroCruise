
import { Outlet, ScrollRestoration } from 'react-router-dom';
import {Header} from "../../Header/Header";
import {Footer} from "../../Footer/Footer";

const RootLayout = () => (
    <>
        <Header/>
        <Outlet/>
        <ScrollRestoration />
        <Footer />
    </>
);

export default RootLayout;