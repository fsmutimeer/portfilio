import Link from 'next/link';
import styled from 'styled-components';

const HeaderItem = styled.a` 
display: flex;
color:#c8cacd;
padding:1rem;
font-weight:bold;
cursor: pointer;
text-transform: capitalize;


`

const Navigation = () => {
  return <>
  <Link href='/' passHref>

<HeaderItem>
    home
</HeaderItem>
</Link>
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
  
  </>;
};

export default Navigation;
