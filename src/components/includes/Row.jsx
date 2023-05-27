import React from "react";
import styled from "styled-components";

function Row({ title, fetchURL }) {
    return (
        <MainContainer>
            <Title>{title}</Title>
        </MainContainer>
    );
}
const MainContainer = styled.div``;
const Title = styled.h3``;
export default Row;
