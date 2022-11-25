import React from 'react'
import { Link } from 'react-router-dom'
import { CopyrightCircleOutlined} from '@ant-design/icons'

const Footer = () => {
  return (
    <div className='w-100 text-center p-4  bg-slate-100 dark:bg-slate-900 ' >
        <h2 className="font-morganite text-3xl cursor-pointer dark:text-white tracking-[1px]">
            block<span className="text-gray-500 dark:text-gray-400">coin</span>
        </h2>
        
        {/* <p> <CopyrightCircleOutlined/> All rights reserved</p> */}
        <ul className="flex justify-center gap-5 dark:text-white">
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/exchanges'>
                <li>Exchanges</li>
            </Link>
            <Link to='/news'>
                <li>News</li>
            </Link>
        </ul>
    </div>
  )
}

export default Footer