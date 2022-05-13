import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { GunProvider } from '../context/gunContext'
import { CoinMarketProvider } from '../context/context'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://zfmegoxmkc0l.usemoralis.com:2053/server"
      appId='wPOO8tmLS06G5QU0PSkThmjhBALpiA45BeSQSYgI'
    >
      <GunProvider>
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>
    </MoralisProvider>
  )
}

export default MyApp
