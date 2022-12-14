import { CenterContent, DivFlex, Wrapper } from "./Wrapper"

function Layout(props){

    return (
        <Wrapper>
            <DivFlex>
                <CenterContent>
                    {props.children}
                </CenterContent>
            </DivFlex>            
        </Wrapper>
    )
}

export { Layout }