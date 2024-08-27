import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// 변경시 1.
// import { increase } from '../store/store';
//userSlice로 분할 한 후 import
import { countUp, countDown,deleteCart } from '../store/store';
import { useState } from 'react';
// let [addtoCart,setaddtoCart]=useState();

function Cart() {
    // let state =useSelector((state)=>{return state})
    // console.log(state);
    // console.log(state.user);

    //let state2 =useSelector((state)=>{return mamber}) //원하는 것만 가져오기

    // let state2 = useSelector(state => state.member)  // 원하는 것만 가져오기
    let state = useSelector(state => state)

    // 변경시 2.  store.js에 요청을 보내는 함수
    let dispatch = useDispatch();

    // let state2 = useSelector(state => state.student)
    // let stock = useSelector(state => state.stock)
    // let list = useSelector(state => state.alist)
    // let cart = useSelector(state => state.cart)


    return (
        <div className='cart'>
            <h2>{state.member.name}{state.member.age}님의 CART LIST</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.addtoCart.map(c =>
                            <tr>
                                <td>{c.id}</td>
                                <td>{c.title}</td>
                                <td>{c.count}</td>
                                <td>
                                    <Button variant="outline-secondary" onClick={() => {
                                        dispatch(countUp(c))
                                    }}>
                                        +
                                    </Button>
                                    <Button variant="outline-secondary" onClick={() => {
                                        dispatch(countDown(c))
                                    }}>
                                        -
                                    </Button>
                                    <Button variant="outline-secondary" onClick={()=>{
                                        dispatch(deleteCart(c))
                                    }}>
                                        삭제하기
                                    </Button>
                                </td>
                            </tr>
                        )
                    }
                    {/* {
                        list.map((list) => {
                            return (
                                <>
                                <List list={list} />
                                
                                </>
                            )


                        })
                    }

                    {
                        cart.map((cart) => {
                            return (
                                <Cart1 cart={cart} />
                            )
                        })
                    } */}
                </tbody>
            </Table>
        </div>
    );
}

// function List(p) {
//     return (
//         <>
//             <tr>
//                 <td>{p.list.id}</td>
//                 <td>{p.list.title}</td>
//                 <td>{p.list.count}</td>
//                 <td>

//                 </td>
//             </tr>
//         </>
//     )
// }
// function Cart1(p) {
//     return (
//         <>
//             <tr>
//                 <td>{p.cart.id}</td>
//                 <td>{p.cart.title}</td>
//                 <td>{p.cart.content}</td>
//                 <td>{p.cart.price}</td>
//             </tr>
//         </>
//     )
// }

export default Cart;

//{id:0,title:"vest",count:2}
//{id:2,title:"vest",count:1}