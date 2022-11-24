import React from 'react'
import { Link } from 'react-router-dom'
import { CopyrightCircleOutlined} from '@ant-design/icons'

const Footer = () => {
  return (
    <div className='w-100 text-center p-4 bg-slate-50'>
        <h2 className="font-morganite text-3xl cursor-pointer">
            block<span className="text-gray-500">coin</span>
        </h2>
        
        {/* <p> <CopyrightCircleOutlined/> All rights reserved</p> */}
        <ul className="flex justify-center gap-5">
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