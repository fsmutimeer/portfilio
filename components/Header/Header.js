import styled from 'styled-components';
import Navigation from './NavigationMenu';

const HeaderWrapper = styled.header` 
 position: sticky;
    top: 0;

    height: 56px;
    /* width: 100%; */
    z-index: 100;
    background-color: rgb(52, 160, 52);
    background-color: #085477;
    color: white;
    display: flex;
    justify-content: center;

`

const Header = () => {
  return <HeaderWrapper>

      <Navigation/>
  </HeaderWrapper>;
};

export default Header;
