import Styled from 'styled-components';


export const StyledHeader = Styled.div`
    div.grid-header{
        width: 100%;
        display: block;
        height : 70px;
        background-color: var(--color-header);


        header{
            width: 92%;
            height: 100%;
            margin: 0 auto;
            display:flex;
            align-items:center;
            justify-content: space-between;
            a{
                width:100px;
                height: 100%;
                div.logo{
                    height: 100%;
                    display: inline-flex;
                    align-items: center;

                    img {
                        height: 43%;
                    }
                }
            }
            

            div.find-products{
                position: relative;
                height: 40px;
                width: 30%;
                background-color:#fff;
                display: inline-flex;
                align-items:center;
                border:1px solid transparent;
                border-radius: 5px;
                input{
                    height:100%;
                    border:1px solid transparent;
                    border-radius:10px;
                    width:100%;
                    font-size:14px;
                    padding:0 10px;
                    &:focus{
                        border:0px solid #fff;
                    }
                }

                img{
                    margin:0 8px;
                    width: 25px;
                    height: 25px;
                }
            }

            div.login{
                display:flex;
                align-items:center;
                width:100px;
                button{
                    color:#f3f3f3f3;
                    padding:0.6em;
                    border:1px solid #fc0;
                    border-radius:5px;
                    width:100%;
                    background-color:transparent;
                    cursor:pointer;
                    transition:all 0.8s;
                    &:hover{
                        background-color:#fc0;
                        color:#000;
                        border-radius:15px;
                    }
                }
            }

        }
    }
`;