import React from "react";
import styled from "styled-components";
function Navbar() {
    return (
        <MainContainer>
            <Logo>NETFLIX</Logo>
            <RightBox>
                <Button>Sign In</Button>
                <Button className="active">Sign Up</Button>
            </RightBox>
        </MainContainer>
    );
}
const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    z-index: 100;
    position: fixed;
    width: 100%;
`;
const Logo = styled.div`
    color: rgb(255, 0, 0, 0.6);
    font-weight: bold;
    font-size: 26px;
    cursor: pointer;
`;
const RightBox = styled.div``;
const Button = styled.button`
    padding: 6px 10px;
    border-radius: 2px;
    color: #fff;
    font-size: 12px;
    &.active {
        background-color: rgb(255, 0, 0, 0.6);
    }
`;
export default Navbar;
