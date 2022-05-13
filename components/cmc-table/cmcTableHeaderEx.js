import ChevronDown from "../../assets/svg/chevronDown"
import Info from "../../assets/svg/info"
import Image from "next/image"
import gr from "../../public/gr.png"

const styles = {
    textIcon: `flex items-center`
}

const CMCtableHeader = () => {
    return <tbody>
      <table style={{color: "white", margin: "30px", fontSize: "20px"}}>
    <tr>
      <th>Name</th>
      <th style={{}}>Exchane Store</th>
      <th>Volume(24h)</th>
      <th>Avg.Liquidity</th>
      <th>Weekly Visits</th>
      <th>#Markets</th>
      <th>#Coins</th>
      <th>Fiat Supported</th>
      <th>Volume Graphe</th>
    </tr>
    <tr style={{borderBottom: "1px solid gray"}}>
      <td style={{textAlign: "left"}}>Binance</td>
      <td>99</td>
      <td style={{color: "lightgreen"}}>$50,058,643,848</td>
      <td style={{textAlign: "center"}}>625</td>
      <td>21,908,745</td>
      <td>1681</td>
      <td style={{color: 'red'}} >395</td>
      <td>AED, ARS, AUD</td>
      <td><Image src={gr}/></td>
    </tr>
    <tr style={{borderBottom: "1px solid gray"}}>
      <td style={{textAlign: "left"}}>FTX</td>
      <td>85</td>
      <td style={{color: "lightgreen"}}>$50,058,643,848</td>
      <td style={{textAlign: "center"}}>705</td>
      <td>20,908,456</td>
      <td>1523</td>
      <td style={{color: 'red'}}>390</td>
      <td>USD, EUR, GBP</td>
      <td><Image src={gr}/></td>
    </tr>
    <tr style={{borderBottom: "1px solid gray"}}>
      <td style={{textAlign: "left"}}>Coinbase</td>
      <td>8.3</td>
      <td style={{color: "lightgreen"}}>$48,057,743,848</td>
      <td style={{textAlign: "center"}}>708</td>
      <td>20,008,145</td>
      <td>1583</td>
      <td style={{color: 'red'}}>388</td>
      <td>USD, EUR, GBP</td>
      <td><Image src={gr}/></td>
    </tr>
    <tr style={{borderBottom: "1px solid gray"}}>
      <td style={{textAlign: "left"}}>Kraken</td>
      <td>7.0</td>
      <td style={{color: "lightgreen"}}>$38,047,643,748</td>
      <td style={{textAlign: "center"}}>709</td>
      <td>21,908,745</td>
      <td>1581</td>
      <td style={{color: 'red'}}>282</td>
      <td>USD, EUR, GBP</td>
      <td><Image src={gr}/></td>
    </tr>
    <tr style={{borderBottom: "1px solid gray"}}>
      <td style={{textAlign: "left"}}>KuCoin</td>
      <td>6.9</td>
      <td style={{color: "lightgreen"}}>$29,050,630,326</td>
      <td style={{textAlign: "center"}}>912</td>
      <td>19,908,865</td>
      <td>1581</td>
      <td style={{color: 'red'}}>395</td>
      <td>USD, AED, ARS</td>
      <td><Image src={gr}/></td>
    </tr>
    <tr style={{borderBottom: "1px solid gray"}}>
      <td style={{textAlign: "left"}}>Huobi Global</td>
      <td>6.8</td>
      <td style={{color: "lightgreen"}}>$32,107,603,718</td>
      <td style={{textAlign: "center"}}>532</td>
      <td>10,908,715</td>
      <td>1482</td>
      <td style={{color: 'red'}}>294</td>
      <td>USD, EUR, GBP</td>
      <td><Image src={gr}/></td>
    </tr>
    <tr style={{borderBottom: "1px solid gray"}}>
      <td style={{textAlign: "left"}}>Gemini</td>
      <td>6.6</td>
      <td style={{color: "lightgreen"}}>$36,041,543,648</td>
      <td style={{textAlign: "center"}}>529</td>
      <td>19,329,437</td>
      <td>1681</td>
      <td style={{color: 'red'}}>250</td>
      <td>USD, EUR, GBP</td>
      <td><Image src={gr}/></td>
    </tr>
    <tr style={{borderBottom: "1px solid gray"}}>
      <td style={{textAlign: "left"}}>Bitfinex</td>
      <td>6.5</td>
      <td style={{color: "lightgreen"}}>$31,027,543,237</td>
      <td style={{textAlign: "center"}}>512</td>
      <td>18,322,32</td>
      <td>328</td>
      <td style={{color: 'red'}}>910</td>
      <td>USD, EUR, GBP</td>
      <td><Image src={gr}/></td>
    </tr>
    <tr style={{borderBottom: "1px solid gray"}}>
      <td style={{textAlign: "left"}}>Gate.io</td>
      <td>6.3</td>
      <td style={{color: "lightgreen"}}>$26,039,237,748</td>
      <td style={{textAlign: "center"}}>419</td>
      <td>10,931,715</td>
      <td>1681</td>
      <td style={{color: 'red'}}>351</td>
      <td>USD, EUR, GBP</td>
      <td><Image src={gr}/></td>
    </tr>
    <tr style={{borderBottom: "1px solid gray"}}>
      <td style={{textAlign: "left"}}>Binance.Us</td>
      <td>6.1</td>
      <td style={{color: "lightgreen"}}>$24,022,633,748</td>
      <td style={{textAlign: "center"}}>412</td>
      <td>17,815,819</td>
      <td>1681</td>
      <td style={{color: 'red'}}>290</td>
      <td>USD, EUR, GBP</td>
      <td><Image src={gr}/></td>
    </tr>
    <tr style={{borderBottom: "1px solid gray"}}>
      <td style={{textAlign: "left"}}>Coin Check</td>
      <td>5.9</td>
      <td style={{color: "lightgreen"}}>$21,023,328,721</td>
      <td style={{textAlign: "center"}}>419</td>
      <td>19,401,461</td>
      <td>8123</td>
      <td style={{color: 'red'}}>923</td>
      <td>USD, EUR, GBP</td>
      <td><Image src={gr}/></td>
    </tr>
    <tr style={{borderBottom: "1px solid gray"}}>
      <td style={{textAlign: "left"}}>Bitstamp</td>
      <td>5.7</td>
      <td style={{color: "lightgreen"}}>$23,012,583,128</td>
      <td style={{textAlign: "center"}}>091</td>
      <td>12,123,091</td>
      <td>1681</td>
      <td style={{color: 'red'}}>322</td>
      <td>USD, EUR, GBP</td>
      <td><Image src={gr}/></td>
    </tr>
    <tr style={{borderBottom: "1px solid gray"}}>
      <td style={{textAlign: "left"}}>Bithumb</td>
      <td>5.4</td>
      <td style={{color: "lightgreen"}}>$20,023,176,324</td>
      <td style={{textAlign: "center"}}>213</td>
      <td>90,908,745</td>
      <td>0341</td>
      <td style={{color: 'red'}}>192</td>
      <td>USD, EUR, GBP</td>
      <td><Image src={gr}/></td>
    </tr>
  </table>


  
    </tbody>
}

export default CMCtableHeader