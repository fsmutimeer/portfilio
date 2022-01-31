import Head from "next/head";


const Header = (props) => {
  return <Head>
	  <title>{props.title}</title>
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={props.description} />

        <link rel="icon" href="/favicon.ico" />
  </Head>;
};

export default Header;
