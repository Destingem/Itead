import DefaultWrapper from '../components/DefaultWrapper/DefaultWrapper'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return <DefaultWrapper><Component {...pageProps} /></DefaultWrapper>
}

export default MyApp
