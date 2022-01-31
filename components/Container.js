import styled from "styled-components"


const Container = styled.main `
		display:flex;
	 max-width:${(props)=>props.width ? props.width: '1366px'} ;
	 margin:0 auto;
	 background:${props => props.bg ? props.bg : ''};
	 height:${props=>props.height?props.height :''};
	
`



export default Container;
