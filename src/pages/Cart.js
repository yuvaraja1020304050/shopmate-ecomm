import React from 'react'
import {Cartcard} from '../component/Cartcard'
export const Cart = () => {
  const prod=[
    {"id":1,"name":"Bluetooth wireless","Price":149,"image":"images/headphone -2.jpg"}
    ,
    {"id":2,"name":"Boat","Price":199,"image": "images/headphone.img.1.jpg"},
    {"id":3,"name":"adidas","Price":249,"image": "images/headphone-3.jpg"}

]


  return (
    <main>
      <section>
        <h1>Cart items:{prod.length}</h1>
        {prod.map((prod)=>{
          return <Cartcard key={prod.key} product={prod}/>
        })}
      </section>
    </main>
  )
}
