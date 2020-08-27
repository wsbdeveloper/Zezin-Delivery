import React, { useState, useEffect } from 'react';

import Header from '../../pages/Header/Header';

import { Link } from 'react-router-dom';

import Footer from '../../pages/Footer/Footer';

import { StyledList } from './../ProductList/StyledList';

import { useQuery, gql } from '@apollo/client';

// Component será responsável para exibir os produtos de determinada categoria.

export default function ProductsCategory(props) {
    const [productsList,setProductsList] = useState([]);
    console.log(props.match.params.category);
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
    
    const products = useQuery(
        Products,
        { variables: {
            "id": "532",
            "search": "",
            "categoryId": props.location.state.idProduct
          }
        }
    );

    useEffect(() => {
        setProductsList(products.data?.poc?.products);
        console.log(products.data?.poc?.products);
    },[productsList])

    return (
        <>
            <Header />
                <StyledList>
                    <main>
                        <div className="products-list">
                            <div className="header-title-products">
                                <Link to="/produtos">Voltar</Link>
                                <h2>{props.match.params.category}</h2>
                            </div>
                            <div className="products-category-grid-list">
                                {
                                    products?.data?.poc?.products?.length === 0 ? <b>Não há Produtos disponiveis no momento!</b> :
                                    products?.data?.poc?.products.map((data,index) => {
                                        return(
                                            <div key={data?.title} className="list-products">
                                                <img alt="Zé Delivery" src={productsList[index]?.images[0]?.url} className="css-mtwe98-productImage"/>
                                                <hr></hr>
                                                {
                                                    console.log(productsList[index]?.images[0]?.url)
                                                }
                                                <div className="describe-products">
                                                    <h3>{data?.title}</h3>
                                                    <span className="price-product">R$ {data?.productVariants[0]?.price.toLocaleString('pt-BR',{minimumFractionDigits: 2})}</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>   
                    </main>
                </StyledList>
            <Footer />
        </>
    );
}

