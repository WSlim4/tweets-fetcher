import React from "react";
import { formatDatetime } from "../../Helpers/Utils";
import IconButton from "@mui/material/IconButton";
import { Container } from "./styles";
import { Check, Clear } from '@mui/icons-material';

export default function TweetCard({ username, text, img_url, datetime }) {

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
                        <IconButton>
                            <Check style={{ color: "green" }} />
                        </IconButton>
                        <IconButton>
                            <Clear style={{ color: "red" }} />
                        </IconButton>
                    </div>
                </div>

            </div>
        </Container>
    )
}