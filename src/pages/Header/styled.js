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
            justify-content: space-between;

            div.logo{
                height: 100%;
                display: inline-flex;
                align-items: center;

                img {
                    height: 72%;
                }
            }

            div.login{

                
            }

        }
    }
`;