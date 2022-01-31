import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const LogoWrapper = styled.div`
display: flex;
cursor: pointer;
justify-content: center;
align-items: center;
margin-left:1.5em;
.logo{
	border-radius:50%;
}
.logo:hover {
	transition:all .5s ease-out;

    transform: scale(1.05);

  }
 
`
const LogoText = styled.h3`
display: flex;
color:#8a939b;
flex: 1;
align-items: center;
justify-content: center;
text-align: center;
padding:1rem;
margin-right: 1em;
`

const Logo = () => {
  return  <Link href='/' passHref>
  <LogoWrapper>
  <Image className="logo" src="/logo.jpg" alt="fsmutimeer" width={40} height={40} />
  <LogoText>RocketMan</LogoText>
  </LogoWrapper>
</Link>

};

export default Logo;
