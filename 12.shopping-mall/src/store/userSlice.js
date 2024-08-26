import {createSlice} from '@reduxjs/toolkit'


let user = createSlice({
    name : 'user1',
    initialState : {name :'kim',age:20},
    reducers : {
        
        changeName(state) {
            state.name='park'
        },
        increase(state,num){
            state.age +=num.payload
        }
    } 
})


export let { changeName,increase } = user.actions
export default user;

/*
//객체나 배열 변경
let user = createSlice({
    name : 'user1',
    initialState : {name :'kim',age:20},
    reducers : {
       
        changeName() {
            return  {name :'park',age:20}
        }
        
        changeName(state) {
            state.name='park'
        },
        increase(state){
            state.age +=1;
        }
    } 
}) 
*/
