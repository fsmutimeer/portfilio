import Link from 'next/link';
import styled from 'styled-components';

const Menu = styled.ul`
display:flex;

`
const List = styled.li` 
display: flex;
`

const HeaderItem = styled.a` 
display: flex;
color:#c8cacd;
padding:0.8rem;
font-weight:bold;
/* cursor: pointer; */
text-transform: capitalize;

`

const MenuItems = () => {
  return <Menu>

<List> <Link href='/' passHref>
    <HeaderItem>
        home
    </HeaderItem>
    </Link></List>
   
    <Link href='/projects' passHref>
    <HeaderItem>
        projects
    </HeaderItem>
    </Link>
    <Link href='/services' passHref>
    <HeaderItem>
        services
    </HeaderItem>
    </Link>
    <Link href='/contact' passHref>
    <HeaderItem>
        contact
    </HeaderItem>
    </Link>
    <Link href='/about' passHref>
    <HeaderItem>
        about us
    </HeaderItem>
    </Link>

  </Menu>;
};

export default MenuItems;
