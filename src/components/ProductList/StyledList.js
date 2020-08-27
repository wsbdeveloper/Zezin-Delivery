import Styled from 'styled-components';

export const StyledList = Styled.div`
    main{
            background-color:#e5e5e5a6;
            padding:1em 0;
        
            div.products-list{
                height:auto;
                width:92%;
                margin: 0 auto;
                text-align:center;

                div.header-title-products{
                    height: 80px;
                    background-color: #FFF;
                    border: 1px solid #fff;
                    border-radius: 10px;
                    align-items: center;
                    justify-content: center;
                    display: flex;
                    position:relative;

                    a{
                        position: absolute;
                        left: 3em;
                        text-decoration: none;
                        color: #000;
                        font-size: 11px;
                        border: 2px solid #ffcc00;
                        padding: 0.3em;
                        border-radius: 8px;
                    }
                    img{
                        width: 75px;
                    }
                }
                div.products-category-grid-list{
                    display:grid;
                    box-sizing:content-box;
                    margin: 50px 0;
                    background-color:#FFF;
                    border:1px solid #fff;
                    border-radius:10px;
                    grid-template-columns: auto auto auto auto;
                    row-gap: 15px;
                    padding: 3em;
                    column-gap: 50px;

                    @media(max-width:700px){
                        grid-template-columns: 200px 200px;
                        justify-content: center;
                    }
                    div.list-products{
                        width: 100%;
                        height: 200px;
                        display: flex;
                        flex-direction: column;
                        box-sizing: content-box;
                        box-shadow: 2px 1px 6px #ccc;


                        div.describe-products{
                            padding: 5px 1em;
                            border-radius: 4px;
                            cursor: pointer;
                            display: flex;
                            height: 100%;
                            justify-content: space-between;
                            align-items: center;
                            flex-direction: column;
                            font-size: 13px;
                        }

                        img{
                            width: 75px;
                            padding: 1em 0;
                            margin: 0 auto;
                        }
                    }
                }
            }

            div.products{
                overflow:auto;
                background-color: #fff;
                width: 92%;
                height:400px;
                margin: 1em auto;
                display: flex;
                padding: 0 2em;
                position: relative;
                justify-content: center;
                flex-direction: column;
            

                /**
                
                    style para produtos exibidos na home
                 */
                div.grid-list-products{
                    height: 90%;
                    margin-top:10px;
                    height: 165px;
                    align-items: center;
                    display: grid;
                    grid-template-columns: auto auto auto auto auto;
                    justify-content: center;
                    column-gap: 40px;
                    row-gap: 26px;
                }
                h2{
                    font-size:15px;
                    margin-top:5px;
                    color:#9d9b9b;
                }
                div.list-products{
                width: 190px;
                border: 1px solid #ededed;
                box-sizing: content-box;
                box-shadow: 2px 3px 6px #CCD;
                border-radius: 4px;
                cursor: pointer;
                display: flex;
                height: 100%;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                font-size: 13px;


                div.describe-products{
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    justify-content: space-between;
                    padding: 5px 5px;
                    width: 100%;
                    border-top: 1px solid #ccc;
                }
                img{
                    width: 75px;
                    padding: 1em 0;
                    margin: 0 auto;
                }

                h3{
                    font-size:10px;
                    color:#9d9999;
                }
            } 
        }
    }
`;