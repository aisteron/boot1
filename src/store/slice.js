import { createSlice } from '@reduxjs/toolkit'

export const defaultSlice = createSlice({
  name: 'default',
  initialState: {
		chars: [],
    info: {},
		popup_is_open: false,
		popup_content: null
  },
  reducers: {
    show_popup: (state,action) => {
      state.popup_is_open = action.payload.show
      state.popup_content = action.payload.item
			
    },
		add_chars:(state,action)=>{
			state.chars = action.payload.results
			state.info = action.payload.info
		}
  },
})

export const { show_popup, add_chars } = defaultSlice.actions
export default defaultSlice.reducer