import React, { Component } from 'react'
import Img from 'gatsby-image'
import Heading from '../reusable/Heading'

export default class Coursecart extends Component {
    constructor(props){
        super(props)
        this.state={
            courses: props.mycourses.edges
        }
    }
    render() {
        console.log(this.state)
        return (
            <section className='py-5'>
                <div className='container'>
                    <Heading title='Courses'/>
                    <div className='row'>
                        {this.state.courses.map(({node})=>{
                            return(
                                <div 
                                key={node.id}
                                className='col-11 col-md-6 d-flex mx-auto'>
                                    <Img fixed={node.images.fixed}/>
                                    <div className='flex-grow-1 px-3'>
                                        <div className='d-flex'>
                                            <h6 className='mb-0'>{node.title}</h6>
                                            <h6 className='mb-0 text-success ml-3'>$${node.price}</h6>
                                        </div>
                                        <p className='text-muted'>
                                            <small>{node.description.description}</small>
                                        </p>
                                        <button
                                         data-item-id={node.id}
                                         data-item-price={node.price}
                                         data-item-url="/"
                                         data-item-name={node.title}
                                         data-item-image={node.images.fixed.src}
                                         className='btn btn-warning snipcart-add-item'>
                                             Join Now
                                             </button>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>
                
            </section>
        )
    }
}
