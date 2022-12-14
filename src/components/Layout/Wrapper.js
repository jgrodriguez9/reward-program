import styled from "styled-components";

const Wrapper =styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
    background-color: #ededed;
`;

const DivFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const CenterContent = styled.div`
    width: 70%;
    padding-top: 5rem;
    padding-bottom: 5rem;
    margin: auto;

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

export { Wrapper, DivFlex, CenterContent }