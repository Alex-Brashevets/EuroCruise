import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import {Header} from "../../Header/Header";
import { lazy, Suspense } from 'react';
const Footer = lazy(() => import("../../Footer/Footer"));
const RootLayout = () =>  {
    const {pathname} = useLocation();
    return (
        <>
            <Header/>
            <main style={pathname !== '/' ? {padding: '40px 0'} : {}}>
            <Outlet/>
            <ScrollRestoration />
            </main>
            <Suspense >
            <Footer />
            </Suspense>
            
        </>
    )
}
   ;

export default RootLayout;