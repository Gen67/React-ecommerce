import { useState } from "react";
import "../Components/shop.css";
function Shop(){ 

    const products =[
    {
        id:1, 
        name:"Wireless Headphones", 
        price: 350.00, 
        inStock: true, 
        image:"https://tse4.mm.bing.net/th/id/OIP.UAhvE2HPLE6L2CgM5APOtQHaGX?r=0&cb=thfvnextfalcon4&rs=1&pid=ImgDetMain&o=7&rm=3"
    }, 
    {
        id:2, 
        name:"Smart Watch", 
        price: 500.00, 
        inStock: false, 
        image:"https://www.androidauthority.com/wp-content/uploads/2024/07/Samsung-Galaxy-Watch-7-on-table.jpg"
    }, 
    {
        id:3, 
        name: "Mouse Pad",
        price: 150.00, 
        inStock: true,
        image:"https://thf.bing.com/th/id/OIP.qakbN6oAhj4tQw3P2hFkkQHaFs?w=238&h=183&c=7&r=0&o=7&cb=thfc1falcon4&pid=1.7&rm=3"
    }, 
    {
        id:4, 
        name: "Mouse",
        price: 320.00, 
        inStock: false,
        image:"https://thf.bing.com/th/id/OIP.mAkxS19YxYV0ueGlHF3GKQHaHa?w=184&h=184&c=7&r=0&o=7&cb=thfc1falcon4&pid=1.7&rm=3"
    },
     {
        id:5, 
        name: "TridentZ RGB RAM",
        price: 5900.00, 
        inStock: false,
        image:"https://cdn.mos.cms.futurecdn.net/GFukx5y3yrGrBthhPcnBwL.jpg"
    },
     {
        id:6, 
        name: "AirPods Pro",
        price: 690.00, 
        inStock: true,
        image:"https://thf.bing.com/th/id/OIP.ewSDH5rjsVX6bM_lanGXogHaE8?w=300&h=200&c=7&r=0&o=7&cb=thfc1falcon4&pid=1.7&rm=3"
    },
     {
        id:7, 
        name: "Xbox Controler",
        price: 25000, 
        inStock: true,
        image:"https://thf.bing.com/th/id/OIP.uxyXJ1dZzmQHjNqgx8NAJwHaDt?w=340&h=180&c=7&r=0&o=7&cb=thfc1falcon4&pid=1.7&rm=3"
    },
     {
        id:8, 
        name: "Nintendo Switch",
        price: 5000.00, 
        inStock: true,
        image:"https://thf.bing.com/th/id/OIP.CSfNHBumWrxVzW6M_5d9FQHaE8?w=271&h=181&c=7&r=0&o=7&cb=thfc1falcon4&pid=1.7&rm=3"
    },
    
    

    ]; 



    function ProductCard({products}){ 

        
        return(
            <>
            <div>
                <div className="item-card">
                    <img src={products.image} alt={products.name} loading="lazy" className="product-image"/>
                    <h3>{products.name}</h3>
                    <p>${products.price.toLocaleString()}</p>
                    <p style={{color : products.inStock ? "green" : "red"}}>{products.inStock ? "In Stock" : "Out Of Stock"}</p>
                    <button style={{cursor: products.inStock ? "pointer" : "not-allowed", backgroundColor: products.inStock ? "rgb(122, 243, 122)" : "rgb(255, 43, 43)" }}className="btn-cart">{products.inStock ? "Add to Cart" : "Not Available"}</button>
                </div>
            </div>
         
                 
            </>
           
            
        )

        
    }

  



    return(
        <>
            <div className="item-area">
                {products.map((item)=>(<ProductCard key={item.id} products={item}/>))}
            </div>
        
        </>
    )



}

export default Shop