import React, { useState } from 'react'

import { addProduct , deleteProduct, listProduct} from './../../store/reducers/market';

import { useSelector , useDispatch } from 'react-redux';

export default function Index() {
    const [name, setName] = useState("");
    const [id, setId] = useState(0);
    const [price, setPrice] = useState(0);
    const [url, setUrl] = useState("");

    const dispatch = useDispatch();

    const listProducts = useSelector(listProduct);

    return (
        <div>
            {
                listProducts?.bag?.products.map(data => (
                <ul>
                    <li>{data.name}</li>
                    <li>{data.id}</li>
                    <li>{data.price}</li>
                    <li>{data.url}</li>
                </ul>
                ))
            }

            <label htmlFor="name">Name</label>
                <input type="text" onChange={(event) => setName(event.target.value)}/>
                <br/>
                <label htmlFor="name">id</label>
                <input type="text" onChange={(event) => setId(Number(event.target.value))}/>
                <br/> 
                <label htmlFor="name">price</label>
                <input type="text" onChange={(event) => setPrice(Number(event.target.value))}/>
                <br/>
                <label htmlFor="name">url</label>
                <input type="text" onChange={(event) => setUrl(event.target.value)}/>


                <button type="button" onClick={() => dispatch(addProduct(
                    {
                    name :"Camiseta Vermelha",
                    id : 12,
                    price : 34.5,
                    url: "https://localhost:3001" 
                }))}>Incluir</button>

                <button type="button" onClick={() => dispatch(deleteProduct(
                    {
                    id : 12,
                    }
                ))}>Deletar-</button>
        </div>
    )
}
