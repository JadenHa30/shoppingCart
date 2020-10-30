const initalState = [
    {
        id: 1,
        name: "iphone 8",
        img: "https://images-na.ssl-images-amazon.com/images/I/61yX3VKY7GL._AC_SL1500_.jpg",
        des: "apple product",
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: "iphone 7",
        img: "https://images-na.ssl-images-amazon.com/images/I/61%2BfbdrjtCL._AC_SL1500_.jpg",
        des: "apple product",
        price: 600,
        inventory: 12,
        rating: 3
    },
    {
        id: 3,
        name: "iphone 10",
        img: "https://cdn.shopify.com/s/files/1/0263/5333/6380/products/iphone-x-lcd-repair-service-repair-time2talk-swansea_900x.jpg?v=1593465943",
        des: "apple product",
        price: 700,
        inventory: 14,
        rating : 5
    }
]

const products = (state = initalState, action)=>{
    switch(action.type){ 
        default : return [...state]
    }
}

export default products;