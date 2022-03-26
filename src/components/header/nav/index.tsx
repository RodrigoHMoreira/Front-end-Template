import styled from "styled-components";
import { About } from "./nav-about/nav-about";
import { Components } from "./nav-component/nav-component";
import { Dropdown } from "./nav-dropdown/nav-dropdown";
import { Health } from "./nav-health/nav-health";

const Root = styled.body`
    background-color: #389CD6;
    display: flex;
    justify-content: center; 
`
export function Nav(){
    return(
        <Root>
            <About/>
            <Dropdown/>
            <Health/>
            <Components/>
        </Root>
    );
};