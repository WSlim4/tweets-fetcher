import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import { setTweets, decrement } from "../../Infraestrutura/Tweets/tweetSlice";

import { MainContainer, Container } from "./styles";
import { Typography, CircularProgress } from "@mui/material";
import InputText from "../../Components/Input";
import TweetCard from "../../Components/TweetCard";
import Pagination from "../../Components/Pagination";
import TweetsService from "../../Services/TweetsService";
import Retry from "../../Components/Retry";

export default function Home() {
    const tweets = useSelector((state) => state.tweet.value)
    const dispatch = useDispatch();

    const [hashtag, setHashtag] = useState("");
    const [current_page, setCurrentPage] = useState("default");
    const [next_page, setNextPage] = useState("");
    const [pages, setPages] = useState(["default"]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetchData(current_page);
    }, [current_page]);

    const fetchData = useCallback(async (page) => {
        try {
            if (hashtag === "" || hashtag.includes("#")) {
                return;
            }

            dispatch(setTweets([]))
            setIsLoading(true);
            setHasError(false);

            const response = await TweetsService.fetchTweets(hashtag, page);

            if (response.data.next_token) {
                setNextPage(response.data.next_token)
            } else {
                setNextPage("")
            }

            if (response.data.tweets) {
                dispatch(setTweets(response.data.tweets));
            } else {
                dispatch(setTweets([]));
            }

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setHasError(true);
            console.log("REQUEST_ERROR", error);
        }
    }, [hashtag]);

    return (
        <MainContainer>
            <div className="container-wrapper">
                <Container default>
                    <div className="twitter-logo-box">
                        <a href="https://twitter.com/explore/tabs/trending" target="_blank">
                            <img src="https://t.ctcdn.com.br/uoFbikmqs4uzBJty4J99HwX-InM=/400x400/smart/i489929.jpeg" />
                        </a>
                    </div>

                    <InputText
                        hashtag={hashtag}
                        setHashtag={setHashtag}
                        fetchData={fetchData}
                    />
                </Container>
                <Container middle>
                    <div className="tweets-container">

                        {isLoading === false && hasError === true && (
                            <div className="handle-container">
                                <Retry retryFunc={fetchData} />
                            </div>
                        )}

                        {isLoading === false &&
                            hasError === false &&
                            tweets &&
                            tweets.length == 0 && (
                                <div className="handle-container">
                                    <Typography style={{ color: "#14171A" }}>Nenhum tweet disponível</Typography>
                                </div>
                            )}

                        {isLoading === true && hasError === false && (
                            <div className="handle-container">
                                <CircularProgress />
                            </div>
                        )}

                        {!!(isLoading === false &&
                            hasError === false &&
                            tweets &&
                            tweets.length &&
                            tweets.length > 0) &&
                            tweets.map((tweet, i) => (
                                <TweetCard key={tweet.id}
                                    text={tweet.text}
                                    img_url={tweet.user.profile_image_url}
                                    username={tweet.user.username}
                                    datetime={tweet.created_at}
                                    tweets={tweets}
                                    setTweets={() => dispatch(decrement(i))}
                                    index={i}
                                />
                            ))}
                    </div>
                </Container>
                <Container default>
                    <Pagination
                        isLoading={isLoading}
                        hasError={hasError}
                        setPages={setPages}
                        pages={pages}
                        current_page={current_page}
                        next_page={next_page}
                        setCurrentPage={setCurrentPage}
                    />
                </Container>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                progressStyle={{ color: "lightgreen" }}
                toastStyle={{ backgroundColor: "lightgreen", color: "black" }}
                hideProgressBar={true}
                closeOnClick
                rtl={false}
                pauseOnHover={false}
            />
        </MainContainer>
    )
}