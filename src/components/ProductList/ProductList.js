import React from 'react';

import { useQuery, gql } from '@apollo/client';

import Header from '../../pages/Header/Header';

import Footer from '../../pages/Footer/Footer';

import Categorys from '../../pages/Category/Category';

import { StyledList } from './StyledList';

import { useHistory } from 'react-router-dom';


// Component responsável pela apresentação dos primeiros produtos retornados da api.

export default function ProductList(){
    const Products = gql`
        query poc($id: ID!, $categoryId: Int, $search: String){
            poc(id: $id) {
            id
            products(categoryId: $categoryId, search: $search) {
                id
                title
                rgb
                images {
                url
                }
                productVariants {
                availableDate
                productVariantId
                price
                inventoryItemId
                shortDescription
                title
                published
                volume
                volumeUnit
                description
                subtitle
                components {
                    id
                    productVariantId
                    productVariant {
                    id
                    title
                    description
                    shortDescription
                    }
                }
                }
            }
            }
        }
    `;
    // Requisição para buscar Vinhos
    const productsVinhos = useQuery(
        Products,
        { variables: {
            "id": "532",
            "search": "",
            "categoryId": 92
          }
        }
    );
    
    // Requisição para buscar Cervejas
    const productsBeer = useQuery(
        Products,
        { variables: {
            "id": "532",
            "search": "",
            "categoryId": 94
          }
        }
    );

    // Requisição para buscar Destilados
    const productsDestilados = useQuery(
        Products,
        { variables: {
            "id": "532",
            "search": "",
            "categoryId": 95
          }
        }
    );
    
    // Requisição para buscar Sem álcool
    const productsSemAlcool = useQuery(
        Products,
        { variables: {
            "id": "532",
            "search": "",
            "categoryId": 96
          }
        }
    );

    // Requisição para buscar Sem álcool
    const productsPetiscos = useQuery(
        Products,
        { variables: {
            "id": "532",
            "search": "",
            "categoryId": 97
          }
        }
    );

    // Requisição para buscar Sem álcool
    const productsOutros = useQuery(
        Products,
        { variables: {
            "id": "532",
            "search": "",
            "categoryId": 98
          }
        }
    );

    return (
        <>
            <Header />
                <StyledList>
                    <main>
                        <Categorys></Categorys>
                        <div className="products">
                            <h2>Cerveja</h2>
                            <div className="grid-list-products">
                                <FirstProducts products={productsBeer.data?.poc?.products}></FirstProducts>
                            </div>
                        </div>

                        <div className="products">
                            <h2>Destilados</h2>
                            <div className="grid-list-products">
                                <FirstProducts products={productsDestilados.data?.poc?.products}></FirstProducts>
                            </div>
                        </div>

                        <div className="products">
                            <h2>Vinhos</h2>
                            <div className="grid-list-products">
                                <FirstProducts products={productsVinhos.data?.poc?.products}></FirstProducts>
                            </div>
                        </div>
                        

                        <div className="products">
                            <h2>Sem Álcool</h2>
                            <div className="grid-list-products">
                                <FirstProducts products={productsSemAlcool.data?.poc?.products}></FirstProducts>
                            </div>
                        </div>

                        <div className="products">
                            <h2>Petiscos</h2>
                            <div className="grid-list-products">
                                <FirstProducts products={productsPetiscos.data?.poc?.products}></FirstProducts>
                            </div>
                        </div>

                        <div className="products">
                            <h2>Outros</h2>
                            <div className="grid-list-products">
                                <FirstProducts products={productsOutros.data?.poc?.products}></FirstProducts>
                            </div>
                        </div>
                    </main>
                </StyledList>
            <Footer />
        </>
    );   
}



function FirstProducts({ products }){
    const firstProducts = [];
    
    const history = useHistory();


    if(products?.length >= 5){
        for(let i = 0;i <= 4;i++){
            firstProducts.push(products[i]);
        }
    }else{
        for(let i = 0;i < products?.length;i++){
            firstProducts.push(products[i]);
        }
    }

    return(
        <>
            {
                
                firstProducts.length === 0 ? <b>Não há Produtos disponiveis no momento!</b> :
                firstProducts.map((data,index) => (
                        <>
                            <div key={index} className="list-products" onClick={ () => history.push("/produto",{
                                title : data?.title,
                                idProduct : data?.id,
                                price : data?.productVariants[0].price,
                                imageProduct : data?.images[0]?.url
                            })}>
                                <img alt="Zé Delivery" src={firstProducts[index]?.images[0]?.url} />
                                <hr></hr>
                                <div className="describe-products">
                                    <h3>{data?.title}</h3>
                                    <span className="price-product">R$ {data?.productVariants[0]?.price.toLocaleString('pt-BR',{minimumFractionDigits: 2})}</span>
                                </div>
                            </div>
                        </>
                    )
                )

            }
        </>
    )
}