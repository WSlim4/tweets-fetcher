import React from "react";
import { toast } from 'react-toastify';
import { formatDatetime } from "../../Helpers/Utils";
import { Check, Clear } from '@mui/icons-material';
import { Container } from "./styles";
import IconButton from "@mui/material/IconButton";
import 'react-toastify/dist/ReactToastify.css';

export default function TweetCard({ index, tweets, setTweets, username, text, img_url, datetime }) {

    const handleTweet = (situation) => {

        setTweets();

        if (situation === "aprovado") {
            toast("Tweet aprovado!")
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
                        <IconButton onClick={() => handleTweet("aprovado")}>
                            <Check style={{ color: "green" }} />
                        </IconButton>
                        <IconButton onClick={() => handleTweet("reprovado")}>
                            <Clear style={{ color: "red" }} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </Container>
    )
}