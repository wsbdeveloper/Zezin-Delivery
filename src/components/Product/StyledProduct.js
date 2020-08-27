import Styled from 'styled-components';

export const StyledProduct = Styled.div`
    background-color: #cccccc24;
    display: flex;
    position: relative;

    a{
        position: absolute;
        left: 3em;
        top:10px;
        width:100px;
        text-align:center;
        text-decoration: none;
        color: #000;
        font-size: 11px;
        border: 2px solid #ffcc00;
        padding: 0.3em;
        border-radius: 8px;
    }
    div.grid-product{
        display: grid;
        width: 92%;
        margin: 3em auto;
        background-color: #fff;
        grid-template-columns: 50% 50%;
        border: 1px solid #b1b1b1;
        border-radius: 5px;
        box-shadow: 4px 5px 7px #b7b7b7;

        @media(max-width:700px){
            grid-template-columns:100%;
        }
    
        div.product-image{

            img{
                width: 80%;
            }
        }

        div.description-product{
            font-size:13px;
            
            h3{
                font-size:32px;
                @media(max-width:700px){
                    font-size:25px;
                }
            }

            p.price{
                font-size:19px;
            }

            > div{
                height: 100%;
                padding: 3em 0;
                @media(max-width:700px){
                    text-align:center;
                }


                button{
                    padding:10px;
                    width:200px;
                    border:1px solid #fff;
                    border-radius:5px;
                    cursor:pointer;
                    background-color:rgb(255, 197, 0);
                }
                section{
                    margin: 20px 0;
                    div.insert{
                        width: 50%;
                        display: flex;
                        padding: 0.6em;
                        margin:0 auto;
                        justify-content: space-around;
                        border: 1px solid #ccc;
                        >div{
                            cursor:pointer;
                        }
                    }

                    div.insert-quantity{
                        display: flex;
                        justify-content: space-around;
                        width: 60%;
                        margin: 1em auto;
                        height: 50px;
                        > div{
                            width: 50px;
                            height: 30px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border: 1px solid #ccc;
                            border-radius: 10px;
                            cursor:pointer;
                        }
                    }
                }

                div.sub-total{
                    height: 100px;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: space-evenly;
                }
                div.return-bottles{
                    margin: 3em 0;
                    font-size: 15px;
                    b{
                        margin:0 1em;
                    }
                }
            }
        }
    }
`;