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
                margin: 1em auto;
                width: 50%;

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

            h1{
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

                    @media(max-width:600px){
                        grid-template-columns: none;
                    }
                    div.products-list{
                        height:350px;
                        width: 25
                        0px;
                        margin: 1em;
                        background: red;
                    }
                }
            }
        }
    }
`;