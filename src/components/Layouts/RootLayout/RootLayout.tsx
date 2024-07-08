
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import {Header} from "../../Header/Header";
import {Footer} from "../../Footer/Footer";

const RootLayout = () =>  {
    const {pathname} = useLocation();
    return (
        <>
            <Header/>
            <main style={pathname !== '/' ? {padding: '40px 0'} : {}}>
            <Outlet/>
            <ScrollRestoration />
            </main>
            
            <Footer />
        </>
    )
}
   ;

export default RootLayout;