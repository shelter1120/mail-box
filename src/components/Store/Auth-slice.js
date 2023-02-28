 import { createSlice } from "@reduxjs/toolkit";
 
 const initialAuthState = {
    token : null,
    isLoggedIn : false
 }
  export const authSlice = createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers : {
        login(state,action){
            state.token = action.payload;
            state.isLoggedIn = true;
        },
        logout(state, action){
            state.isLoggedIn = "false";
            state.token = null;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;