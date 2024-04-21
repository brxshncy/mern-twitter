import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import authService from "../service/authService";

interface AuthState {
    user: null | any; // Adjust this type as needed
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    message: string;
}

export const register = createAsyncThunk(
    "auth/register",
    async (user, thunkApi) => {
        try {
            return await authService.register(user);
        } catch (error) {}
    }
);
const initialState: AuthState = {
    user: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
};
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_USER_LOGIN: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                register.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                    state.user = action.payload;
                }
            )
            .addCase(register.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { SET_USER_LOGIN } = authSlice.actions;

export default authSlice.reducer;
