import Layout from '../components/layout';
import Hero from '../components/hero';
import Noticias from '../components/noticias';
import fetch from "isomorphic-unfetch";
import dayjs from "dayjs";

const BASE_URL = "https://api.canillitapp.com";
const date = dayjs().format("YYYY-MM-DD");

const Index = props => (
  <Layout>
    <Hero titulo={`Noticias de hoy - ${props.dateFormatted}`}/>
    <Noticias hayNoticias={props.news}/>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch(`${BASE_URL}/latest/${date}`);
  const news = await res.json();
  const dateFormatted = dayjs().format("DD-MM-YYYY");

  return { news, dateFormatted };
};

export default Index;