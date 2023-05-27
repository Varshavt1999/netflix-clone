import React from "react";
import requests from "../../Requests";
// components
import Main from "./Main";
import Row from "../includes/Row";

function Home() {
    return (
        <>
            <Main />
            <Row title="UpComing" fetchURL={requests.requestUpcoming} />
            <Row title="Popular" fetchURL={requests.requestPopular} />
            <Row title="Trending" fetchURL={requests.requestTrending} />
            <Row title="Top Rated" fetchURL={requests.requestTopRated} />
            <Row title="Horror" fetchURL={requests.requestHorror} />
        </>
    );
}

export default Home;
