import Image from 'next/image'
import Search from '../assets/svg/search'
import { ConnectButton } from 'web3uikit'
import { useContext } from 'react'
import { CoinMarketContext } from '../context/context'
import lg from '../public/logo.png'

const styles = {
  navLink: `text-white flex mx-[10px]`,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  navlogo: `items-center width: 100px height: 100px` ,
  nav: `flex justify-center items-center gap-[20px]`,
  header: `bg-[black] text-white flex h-30 gap-[100px] w-full p-[30px]`,
  headerWrapper: `flex h-full max-w-screen-xl px-4`,
  inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
  input: `bg-transparent outline-none text-white w-70 ml-3`,
  cursorPointer: `mr-5 cursor-pointer`,
}

const Header = () => {
  const { getQuote } = useContext(CoinMarketContext)
  return (

  <div>

      <div className="header">
        <div className='logo'><Image src={lg} alt="" /></div>
        <ul>
          <li>
            <a href="/">Cryptocurrencies</a>
          </li>
          <li>
            <a href="/exchange">Exchanges</a>
          </li>
          {/* <li>
            <a href="#">NFT</a>
          </li> */}
          <li>
            <a href="#">Cryptown</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Watchlist</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Learn</a>
          </li>
        </ul>
      
        {/* <button className="button_header">Connect Wallet </button> */}
        
        {/* <div className='flex items-center'> */}
           {/* <ConnectButton /> */}
           {/* <div className={styles.inputContainer}> */}
             {/* <Search /> */}
             {/* <input className={styles.input} placeholder='Search' />
           </div>
        </div> */}
      </div>
      

  </div>







    // <div className={styles.header}>
    //      <Image
    //      src={lg}
    //      alt="logo"
    //     width={60}
    //     height={60}
    // />
    //   <div className={styles.headerWrapper}>
    //     <nav className={styles.nav}>
    //       <div className={styles.navItem}>
     
    //         <div className={styles.navLink}>Cryptocurrencies</div>
    //         <div className={styles.badge} />
    //       </div>

    //       <div className={styles.navItem} onClick={getQuote}>
    //         <div className={styles.navLink}>Exchanges</div>
    //       </div>

    //       <div className={styles.navItem}>
    //         <div className={styles.navLink}>NFT</div>
    //         <div className={styles.badge} />
    //       </div>

    //       <div className={styles.navItem}>
    //         <div className={styles.navLink}>Cryptown</div>
    //         <div className={styles.badge} />
    //       </div>

    //       <div className={styles.navItem}>
    //         <div className={styles.navLink}>Portfolio</div>
    //       </div>

    //       <div className={styles.navItem}>
    //         <div className={styles.navLink}>Watchlist</div>
    //       </div>

    //       <div className={styles.navItem}>
    //         <div className={styles.navLink}>Products</div>
    //         <div className={styles.badge} />
    //       </div>

    //       <div className={styles.navItem}>
    //         <div className={styles.navLink}>Learn</div>
    //       </div>
    //     </nav>

    //     <div className='flex items-center'>
    //       <ConnectButton />
    //       <div className={styles.inputContainer}>
    //         <Search />
    //         <input className={styles.input} placeholder='Search' />
    //       </div>
    //     </div>
    //   </div> 
    // </div>
  )
}

export default Header
