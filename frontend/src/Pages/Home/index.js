import React, { useState, useEffect } from "react";
import { MainContainer, Container } from "./styles";
import Typography from "@mui/material/Typography";
import InputText from "../../Components/Input";
import TweetCard from "../../Components/TweetCard";
import Pagination from "../../Components/Pagination";
import TweetsService from "../../Services/TweetsService";
import CircularProgress from '@mui/material/CircularProgress';

export default function Home() {
    const [tweets, setTweets] = useState([]);
    const [hashtag, setHashtag] = useState("BolsonaroReeleito2022");
    const [next_page, setNextPage] = useState("default");
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            if (hashtag === "" || hashtag.includes("#")) {
                return;
            }
            setTweets([]);
            setIsLoading(true);
            setHasError(false);
            const response = await TweetsService.fetchTweets(hashtag, next_page);

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

    console.log("TWEETS", tweets);

    return (
        <MainContainer>
            <div className="container-wrapper">
                <Container>
                    <InputText
                        hashtag={hashtag}
                        setHashtag={setHashtag}
                        fetchData={fetchData}
                    />
                </Container>
                <Container middle>
                    <div>
                        {
                            isLoading === false &&
                            hasError === false &&
                            tweets &&
                            tweets.length == 0 && (
                                <div className="handler-div">
                                    <Typography style={{ color: "#14171A" }}>Nenhum tweet encontrado</Typography>
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
                            tweets.map((tweet) => (
                                <TweetCard key={tweet.id}
                                    text={tweet.text}
                                    img_url={tweet.user.profile_image_url}
                                    username={tweet.user.username}
                                    datetime={tweet.created_at}
                                />
                            ))}

                    </div>
                </Container>
                <Container bottom>
                    <Pagination />
                </Container>
            </div>
        </MainContainer>
    )
}