import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Movie from "./Movie";
function Row({ title, fetchURL, rowId }) {
    const [movies, setMovies] = useState([]);
    const scrollRef = useRef(null);
    useEffect(() => {
        axios
            .get(fetchURL)
            .then((response) => {
                setMovies(response?.data?.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [fetchURL]);
    // slider using useRef
    const slideLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 500; //scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - 500;
        }
    };
    const slideRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 500; //scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + 500;
        }
    };
    /* slider using id
    const slideLeft = () => {
        var slider = document.getElementById("slider" + rowId);
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById("slider" + rowId);
        slider.scrollLeft = slider.scrollLeft + 500;
    }; */

    return (
        <MainContainer>
            <Title>{title}</Title>
            <MoviesContainer>
                <ArrowBtn className="left" onClick={slideLeft}>
                    <MdChevronLeft className="icon" />
                </ArrowBtn>
                <SliderContainer id={"slider" + rowId} ref={scrollRef}>
                    {movies.map((item, i) => (
                        <Movie item={item} key={i} />
                    ))}
                </SliderContainer>
                <ArrowBtn className="right" onClick={slideRight}>
                    <MdChevronRight className="icon" />
                </ArrowBtn>
            </MoviesContainer>
        </MainContainer>
    );
}
const MainContainer = styled.div`
    padding: 30px 20px;
    &:hover {
        & .left,
        .right {
            opacity: 1;
        }
    }
`;
const Title = styled.h3`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
`;
const MoviesContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
`;
const ArrowBtn = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    cursor: pointer;
    opacity: 0;
    & .icon {
        color: #fff;
        font-size: 55px;
    }
    &.left {
        left: 20px;
    }
    &.right {
        right: 20px;
    }
`;
const SliderContainer = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    overflow-x: scroll;
    scroll-behavior: smooth;
    white-space: nowrap;
    &::-webkit-scrollbar {
        display: none;
    }
`;
export default Row;
