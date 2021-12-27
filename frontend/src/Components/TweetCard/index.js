import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { formatDatetime } from "../../Helpers/Utils";
import { Check, Clear } from '@mui/icons-material';
import { CircularProgress, IconButton } from '@mui/material';
import { Container } from "./styles";
import 'react-toastify/dist/ReactToastify.css';

import TweetService from "../../Services/TweetsService";


export default function TweetCard({ index, setTweets, username, text, img_url, datetime }) {

    const tweets = useSelector((state) => state.tweet.value)

    const [savingTweet, setSavingTweet] = useState(false);

    const handleSave = async () => {
        try {
            setSavingTweet(true);
            await TweetService.saveTweet(tweets[index]);
            setTweets(index, "aprovado")
            setSavingTweet(false);
        } catch (error) {
            setSavingTweet(false);
        }
    }

    return (
        <Container>
            <div className="card-box">
                <div className="img-box">
                    <img src={img_url ? img_url : "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"} />
                </div>
            </div>
            <div className="card-box">
                <h3>@{username} | <small>{formatDatetime(datetime)}</small></h3>
                <div className="text">
                    {text}
                </div>
                <div className="bottom-card-box">
                    <div className="button-group">

                        <IconButton onClick={() => handleSave()}>
                            {savingTweet === true ? <CircularProgress size={23} /> : <Check style={{ color: "green" }} />}

                        </IconButton>
                        <IconButton onClick={() => setTweets(index, "reprovado")}>
                            <Clear style={{ color: "red" }} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </Container>
    )
}