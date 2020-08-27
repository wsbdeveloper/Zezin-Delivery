import Styled from 'styled-components';

export const StyledProducts = Styled.div`
    width: 92%;
    margin: auto;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    main{
        height: 70%;
        box-sizing: content-box;
        padding: 2em;
        border: 1px solid #ccc;
        border-radius: 11px;
        box-shadow: 5px 8px 11px #ccc;

        div.grid-warning{
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
`;