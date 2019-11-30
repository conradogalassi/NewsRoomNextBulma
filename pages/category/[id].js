import Layout from "../../components/Layout";
import Hero from "../../components/hero";
import Noticias from "../../components/noticias";
import fetch from "isomorphic-unfetch";

const BASE_URL = "https://api.canillitapp.com";

const Category = props => (
  <Layout>
    <Hero titulo={props.categoria}/>
    <Noticias hayNoticias={props.news}/>
  </Layout>
);

Category.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`${BASE_URL}/news/category/${id}`);
  const news = await res.json();
  let {categoria} = '';

  switch (id) {
      case "1": 
        categoria = "Política";
        break;
  
      case "2": 
        categoria = "Internacionales";
        break;
  
      case "3": 
        categoria = "Tecnología";
        break;
  
      case "4": 
        categoria = "Espectáculos";
        break;
      
      case "5": 
        categoria = "Deportes";
        break;
  }

  return { news, categoria};
};

export default Category;
