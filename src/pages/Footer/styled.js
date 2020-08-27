import Styled from 'styled-components';

export const StyledFooter = Styled.div`
    background-color:var(--color-footer);
    color:var(--color-font-footer);
    padding:0 1.2em;


    div.grid-footer{
        ul{
            list-style:none;
        }
        div.informations-footer{
            display:grid;
            justify-content: center;
            padding: 4em 0 0 0;
            grid-template-rows: repeat(4,auto);
            grid-template-columns: repeat(4,auto);
            gap:1.8em;
            column-gap: 2rem;
            line-height: 3;

            @media(max-width:600px){
                display: flex;
                padding: 4em 0 0 0;
                gap: 1.8em;
                flex-direction: column;
                line-height: 3;
                align-items: center;
                text-align: center;
            }

            a{
                color:#fff;
            }

            div.social-midias{
                div.logo{
                    img{
                        width:120px;
                    }
                }

                div.sociais{
                    ul{
                        display:flex;
                        li{
                            img{
                                width:30px;
                            }
                        }
                    }
                }
            }

            div.about-us{

            }

            div.partners{

            }

            div.app-mobile{
                ul{
                    li{
                        a{
                            img{
                                width:100px;
                                margin-top:1em;
                            }
                        }
                    }
                }
            }
        }

        div.terms-of-use{
            display:inline-flex;
            justify-content:space-between;
            width:100%;
            height:300px;
            padding:3em;
            @media(max-width:600px){
                font-size:15px;
                display: flex;
                flex-direction: column;
            }
            a{
                color:#fff;
            }

            div.terms,
            div.direitos,
            div.concientizacao{
                font-size: 14px;
                display:inline-flex;
                align-items: baseline;
                flex-direction: column;
                justify-content: center;
                line-height: 3;
                @media(max-width:650px){
                    font-size:10px;
                    
                }
            }
        }
    }
`;