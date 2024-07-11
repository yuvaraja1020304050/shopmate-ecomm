import React from 'react'
import { Productcard } from '../component/Productcard'
export const Home = () => {
    const prod=[
        {"id":1,"name":"Bluetooth wireless","Price":149,"image":"images/headphone -2.jpg"}
        ,
        {"id":2,"name":"Boat","Price":199,"image": "images/headphone.img.1.jpg"},
        {"id":3,"name":"adidas","Price":249,"image": "images/headphone-3.jpg"}

    ]
  return (
    <main>
        <section>
            {prod.map((prod)=>{
              return  (<Productcard img={prod.image} para1={prod.name} para2={prod.Price} />)
            })}
        </section>
    </main>
  )
}
