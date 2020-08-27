import React, { useState, useEffect} from 'react';

import Header from './../../pages/Header/Header';

import Footer from './../../pages/Footer/Footer';

import { StyledProduct } from './StyledProduct';

import Soma from './../../images/soma.png';

import Sub from './../../images/sub.png';
import { Link } from 'react-router-dom';


// Component responsável pela apresentação de um único produto pelo id

export default function Product(props) {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(props.location.state.price)



    useEffect(() => {
        if(quantity <= 0) return setQuantity(1);
    },[quantity])


    return (
        <>
            <Header />
                <StyledProduct>
                    <Link to="/produtos">
                        <b>Voltar</b>
                    </Link>
                    <div className="grid-product">
                        <div className="product-image">
                            <img src={props.location.state.imageProduct} alt={props.location.state.title}></img>
                        </div>
                        <div className="description-product">
                            <div>
                                <h3>{props.location.state.title}</h3>
                                <p className="price">{props.location.state.price.toLocaleString('pt-BR',{minimumFractionDigits: 2})}</p>

                                <section>
                                    <div className="insert">
                                        <div onClick={() => setQuantity(quantity - 1)}>
                                            <img src={Sub} alt=""></img>
                                        </div>
                                            <b>{quantity}</b>
                                        <div onClick={() => setQuantity(quantity + 1)}>
                                            <img src={Soma} alt=""></img>
                                        </div>
                                    </div>
                                    <div className="insert-quantity">
                                        <div onClick={() => setQuantity(quantity + 6)}>+6</div>
                                        <div onClick={() => setQuantity(quantity + 10)}>+10</div>
                                        <div onClick={() => setQuantity(quantity + 16)}>+16</div>
                                    </div>
                                </section>

                                <div className="sub-total">
                                    <p>Sub-total : {(price * quantity).toLocaleString('pt-BR',{minimumFractionDigits: 2})} </p>

                                    <button>Adicionar na sacola</button>
                                </div>
                            </div>
                        </div>    
                    </div>
                </StyledProduct>
            <Footer />
        </>
    );
}