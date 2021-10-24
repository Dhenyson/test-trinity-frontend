import styled from 'styled-components'

export const Container = styled.div`
    padding: 10px;
    max-height: 100%;
    width: 100%;
    max-width: 420px;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    position: relative;

    @media(max-width: 420px){
        flex-direction: row;
    }

    .logo {
        font-size: 24px;
        margin: 10px;
        text-align: center;
        text-decoration: none;
    }
`

export const MyInput = styled.input`
    background-color: #2E2F45;

    width: 100%;
    max-width: 240px;
    min-height: 40px;
    padding: 0px 5px;

    border-radius: 10px;
    border-style: none;

    font-size: 14px;
    font-weight: bold;
    text-align: center;
`