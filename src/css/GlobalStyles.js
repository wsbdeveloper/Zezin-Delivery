import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html,body,#root{
        height:100%;
        width:100%;
    }

    *,button,input{
        font-family: 'Alata','Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    :root{
        --color-background: rgb(211 211 211 / 67%);
        --color-header: #1D1D1D;
        --color-title: #333;
    }
`;