import React, { useState, useEffect } from "react";
import { MainContainer, Container } from "./styles";
import Typography from "@mui/material/Typography";
import InputText from "../../Components/Input";
import TweetCard from "../../Components/TweetCard";
import Pagination from "../../Components/Pagination";
import TweetsService from "../../Services/TweetsService";
import CircularProgress from '@mui/material/CircularProgress';
import Retry from "../../Components/Retry";

export default function Home() {
    const [tweets, setTweets] = useState([]);
    const [hashtag, setHashtag] = useState("");
    const [current_page, setCurrentPage] = useState("default");
    const [next_page, setNextPage] = useState("");
    const [pages, setPages] = useState(["default"]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetchData(current_page);
    }, [current_page]);

    const fetchData = async (page) => {
        try {
            if (hashtag === "" || hashtag.includes("#")) {
                return;
            }

            setTweets([]);
            setIsLoading(true);
            setHasError(false);

            const response = await TweetsService.fetchTweets(hashtag, page);

            if (response.data.next_token) {
                setNextPage(response.data.next_token)
            } else {
                setNextPage("none")
            }

            if (response.data.tweets) {
                setTweets(response.data.tweets);
            } else {
                setTweets([]);
            }

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setHasError(true);
            console.log("REQUEST_ERROR", error);
        }
    }

    return (
        <MainContainer>
            <div className="container-wrapper">
                <Container bottom>
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
                    <div>
                        {isLoading === false && hasError === true && (
                            <div className="handler-div">
                                <Retry retryFunc={fetchData} />
                            </div>
                        )}

                        {
                            isLoading === false &&
                            hasError === false &&
                            tweets &&
                            tweets.length == 0 && (
                                <div className="handler-div">
                                    <Typography style={{ color: "#14171A" }}>Nenhum tweet disponível</Typography>
                                </div>
                            )}

                        {isLoading === true && hasError === false && (
                            <div className="handler-div">
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
                                    setTweets={setTweets}
                                    index={i}
                                />
                            ))}

                    </div>
                </Container>
                <Container bottom>
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
        </MainContainer>
    )
}