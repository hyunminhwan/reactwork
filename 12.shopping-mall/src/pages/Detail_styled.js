import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {styled} from 'styled-components'



function Detail(props) {
    let YellowBtn = styled.button`
    background : yellow;
    color : blue;
    padding : 10px;
`;

let Box = styled.div`
    padding : 20px;
    background : gray;
`;
let BlueBtn = styled.button`
    background : blue;
    padding : 10px;
`;
let Btn = styled.button`
    background : ${props.bg};
    color : blue;
    padding : 10px;
`;
    let {index} = useParams();
    let findId=props.clothes.find(function(x){
        return x.id==index;
    })
    console.log(findId.id);
    return(
    <div>
        <YellowBtn>버튼</YellowBtn>
        <Box>div</Box>
        <BlueBtn>블루버튼</BlueBtn>
        <Btn>props 버튼</Btn>
        <Container>
        <Row>
            <Col lg={6}>
            <img id="a" src={`${process.env.PUBLIC_URL}/img/sm${findId.id+1}.jpg`} />
            </Col>
            <Col lg={6}>
                <h2>{props.clothes[index].title}</h2>
                <p>{props.clothes[index].content}</p>
                <h2>{props.clothes[index].price}</h2>
                <button variant="info"> 주문하기 </button>
            </Col>
        </Row>
        </Container>
    </div>
    )
}

export default Detail;