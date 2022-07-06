import React from 'react'
import './Products.css'
import Heading from "../../common/Heading"
import { Produts } from "../../data/Data"
const Products = () => {
  return (
    <>
    <hr></hr>
     <Heading title='Recent Property Listed' subtitle='' />
      <div className='container grid4 mtop ml-3'>
        {Produts.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <div className='' key={index}>
                <div className="card productCard mt-5" key={index}>
                <div className="row">

                <div className="col-7 leftide">
                 <p className='pname'>{name}</p>
                 <p className='pcat mb-5'>{category}</p>
                 <button className='btn Orderbtn'> Order Now</button>
                </div>
               
              <div className="col-5"> 
                
                <img className='images' src={cover} alt="" />
                </div>

                </div>
              
              
             
              </div>

              
            </div>
          )
        })}
      </div>
    </>
  )
}


export default Products