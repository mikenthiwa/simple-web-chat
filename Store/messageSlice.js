import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messageState: {
    user: '',
    text: [],
    date: ''
  },
}

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessageState(state, action) {
      state.messageState = {...state.messageState, text: [...state.messageState.text, action.payload]};
    },
  }
})

export const { setMessageState } = messageSlice.actions;
export const selectMessageState = (state) => state.message.messageState;
export default messageSlice.reducer;
