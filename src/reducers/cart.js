import * as types from '../constant/ActionType';
// const data = JSON.parse(localStorage.getItem('CART'));
// const initalState = data ? data : [];
const initalState = [
    {
        product: {
            id: 1,
            name: "iphone 8",
            img: "https://images-na.ssl-images-amazon.com/images/I/61yX3VKY7GL._AC_SL1500_.jpg",
            des: "apple product",
            price: 500,
            inventory: 10,
            rating: 4
        },
        quantity: 5
    },
    {
        product: {
            id: 1,
            name: "iphone 10",
            img: "https://cdn.shopify.com/s/files/1/0263/5333/6380/products/iphone-x-lcd-repair-service-repair-time2talk-swansea_900x.jpg?v=1593465943",
            des: "apple product",
            price: 700,
            inventory: 14,
            rating : 5
        },
        quantity: 2
    }
];

const cart = (state = initalState, action)=>{
    switch(action.types){ 
        case types.ADD_TO_CART: 
            console.log(action);
            return [...state];
        default : return [...state]
    }
}

export default cart;