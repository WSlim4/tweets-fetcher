import { configureStore } from '@reduxjs/toolkit'
import tweetReducer from "./Tweets/tweetSlice";

export default configureStore({
    reducer: {
        tweet: tweetReducer
    },
})