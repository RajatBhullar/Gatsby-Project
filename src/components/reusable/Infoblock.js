import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <section className='bg-theme my-5 py-4'>
            <div className='container'>
                <Heading title={heading} />
                <div className='row'>
                    <div className='col-10 col-sm-8 text-center mx-auto'>
                        <p className='lead mb-4 text-white'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, magnam? Maiores facere dignissimos et nulla beatae at laudantium blanditiis quo harum inventore voluptatum illum impedit corrupti nam, sint dolor animi.
                        </p>
                        <Link to='/about'>
                            <button className='btn btn-warning'>{heading}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
       )
}
