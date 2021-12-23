import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import { TextField, IconButton, InputAdornment } from '@mui/material';

export default function InputText({ hashtag, setHashtag, fetchData }) {
    const onValueChange = (e) => {
        const value = e.target.value;
        setHashtag(value);
    }
    return (
        <TextField
            error={hashtag && hashtag.includes("#")}
            id="outlined-basic"
            placeholder="Hashtag"
            type="search"
            name="search"
            defaultValue={hashtag}
            onChange={onValueChange}
            variant="outlined"
            helperText={hashtag && hashtag.includes("#") ? "Insira apenas o nome da hashtag" : ""}
            InputProps={{
                startAdornment: <InputAdornment position="start">#</InputAdornment>,
                endAdornment: (
                    <InputAdornment>
                        <IconButton onClick={() => fetchData()} >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />

    )
}