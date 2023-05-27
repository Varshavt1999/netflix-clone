import React, { useState } from "react";
import styled from "styled-components";
import { FaHeart, FaRegHeart } from "react-icons/fa";
function Movie({ item }) {
    const [like, setLike] = useState(false);
    return (
        <MovieContainer>
            <img
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
            />
            <Overlay>
                <OverlayTitle>{item?.title}</OverlayTitle>
                <Like>
                    {like ? (
                        <FaHeart className="icon" />
                    ) : (
                        <FaRegHeart className="icon" />
                    )}
                </Like>
            </Overlay>
        </MovieContainer>
    );
}
const MovieContainer = styled.div`
    cursor: pointer;
    min-width: 280px;
    position: relative;
    & img {
        height: 100%;
        object-fit: cover;
    }

    @media all and (max-width: 980px) {
        min-width: 240px;
    }
    @media all and (max-width: 768px) {
        min-width: 200px;
    }
    @media all and (max-width: 480px) {
        min-width: 160px;
    }
`;
const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        opacity: 0.8;
    }
`;
const OverlayTitle = styled.h5`
    color: #fff;
    font-weight: bold;
    font-size: 14px;
`;
const Like = styled.h5`
    position: absolute;
    top: 10px;
    right: 10px;
    & .icon {
        color: gray;
    }
`;

export default Movie;
