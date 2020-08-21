import React from 'react';

import { StyledHomeMain } from './styled';

export default function HomeMain(){
    return (
        <StyledHomeMain>
            <div className="grid-home-main">
                <section>
                    <h1>
                        <b>Bebidas geladas</b> a <b>preço</b> de 
                        mercado na sua casa <b>agora</b>
                    </h1>

                    <div className="localization">
                        <input 
                            type="text" 
                            placeholder="Inserir endereço para ver o preço"
                        />
                    </div>
                </section>

                <div className="products-category">
                    <h1>Produtos que você encontra no Zézin</h1>

                    <div className="products">
                        <div className="group-products">
                            <div className="products-list"></div>
                            <div className="products-list"></div>
                            <div className="products-list"></div>
                            <div className="products-list"></div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledHomeMain>
    )
}