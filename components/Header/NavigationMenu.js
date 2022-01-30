import styled from 'styled-components';
import Logo from './Logo';
import MenuItems from './MenuItems';
import Search from './Search';


const NavMenu = styled.nav`
/* display: flex;
justify-content:stretch;
align-items: center;
height: 76px;
background: black;
width: 100%; */
display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    /* width: 80%; */
    margin: 0 auto;
    
    height: 100%;

`



const Navigation = () => {
  return <NavMenu>
      <Logo/>
      <Search/>
    <MenuItems />
  
  </NavMenu>;
};

export default Navigation;
