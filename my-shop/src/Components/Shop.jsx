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
        name: "Bluetooth Speakers",
        price: 520.00, 
        inStock: true,
        image:"https://thfvnext.bing.com/th/id/OIP.NkJG0qH5uME5sZ2JIsBtQAHaHa?w=182&h=182&c=7&r=0&o=7&cb=thfvnextfalcon4&pid=1.7&rm=3"
    }, 
    {
        id:3, 
        name: "Bluetooth Speakers",
        price: 520.00, 
        inStock: true,
        image:"https://thfvnext.bing.com/th/id/OIP.NkJG0qH5uME5sZ2JIsBtQAHaHa?w=182&h=182&c=7&r=0&o=7&cb=thfvnextfalcon4&pid=1.7&rm=3"
    }, 
    {
        id:3, 
        name: "Bluetooth Speakers",
        price: 520.00, 
        inStock: true,
        image:"https://thfvnext.bing.com/th/id/OIP.NkJG0qH5uME5sZ2JIsBtQAHaHa?w=182&h=182&c=7&r=0&o=7&cb=thfvnextfalcon4&pid=1.7&rm=3"
    }
, 
    {
        id:3, 
        name: "Bluetooth Speakers",
        price: 520.00, 
        inStock: true,
        image:"https://thfvnext.bing.com/th/id/OIP.NkJG0qH5uME5sZ2JIsBtQAHaHa?w=182&h=182&c=7&r=0&o=7&cb=thfvnextfalcon4&pid=1.7&rm=3"
    }
, 
    {
        id:3, 
        name: "Bluetooth Speakers",
        price: 520.00, 
        inStock: true,
        image:"https://thfvnext.bing.com/th/id/OIP.NkJG0qH5uME5sZ2JIsBtQAHaHa?w=182&h=182&c=7&r=0&o=7&cb=thfvnextfalcon4&pid=1.7&rm=3"
    }
, 
    {
        id:3, 
        name: "Bluetooth Speakers",
        price: 520.00, 
        inStock: true,
        image:"https://thfvnext.bing.com/th/id/OIP.NkJG0qH5uME5sZ2JIsBtQAHaHa?w=182&h=182&c=7&r=0&o=7&cb=thfvnextfalcon4&pid=1.7&rm=3"
    }


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
                    <button style={{cursor: products.inStock ? "pointer" : "not-allowed"}} type="submit">{products.inStock ? "Add to Cart" : "Not Available"}</button>
                </div>
            </div>
         
                 
            </>
           
            
        )

        
    }

    function CartSys({products}){ 

        return(
            <>
             <div></div>
            </>
           
        )
    }







    return(
        <>
            <div className="item-area">
                {products.map((item)=>(<ProductCard key={item.id} products={item} />))}
            </div>
        
        </>
    )



}

export default Shop