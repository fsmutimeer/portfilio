import React from 'react';
import Layout from '../components/Layout'
import Header from '../components/Head/Head';
import  Container  from '../components/Container';
const blog = () => {
  return <Layout>
	  <Container bg='red' height='30vh' width='100vw'>
    <Header title="Blog" description="blog page"/>

	Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempore dolorem nostrum quod nobis placeat, quasi optio sed nihil magni mollitia repellendus veniam laborum incidunt laudantium, porro eos maiores. Ea.
	</Container>
  </Layout>;
};

export default blog;
