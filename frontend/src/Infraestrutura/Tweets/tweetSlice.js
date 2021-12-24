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
        decrement: (state, action) => {
            state.value = state.value.filter((item, i) => i !== action.payload);
        }
    },
})

export const { setTweets, decrement } = tweetSlice.actions

export default tweetSlice.reducer