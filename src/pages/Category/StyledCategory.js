import Styled from 'styled-components';

export const StyledCategory = Styled.div`
    width: 80%;
    margin: 0 auto;
    text-align:center;
    padding:1.4em;
    
    div.categories{
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
    column-gap: 25px;
    @media(max-width:800px){
        grid-template-columns: auto auto;
    }

    a{
        color: #000;
        text-decoration: none;
    }

    div.list-categories{
        box-sizing:content-box;

        
        div.box-category{
            display: flex;
            align-items: center;
            padding: 10px;
            border: 1px solid;
            border-radius:3px;
            width: 150px;
            background-color:var(--color-background-categories);
            transition: all 1.3s;
            &:hover{
                content:"";
                box-shadow:5px 5px 1px #ffbb00;
                    
                cursor:pointer;
            }
            img{
                width:20px;
                margin: 0 1em 0 0;
            }
        }
    }
}

`;



















