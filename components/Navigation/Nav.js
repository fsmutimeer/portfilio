import styled from "styled-components";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import Search from "./Search";
import MenuItems from "./MenuItems";

const Navbar = styled.nav ` 
	position:sticky;
	top:0;
	background:transparent;
	height:74px;
	display:flex;
	justify-content:center;
	align-items:center;
	font-size:1.2rem;
	z-index:100;

	&.active{
		background:black;
		transition:all .3s ease-out

}

`
const NaveWrapper = styled.header ` 
display:flex;
justify-content:center;
align-items:center;
height: 74px;
/* max-width:1500px; */
`
const Nav = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const [navbar, setNavbar] = useState(false);

	const handleClick = ()=>setClick(!click);
	const closeMobileMenu = ()=>setClick(false);

	const showButton = ()=>{
		if(window.innerWidth <=960)
		{
			setButton(false);
		}
		else {
			setButton(true);
		}
	}

	useEffect(()=>{
		showButton();
		// change bg
		window.addEventListener('resize', showButton);
		const changeBackground = ()=>{
			if(window.scrollY >=80)
			{
				setNavbar(true);
				
			}
			else{
				setNavbar(false);
			}	
		}
		window.addEventListener('scroll', changeBackground);
		// return () => {
		// 	console.log('scrool removeed')
		// 	window.removeEventListener('scroll', changeBackground)
		//   }
},[]);


	

  return <Navbar className={navbar ? 'active': null}>
	  <NaveWrapper>
		<Logo/>
		<Search navbar={navbar ? 'active': null}/>
		<MenuItems/>
	  </NaveWrapper>
  </Navbar>;
};

export default Nav;
