import styled from "styled-components";

const Root = styled.body`
    width: 550px;
    height: 307px;
    margin: 80px 0px 0px;


    h1 {
        width: 100%;
        height: 46px;        
        font-size: 39px;
        font: normal normal bold 39px/50px Trebuchet MS;
        text-align: center;
        color: #389CD6;
        letter-spacing: 0.68px;
    }

    .text {
        margin: 40px 0px 0px;
        width: 100%;
        height: 251px;  
        display: flex;
        flex-direction: column;
        justify-content: space-between;        
    }

    p {
        font-size: 20px;
        font: normal normal normal 20px/28px Trebuchet MS;
        text-align: center;
        color: #7B7070;
        letter-spacing: 0.4px;
        line-height: 28px;
    }
`
export function FirstText() {
    return(
        <Root>
            <div className="title">
                <h1>
                    we’re here to help
                </h1>
            </div>
            <div className="text">
                <p className="paragraph-01">                    
                    When it comes to caring for our most intimate areas, we’ve lost our connection.
                </p>
                <p className="paragraph-02">                    
                    Embarrassed, unwilling, or unable to communicate with others, we’re needlessly neglecting the parts of our bodies that need it most.
                </p>
                <p className="paragraph-03">                    
                    We’re here to help. Providing you with the expertise, knowledge and products you need to feel confident in your personal care.
                </p>
            </div>
        </Root>
    );
};