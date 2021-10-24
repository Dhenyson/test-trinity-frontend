import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    .loading {
        width: 100vw;
        height: calc(100vh - 70px);

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const Header = styled.div`
    height: 50px;

    display: flex;
    justify-content: center;

    @media(max-width: 420px){
        height: 120px;
    }
`