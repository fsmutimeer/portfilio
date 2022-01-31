import Nav from './Navigation/Nav';
import Footer from './Footer/footer'

const Layout = ({ children }) => {
	return (<>
		<Nav />
		{children}
		<Footer />
	</>)
}

export default Layout;