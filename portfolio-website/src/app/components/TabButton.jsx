import React from 'react'
import { motion } from 'framer-motion'

const variants = {
    default: {width:0},
    active: {width:'calc(100% - .75rem'},
}

const TabButton = ({ active, selectTab, children}) => {
    const buttonClasses = active ? 'text-white' : 'text-[#ADB7BE]'
    return (
        <button onClick={selectTab}>
                <p className={`mr-3 font-semibold ${buttonClasses}`}>{children}
                </p>
                <motion.div animate={active ? 'active' : 'default'} 
                variants={variants} 
                className='h-1 bg-primary-500 rounded-full'></motion.div>
            </button>
    )
}

export default TabButton