import React from "react";
import { formatDatetime } from "../../Helpers/Utils";
import IconButton from "@mui/material/IconButton";
import { Container } from "./styles";
import { Check, Clear } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TweetCard({ index, tweets, setTweets, username, text, img_url, datetime }) {

    const handleTweet = (situation) => {
        let _tweets = [...tweets];
        _tweets.splice(index, 1);
        setTweets(_tweets);

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
                <p className="text">
                    {text}
                </p>
                <div className="bottom-card-box">
                    <div className="button-group">
                        <IconButton onClick={() => handleTweet("aprovado")}>
                            <Check style={{ color: "green" }} />
                        </IconButton>
                        <IconButton onClick={() => handleTweet("reprovado")}>
                            <Clear style={{ color: "red" }} />
                        </IconButton>
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
                </div>

            </div>
        </Container>
    )
}