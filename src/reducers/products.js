const initalState = [
    {
        id: 1,
        name: "iphone 8",
        img: "",
        des: "apple product",
        price: 500,
        inventory: 10
    },
    {
        id: 2,
        name: "iphone 7",
        img: "",
        des: "apple product",
        price: 600,
        inventory: 12
    },
    {
        id: 1,
        name: "iphone 10",
        img: "",
        des: "apple product",
        price: 700,
        inventory: 14
    }
]

const product = (state = initalState, action)=>{
    switch(action.type){
        default : return [...state]
    }
}

export default product;