import React from 'react'
import Image from 'next/image'
import Header from '../components/header'
import CMCtableHeader from '../components/cmc-table/cmcTableHeaderEx'
// import ex1 from '../public/ex1.png'
// import ex2 from '../public/ex2.png'
// import ex3 from '../public/ex3.png'

const exchange = () => {
  return (
    
    <div>
        <Header />
        <div className='header_body'>
        <h1 className='exchange_h1'>Top Cryptocurrency Spot Exchanges</h1>
        <p className='exchange_p'>CoinMarketCap ranks and scores exchanges based on traffic, liquidity, trading volumes, and confidence in the legitimacy of trading volumes reported. <u>Read More</u> </p>
        

        {/* <div className='ex_card'>
        <div className='ex_img'>
        <Image src={ex1} alt="" /></div>
        <div>
        <p className='ex_card_p'>Crypto Deep Drive</p> <br />
        <p className='ex_card_p1'>Whats Move to Earn?</p></div>
        </div>

        <div className='ex_card'>
        <div className='ex_img'>
        <Image src={ex1} alt="" /></div>
        <div>
        <p className='ex_card_p'>Crypto Deep Drive</p> <br />
        <p className='ex_card_p1'>Whats Move to Earn?</p></div>
        </div>

        <div className='ex_card'>
        <div className='ex_img'>
        <Image src={ex1} alt="" /></div>
        <div>
        <p className='ex_card_p'>Crypto Deep Drive</p> <br />
        <p className='ex_card_p1'>Whats Move to Earn?</p></div>
        </div> */}


        <CMCtableHeader />
        </div>
    </div>
  )
}

export default exchange