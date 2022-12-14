import styled from "styled-components";

const Wrapper = styled.div`
    text-align: center;
`;

const Spin = styled.div`
    @keyframes spinner {
        0% {
        transform: translate3d(-50%, -50%, 0) rotate(0deg);
        }
        100% {
        transform: translate3d(-50%, -50%, 0) rotate(360deg);
        }
    }

    animation: 1.5s linear infinite spinner;
    animation-play-state: inherit;
    border: solid 5px #cfd0d1;
    border-bottom-color: #1c87c9;
    border-radius: 50%;
    content: "";
    height: 40px;
    width: 40px;
    display: inline-block;
`;

export {Wrapper, Spin}