import styled from 'styled-components';

const StyledHeader = styled.header`
    background: #0F52BA;
    padding: 35px 65px;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
`;

export default function Header() {
    return (
        <StyledHeader>
            <img src='./logo.svg' alt='MKS Sistemas logo' />   
        </StyledHeader>
    );
}