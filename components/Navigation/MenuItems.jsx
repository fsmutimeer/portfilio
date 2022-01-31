import Link from 'next/link';
import styled from 'styled-components';
import ROUTES from '../../constants/routes';
const Menu = styled.ul`
display:flex;

`


const HeaderItem = styled.a` 
display: flex;
color:#c8cacd;
padding:0.8rem;
/* font-weight:bold; */
/* cursor: pointer; */
text-transform: capitalize;

`

const MenuItems = () => {
  return <Menu>

 <Link href={ROUTES.home} passHref>
    <HeaderItem>
        home
    </HeaderItem>
 </Link>
	
 <Link href={ROUTES.blog} passHref>
    <HeaderItem>
        blog
    </HeaderItem>
 </Link>
	
   
    <Link href={ROUTES.projects} passHref>
    <HeaderItem>
        projects
    </HeaderItem>
    </Link>
    <Link href={ROUTES.services} passHref>
    <HeaderItem>
        services
    </HeaderItem>
    </Link>
    <Link href={ROUTES.contact} passHref>
    <HeaderItem>
        contact
    </HeaderItem>
    </Link>
    <Link href={ROUTES.about} passHref>
    <HeaderItem>
        about us
    </HeaderItem>
    </Link>

  </Menu>;
};

export default MenuItems;
