import { createSlice } from '@reduxjs/toolkit'

export const tweetSlice = createSlice({
    name: 'tweet',
    initialState: {
        value: [],
    },
    reducers: {
        setTweets: (state, action) => {
            state.value = action.payload;
        },
        approveTweet: (state, action) => {
            state.value = state.value.filter((item, i) => i !== action.payload);
        }
    },
})

export const { setTweets, approveTweet } = tweetSlice.actions

export default tweetSlice.reducer