
import Image from 'next/image';
import styled from 'styled-components';

const Footer = styled.footer`
	
	display:flex;
	background:black;
	height:200px;
	color:white;
`

const footer = () => {
let currentYear = new Date().getFullYear()
  return <div>
      <Footer >
		  <hr/>
    <a
    href=""
    rel="noopener noreferrer">
    Powered by{' '}
    <span>
        <Image src="/logo.jpg" alt="fsmutimeer" width={40} height={40} />
    </span>
</a>

<p>{currentYear}</p>
</Footer>
  </div>;
};

export default footer;



