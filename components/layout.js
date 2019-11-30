import Head from 'next/head'
import '../styles/styles.sass'
import NavigationBar from '../components/navigationBar';

export default ({ children }) => {
  return (
    <div>
      <Head>
        <title>News Room - Acamica</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <header>
        <NavigationBar/> 
      </header>
      {children}
    </div>
  )
}