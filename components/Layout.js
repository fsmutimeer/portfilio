import Footer from './Footer/footer'
import Header from './Header/Header';
import Navigation from './Header/NavigationMenu';

const Layout = ({children})=>{
    return (<>
<Header/>
<main>{children}</main>
    <Footer/>
    </>)
}

export default Layout;