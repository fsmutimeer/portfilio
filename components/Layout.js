import Footer from './Footer/footer'
import Nav from './Navigation/Nav';

const Layout = ({children})=>{
    return (<>
<Nav/>
<main>{children}</main>
    <Footer/>
    </>)
}

export default Layout;