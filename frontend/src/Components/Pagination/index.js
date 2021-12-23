import React from "react";

import IconButton from '@mui/material/IconButton';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';

export default function Button() {
    return (
        <>
            <IconButton>
                <ArrowBackIos />
            </IconButton>
            <IconButton>
                <ArrowForwardIos />
            </IconButton>
        </>
    )
}