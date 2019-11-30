import Layout from "../../components/Layout";
import Hero from "../../components/hero";
import Noticias from "../../components/noticias";
import fetch from "isomorphic-unfetch";

const BASE_URL = "https://api.canillitapp.com";

const Search = props => (
  <Layout>
    <Hero titulo={`Buscando noticias sobre: "${props.query}"`}/>
    <Noticias hayNoticias={props.news} />
  </Layout>
);

Search.getInitialProps = async function(context) {
  const { query } = context.query;
  const res = await fetch(`${BASE_URL}/search/${query}`);
  const news = await res.json();

  return { news, query};
};

export default Search;
