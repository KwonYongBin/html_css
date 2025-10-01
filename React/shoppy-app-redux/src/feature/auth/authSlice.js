import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.isLogin = !state.isLogin; //true
            const { userId } = action.payload;
            const loginInfo = {"token" : "1234qweer", "userId" : userId}
            localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
        },

        logout(state, action){
            state.isLogin = !state.isLogin;
            localStorage.removeItem("loginInfo");
        }
    },
})

export const { login, logout  } = authSlice.actions //API function or Component에서 호출 (액션함수)

export default authSlice.reducer // store에서 import
