import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    @media(max-width: 580px){
        flex-wrap: wrap;
    }

    > section {
        background-color: #2E2F45;

        width: 100%;
        max-width: 300px;
        min-width: 240px;
        max-height: 240px;
        @media(max-width: 580px){
            max-width: 400px;
        }

        padding: 15px;
        margin: 10px;
        border-radius: 5px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > img {
            max-width: 100px;
            border-radius: 50%;
        }
    }

    .infos > div  {
        margin: 5px;
        
        display: flex;
        align-items: center;
     
        > p {
            margin-left: 5px;
        }
    }
`

export const RepositoriesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`