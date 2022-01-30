import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import {AiOutlineHome, AiOutlineSearch, AiOutlineProject} from 'react-icons/ai'
import Navigation from './Navigation';

const Wrapper = styled.div` 
    display: flex;
    position: sticky;
    top:0;
    /* background: #26a679; */
    background: black;
    align-items: center;
    width: 100%;
    height: 76px;
    padding:1rem;
`
const LogoWrapper = styled.div`
display: flex;
cursor: pointer;
justify-content: center;
align-items: center;
 
`
const LogoText = styled.h3`
display: flex;
color:white;
flex: 1;
align-items: center;
justify-content: center;
text-align: center;
padding:1rem;
`
const SearchBar = styled.div`
display: flex;
background: #363840;
width: 45%;
/* flex:1; */
padding:0.4rem;
align-items: center;
border-radius: 3rem;
`
const SearchIcon = styled.div`
    display: flex;
    color:#8a939b;
    margin: 0.4rem;
    background: transparent;
    font-size: 1.2em;
   
`

const SearchInput = styled.input`
height: 2.2rem;
width: 45%;
background: transparent;
border: 0;
outline: none;
color: #e6e8eb;
font-size: 1rem;
`
const HeaderItems = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;


`


const HeaderIcon = styled.div` 
color:#8a939b;
font-size: 1.6em;

`

const Header = () => {
  return <Wrapper>
      <Link href='/' passHref>
          <LogoWrapper>
          <Image src="/logo.jpg" alt="fsmutimeer" width={40} height={40} />
          <LogoText>Feroz S.Mutimeer</LogoText>
          </LogoWrapper>
      </Link>
      <SearchBar>
          <SearchIcon>
            <AiOutlineSearch />
          </SearchIcon>
          <SearchInput 
          placeholder='Search...'/>
      </SearchBar>
      <HeaderItems >
          {/* Navigation menu */}
          <Navigation />
        </HeaderItems>
  </Wrapper>;
};

export default Header;
