import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthState{
    authState:boolean;
    user: { [key: string]: any } | null;
        token:string|null;
};
const initialState:AuthState={
    authState:false,
    user:null,
    token:null,
};
export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        userLogin: (state, action: PayloadAction<{  user: { [key: string]: any } ; token: string }>) => {
            state.authState = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        userLogout:(state)=>{
            state.authState=false;
            state.user=null;
            state.token=null;
        }
    }
})
export const {userLogin,userLogout}=authSlice.actions;
export default authSlice.reducer;