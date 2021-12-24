import React from "react";

import IconButton from '@mui/material/IconButton';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';

export default function Button({ hashtag, isLoading, hasError, pages, setPages, current_page, next_page, setCurrentPage }) {

    const handlePageForward = () => {
        let _pages = [...pages];

        if (pages.includes(next_page) === false) {
            setPages([..._pages, next_page])
        }

        setCurrentPage(next_page);
    }

    const handlePageBackward = () => {
        let current_page_index = pages.indexOf(current_page);
        let previous_page = pages[current_page_index - 1];
        setCurrentPage(previous_page);
    }

    return (
        <>
            <IconButton onClick={() => handlePageBackward()} disabled={current_page === "default" || hashtag === "" || hasError || isLoading}>
                <ArrowBackIos />
            </IconButton>
            <IconButton
                disabled={
                    next_page === "" ||
                    hashtag === "" ||
                    hasError ||
                    isLoading
                }
                onClick={() => handlePageForward()}>
                <ArrowForwardIos />
            </IconButton>
        </>
    )
}