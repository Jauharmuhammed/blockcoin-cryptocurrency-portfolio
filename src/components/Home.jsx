import millify from 'millify'
import React from 'react'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'
import Spinner from './Spinner'

const Home = () => {
  const {data, isFetching} = useGetCryptosQuery(12)

  if(isFetching) return <Spinner/>

  console.log(data);
  const stats = data?.data?.stats
  return (
    <div>
      <div className='mx-16 mt-5 py-16 p-5'>
        {stats && <ul className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between'>
          <li className='flex flex-col items-center mb-3'>Total Cryptocurrencies <span className='text-3xl font-semibold'>{stats.total}</span> </li>
          <li className='flex flex-col items-center mb-3'>24 Hour Volume <span className='text-3xl font-semibold'>{millify(stats.total24hVolume)}</span>  </li>
          <li className='flex flex-col items-center mb-3'>Total Exchanges <span className='text-3xl font-semibold'>{millify(stats.totalExchanges)}</span>  </li>
          <li className='flex flex-col items-center mb-3'>Total Market Cap <span className='text-3xl font-semibold'>{millify(stats.totalMarketCap)}</span>  </li>
          <li className='flex flex-col items-center mb-3'>Total Markets <span className='text-3xl font-semibold'>{millify(stats.totalMarkets)}</span>  </li>
        </ul>}
      </div>
      <div>
        <div className="flex justify-between px-16 mt-5 items-baseline">
          <h2 className='text-2xl font-semibold'>Popular Cryptocurrencies</h2>
          <Link to='/coins'><p className='text-sky-800'>Show more</p></Link>
        </div>
        <Cryptocurrencies simplified />
      </div>
      <div>
      <div className="flex justify-between px-16 mt-5 items-baseline">
          <h2 className='text-2xl font-semibold'>Latest News</h2>
          <Link to='/news'><p className='text-sky-800'>Show more</p></Link>
        </div>
        <News simplified />
      </div>
    </div>
  )
}

export default Home