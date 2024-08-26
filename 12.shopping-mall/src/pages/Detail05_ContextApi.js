import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import './../App.css';
import {Context1} from'./../App';



function Detail(props) {
    //useContext() : cContext1을 해체 {stock,clothes}
    // let a=useContext(Context1);
    // console.log(a);
    // console.log(a.stock);

    let {stock,clothes} =useContext(Context1);
    console.log(stock);
    console.log(clothes);

    let [tab,setTab] =useState(0);
    let { index } = useParams();
    let findId = props.clothes.find(function (x) {
        return x.id == index;
    })

    let [alert, setAlert] = useState(true);
    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false) }, 2000)
        return () => {
            clearTimeout(timer);
        }
    }, [alert])

    let [num, setNum] = useState('');
    useEffect(() => {
        if (isNaN(num) == true) {
            alert('그러지마요');
        }
    }, [num])

    let [fade2,setFade2]=useState('');
    useEffect(()=>{
        setTimeout(()=>{setFade2('end')},100)
        return()=>{
            setFade2('start');
        }
    },[])

    return (

        <div>            
            <Container className={fade2}>
                <Row>
                    <Col lg={6}>
                        <img id="a" src={`${process.env.PUBLIC_URL}/img/sm${findId.id + 1}.jpg`}  />
                    </Col>
                    <Col lg={6}>
                        <h2>{findId.title}</h2>
                        <p>{findId.content}</p>
                        <h2>{findId.price}</h2>
                        <button variant="info"> 주문하기 </button>
                    </Col>
                </Row>
            </Container>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">BUTTON 0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">BUTTON 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">BUTTON 2</Nav.Link>
                </Nav.Item>
            </Nav>

            { [<div> {stock} </div>, <div>{stock[1]} </div>, <div> {stock[tab]} </div> ][tab] }


            <TabContent tab={tab}/>
        </div>
    )
}

function TabContent({tab}){
    
    let [fade,setFade] = useState('');
    let {stock}=useContext(Context1);
    useEffect(()=>{
        setTimeout(()=>{setFade('end')},100)
        return()=>{
            setFade('start')
        }
    },[tab])

    return (

        <div className={fade}>
            {[<div>내용 0</div>,<div>내용 1</div>,<div>내용 2</div>][tab]}
        </div>
        
    )
}

    


export default Detail;