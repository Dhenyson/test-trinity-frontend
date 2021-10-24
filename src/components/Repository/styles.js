import styled from 'styled-components'

export const Container = styled.a`
    background-color: #2E2F45;

    width: 100%;
    min-width: 300px;
    max-width: 400px;
    height: 70px;

    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;

    border-radius: 5px;
    margin: 10px;
    padding: 10px;

    text-decoration: none;

    transition-duration: 0.25s;
    :hover {
        filter: brightness(115%);
    }

    > div {
        display: flex;
        align-items: center;
        margin: 5px 0;
        > p {
            margin-left: 5px;
        }
    }
`