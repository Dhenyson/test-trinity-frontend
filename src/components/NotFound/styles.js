import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 70px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img, h1 {
        opacity: 0.5;
        margin-top: -30px;
    }

    > img {
        width: 100%;
        max-width: 240px;
    }
`