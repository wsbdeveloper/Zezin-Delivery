import Styled from 'styled-components';


export const StyledHomeMain = Styled.div`
    div.grid-home-main{
        height: 500px;
        background-size: auto 700px;
        background-image: url("https://courier-images-web.imgix.net/static/img/img-welcome-bg.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png");
        
        background-repeat: no-repeat;
        background-position: bottom left;
        
        
        section{
            height:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            text-align:center;
            flex-direction: column;
            font-weight:900;
            padding:1em;

            h1{
                @media(max-width:600px){
                    font-size:25px;
                    width: 100%;
                }
                font-size: 43px;
                margin: 0 0 30px;
                width: 50%;
                color:#11111b;
                
            }

            h2{
                b{
                    color:#ffcc00;
                }
            }
            div.localization{
                width:60%;

                input{
                    width: 70%;
                    height: 40px;
                    border: 2px solid #b7b9ba;
                    border-radius: 6px;
                    padding: 0 1em;
                    font-size:18px;
                    margin: 3em auto;

                    @media(max-width:600px){
                        width: 100%;
                    }

                    &:focus{
                        border:#b7b9ba;
                    }

                }
            }

        }

        div.products-category{
            padding: 0 2em;
            text-align: center;
            color: var(--color-title);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            h2{
                padding:1.4em;
            }


            div.products{
                overflow:auto;
                div.group-products{
                    display: inline-grid;
                    grid-template-columns: repeat(4,270px);
                    grid-column-gap: 50px;
                    overflow: auto;
                    padding: 2em 0;

                    @media(max-width:900px){
                        grid-template-columns: none;
                    }
                    div.products-list{
                        height:350px;
                        width: 250px;
                        display: grid;
                        margin: 1em;
                        background: #f7f7f794;
                        box-shadow:3px 3px 7px #cccccc47;

                        div.products-box{
                            position:relative;
                            &::before{
                                content:"";
                                width:70%;
                                height:80%;
                                position:absolute;
                                margin-left: auto;
                                margin-right: auto;
                                left: 0;
                                top:20%;
                                right: 0;
                                text-align: center;
                                z-index:-1;
                                border:1px solid #ccc;
                                border-radius:10%;
                                background-color:#ffc107;
                            }
                            img{
                                display:block;
                                width:100%;
                                z-index:99999;
                            }
                        }

                        div.products-name{
                            display:flex;
                            justify-content:center;
                            align-items:center;

                            font-weight:900;
                        }
                    }
                }
            }

            div.grid-categorys{
                width:100%;
                margin:1.5em auto;

                div.categorys{
                    grid-column-gap:150px;
                    grid-row-gap:20px;
                    display:grid;
                    justify-content: center;
                    grid-template-columns:repeat(3,200px);
                    @media(max-width:900px){
                        grid-template-columns: none;
                    }
                    div.list-category{
                        height:60px;
                        width:300px;
                        background:#F5F5F5;
                        border-radius:8px;

                        display: flex;
                        align-items: center;

                        img{
                            width:30px;
                            margin: 0 9px;
                        }
                    }
                }
            }
        }
    }
`;