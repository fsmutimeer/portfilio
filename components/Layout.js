import Navivation from './Nav';
import Footer from './footer'

const Layout = ({children})=>{
    return (<>
    <Navivation/>
    <main>{children}</main>
    <Footer/>
    </>)
}

export default Layout;