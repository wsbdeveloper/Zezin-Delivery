import React, { useEffect } from 'react';

import { useQuery, gql } from '@apollo/client';

import Header from '../../pages/Header/Header';

import Footer from '../../pages/Footer/Footer';

import ProductList from './../ProductList/ProductList';

import { StyledProducts } from './StyledProducts';


export default function Products(){
    const find = gql`
        query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
            pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
            __typename
            id
            status
            tradingName
            officialName
            deliveryTypes {
                __typename
                pocDeliveryTypeId
                deliveryTypeId
                price
                title
                subtitle
                active
            }
            paymentMethods {
                __typename
                pocPaymentMethodId
                paymentMethodId
                active
                title
                subtitle
            }
            pocWorkDay {
                __typename
                weekDay
                active
                workingInterval {
                __typename
                openingTime
                closingTime
                }
            }
            address {
                __typename
                address1
                address2
                number
                city
                province
                zip
                coordinates
            }
            phone {
                __typename
                phoneNumber
            }
            }
        }
    `;

    // Query poc
    const { loading, error, data } = useQuery(
        find,
        { variables: {
            "algorithm": "NEAREST",
            "lat": "-23.632919",
            "long": "-46.699453",
            "now": "2017-08-01T20:00:00.000Z"
            }
        }
    );

    return (
        <>
            {   
                loading === true ? <h1>Loading ...</h1> :
                data?.pocSearch[0].status !== "AVAILABLE" ? 
                <>
                    <Header />
                        <StyledProducts>
                            <main>
                                <div className="grid-warning">
                                    <h2>Não temos estabelecimentos abertos no momento</h2>
                                    <p>Horário de funcionamento 09:00hrs às 02:00hrs</p>
                                </div>
                            </main>
                        </StyledProducts>
                    <Footer />
                </>
                : <ProductList />
            }
        </>
    );   
}