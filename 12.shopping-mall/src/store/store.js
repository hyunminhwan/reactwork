import {configureStore, createSlice} from '@reduxjs/toolkit'
import pList from '../data/ProductList'
import user from './userSlice'
/*
let user = createSlice({
    name : 'user1',
    initialState : 'kim',
    reducers : {
       changeName() {
        return 'jiwon kim'
       }
    } 
})
*/
/*
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

export let { changeName,increase } = user.actions

let stock = createSlice({
    name: 'stock',
    initialState : {kim : 1,lee:2}
})

// let addtoCart = createSlice({
//     name : 'list1',
//     initialState :[],
//     reducers : {
//         addCart(state, item) {
//             let alist=item.payload
//             const findItem = state.find(e=>(e.id===alist.id))
//                 if(findItem){
//                     findItem.count +=1
//                 }else{
//                     state.push({...alist,count:1});
//                 }
//         }
//     } 
// })

let addtoCart=createSlice({
    name:'list3',
    initialState:[],
    reducers :{
        addCart(state,{payload}){
            let alist =payload
            const findItem = state.find(e=>(e.id===alist.id))
            if(findItem){
                alert("이미 장바구니에 들어있습니다")
            }else{
                state.push({...alist,count:1});
            }
        },
        countUp(state,{payload}){
            let alist =payload
            const findItem = state.find(e=>(e.id===alist.id))
            if(findItem){
                if(findItem.count >=0){
                    findItem.count +=1
                }
            }
        },
        countDown(state,{payload}){
            let alist =payload
            const findItem = state.find(e=>(e.id===alist.id))
            if(findItem){
                if(findItem.count>1){
                    findItem.count -=1
                }
                
            }
            
        },
        deleteCart(state,{payload}){
            console.log(state.indexOf(payload.id))
            let alist =payload
            const findItem = state.find(e=>(e.id===alist.id))
            if(findItem){
                state.splice(state.indexOf(findItem),1);
            }
        }  
    }
})
    
export let { addCart,countDown,countUp,deleteCart } = addtoCart.actions

// let list = createSlice({
//     name : 'list',
//     initialState :[
//         {id:0,name:"메롱",count:1},
//         {id:1,name:"안녕",count:1}
//     ],
           
// })


let cart = createSlice({
    name : 'list',
    initialState : pList
})



export default configureStore({
    reducer : {
        // 내보내기에 등록
        member : user.reducer,
        stock : stock.reducer,
        // list : list.reducer,
        cart : cart.reducer,
        addtoCart:addtoCart.reducer
    }
})

