import React from "react";
import requests from "../../Requests";
// components
import Main from "./Main";
import Row from "../includes/Row";

function Home() {
    return (
        <>
            <Main />
            <Row
                rowId="1"
                title="UpComing"
                fetchURL={requests.requestUpcoming}
            />
            <Row rowId="2" title="Popular" fetchURL={requests.requestPopular} />
            <Row
                rowId="3"
                title="Trending"
                fetchURL={requests.requestTrending}
            />
            <Row
                rowId="4"
                title="Top Rated"
                fetchURL={requests.requestTopRated}
            />
            <Row rowId="5" title="Horror" fetchURL={requests.requestHorror} />
        </>
    );
}

export default Home;
