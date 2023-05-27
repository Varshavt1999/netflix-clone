import React, { useEffect, useState } from "react";
import requests from "../../Requests";
import axios from "axios";
import styled from "styled-components";

function Main() {
    const [movies, setMovies] = useState([]);
    let randomIndex = Math.floor(Math.random() * movies.length); //Generate a random index within the range of the array length
    const movie = movies[randomIndex];
    console.log(movie);
    useEffect(() => {
        axios
            .get(requests.requestPopular)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    };
    return (
        <MainContainer>
            <InnerContainer>
                <Overlay></Overlay>
                <img
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                />
                <DetailsBox>
                    <div className="wrapper">
                        <Title>{movie?.title}</Title>
                        <Buttons>
                            <Button className="active">Play</Button>
                            <Button>Watch Later</Button>
                        </Buttons>
                        <Date>Released : {movie?.release_date}</Date>
                        <Overview>
                            {truncateString(movie?.overview, 150)}
                        </Overview>
                    </div>
                </DetailsBox>
            </InnerContainer>
        </MainContainer>
    );
}
const MainContainer = styled.div`
    width: 100%;
    height: 550px;
`;
const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    & img {
        height: 100%;
        object-fit: cover;
    }
`;
const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 100%
    );
`;
const DetailsBox = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
`;
const Title = styled.h3`
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 18px;
`;
const Buttons = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 18px;
`;
const Button = styled.button`
    width: 100px;
    border-radius: 2px;
    border: 1px solid rgb(220, 220, 220);
    padding: 10px;
    color: #fff;
    font-weight: 600;
    &.active {
        background-color: rgb(220, 220, 220);
        color: #000;
    }
`;
const Date = styled.p`
    font-size: 14px;
    color: gray;
    font-weight: 600;
    margin-bottom: 8px;
`;
const Overview = styled.p`
    font-size: 14px;
    color: rgb(220, 220, 220);
    line-height: 1.4;
    font-weight: 600;
    width: 35%;
    @media all and (max-width: 1280px) {
        width: 50%;
    }
    @media all and (max-width: 768px) {
        width: 70%;
    }
    @media all and (max-width: 480px) {
        width: 100%;
    }
`;
export default Main;
