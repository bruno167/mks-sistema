import styled from 'styled-components';

const StyledFooter = styled.footer`
    background: #eee;
    padding: 10px;
    text-align: center;

    width: 100%;
    justify-content: center;
    align-items: center;   
    position: absolute;
`;
interface FooterProps {

}
export function Footer(props : FooterProps){
    return(
        <footer>
            <StyledFooter>MKS Sistemas &copy; Todos os direitos reservados</StyledFooter>
        </footer>
    )
}