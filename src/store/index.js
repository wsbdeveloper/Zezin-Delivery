import { createStore } from 'redux'


function reducer(){
    return [
        {
            name:"Cerveja Becks",
            id:1,
            price:4.67,
            title:"Cerveja Becks - 269ml",
            urlImage:"https://localhost.cdn.com"
        }
    ]
}


const storeGlobal = createStore(reducer);


export default storeGlobal;