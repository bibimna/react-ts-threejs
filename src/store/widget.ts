import { createSlice } from "@reduxjs/toolkit";

const widgetSlice = createSlice({
  name: 'widget',
  initialState: {
    options: []
  },
  reducers: {
    setOptions(state, action) {
      state.options = action.payload
    }
  }
})

export default widgetSlice;