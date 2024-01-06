import { SearchData } from '@/app/types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const searchFetch = createAsyncThunk('search', async (value, { rejectWithValue }) => {
    console.log('search')
    try {
        const response = await fetch("https://api.pexels.com/v1/search?query=Ocean", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'AqsBxrwPelYXH5ChI7Zggn27HstDO25dagXygojc5Ho7Ve2jTaWlxXc0'
            }
        })
        if (response.status === 200) {
            return response.json()
        }
        throw new Error('Something went wrong')
    } catch (error) {
        return rejectWithValue(error.message)
        
        
    }
})

const initialState: SearchData = {
    data: [],
    isloading: false,
    iserror: false,
    issuccess: false,
    message: null,
    value: null
}

export const SearchSlice = createSlice({
    name: 'search',
    initialState,
    extraReducers: (buildCreateApi) => {
        buildCreateApi.addCase(searchFetch.pending, (state, action: PayloadAction<object>) => {
            state.isloading = true
        }),
            buildCreateApi.addCase(searchFetch.fulfilled, (state, action: PayloadAction<object>) => {
                console.log(action);
                state.isloading = false,
                    state.data = action.payload,
                    state.issuccess = true,
                    state.message = 'Successfully searched'
            }),
            buildCreateApi.addCase(searchFetch.rejected, (state, action: PayloadAction<object>) => {
                state.isloading = false,
                    state.iserror = true
                state.issuccess = false,
                    state.message = action.payload
            })
    }
})

export { searchFetch }
export default SearchSlice.reducer