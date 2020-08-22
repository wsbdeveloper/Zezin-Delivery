import React from 'react';

import { StyledHomeMain } from './styled';

export default function HomeMain(){
    return (
        <StyledHomeMain>
            <div className="grid-home-main">
                <section>
                    <h1>
                        Zézin Delivery
                    </h1>
                    <h2><b>Bebidas geladas</b> a <b>preço</b> de 
                        mercado na sua casa <b>agora</b></h2>

                    <div className="localization">
                        <input 
                            type="text" 
                            placeholder="Inserir endereço para ver o preço"
                        />
                    </div>
                </section>
                <div className="products-category">
                    <h2>Produtos que você encontra no Zézin</h2>

                    <div className="products">
                        <div className="group-products">
                            <div className="products-list">
                                <div className="products-box">
                                    <img src="https://ze.delivery/static/img/brahma-lata-350ml.png?auto=compress,format&fit=max&w=undefined&h=268&dpr=2&fm=png" alt=""></img>
                                </div>
                                <div className="products-name">
                                    <span>Cerveja Brahma 250ml</span>
                                </div>
                            </div>
                            <div className="products-list">
                                <div className="products-box">
                                    <img src="https://ze.delivery/static/img/budweiser-garrafa-330ml.png?auto=compress,format&fit=max&w=undefined&h=268&dpr=2&fm=png" alt=""></img>
                                </div>
                                <div className="products-name">
                                    <span>Budweiser Garrafa 330ml</span>
                                </div>
                            </div>
                            <div className="products-list">
                                <div className="products-box">
                                    <img src="https://ze.delivery/static/img/skol-lata-269ml.png?auto=compress,format&fit=max&w=undefined&h=268&dpr=2&fm=png" alt=""></img>
                                </div>
                                <div className="products-name">
                                    <span>Skol Lata 269ml</span>
                                </div>
                            </div>
                            <div className="products-list">
                                <div className="products-box">
                                    <img src="https://ze.delivery/static/img/antarctica-garrafa-300ml.png?auto=compress,format&fit=max&w=undefined&h=268&dpr=2&fm=png" alt=""></img>
                                </div>
                                <div className="products-name">
                                    <span>Antarctica Garrafa 300ml</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-categorys">
                        <h2>Categorias</h2>
                        <div className="categorys">
                            <div className="list-category">
                                <img src="https://courier-images-frontrelease.imgix.net/category/beer%403x.png?auto=compress,format&fit=max&w=24&h=24&dpr=2&fm=png" alt="Cerveja" />
                                <strong>Cervejas</strong>
                            </div>
                            <div className="list-category">
                                <img src="https://courier-images-frontrelease.imgix.net/category/distilled%403x.png?auto=compress,format&fit=max&w=24&h=24&dpr=2&fm=png" alt="Destilados" />
                                <strong>Destilados</strong>
                            </div>
                            <div className="list-category">
                                <img src="https://courier-images-frontrelease.imgix.net/category/wine%403x.png?auto=compress,format&fit=max&w=24&h=24&dpr=2&fm=png" alt="Vinhos" />
                                <strong>Vinhos</strong>
                            </div>
                            <div className="list-category">
                                <img src="https://courier-images-frontrelease.imgix.net/category/juice%403x.png?auto=compress,format&fit=max&w=24&h=24&dpr=2&fm=png" alt="Sem álcool" />
                                <strong>Sem álcool</strong>
                            </div>
                            <div className="list-category">
                                <img src="https://courier-images-frontrelease.imgix.net/category/chips%403x.png?auto=compress,format&fit=max&w=24&h=24&dpr=2&fm=png" alt="Petiscos" />
                                <strong>Petiscos</strong>
                            </div>
                            <div className="list-category">
                                <img src="https://courier-images-frontrelease.imgix.net/category/chips%403x.png?auto=compress,format&fit=max&w=24&h=24&dpr=2&fm=png" alt="Outros" />
                                <strong>Outros</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledHomeMain>
    )
}