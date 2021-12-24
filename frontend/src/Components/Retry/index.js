import React from "react";
import { Typography, IconButton } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
import "./styles.css";

export default function Retry({ retryFunc }) {
    return (
        <div id="retry-container">
            <IconButton onClick={() => retryFunc()}>
                <ReplayIcon style={{ color: "#1DA1F2", width: 50 }} />
            </IconButton>
            <Typography>Tentar novamente</Typography>
        </div>
    )
}