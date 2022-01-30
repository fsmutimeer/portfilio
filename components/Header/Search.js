import styled from "styled-components";
import {AiOutlineSearch, } from 'react-icons/ai'

const SearchBar = styled.div`
display: flex;
background: #363840;
/* width: 100%; */
/* flex:1; */
height: 2.3em;
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
height: 2.3em;
background: transparent;
border: 0;
outline: none;
color: #e6e8eb;
font-size: 1rem;
`
const Search = () => {
  return  <SearchBar>
  <SearchIcon>
    <AiOutlineSearch />
  </SearchIcon>
  <SearchInput 
  placeholder='Search...'/>
</SearchBar>
;
};

export default Search;
