import {useState} from 'react';

//이름,생년월일,주소,자기소개

const Member_enroll=()=>{
    const [input,setInput] =useState({
        name:"",
        location:"",
        mylife:""
    });
    
    const onChange2 =(e)=>{
        console.log(e.target.name+" : "+e.target.value)
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    return(
        <>
            <h1>회원가입</h1>
            이름 : <input name="name" onChange={onChange2}/><br/><br/>
            생년월일 : <input name="birth" type="date"/><br/><br/>
            거주지 :
            <select name="location" onChange={onChange2}>
                <option value="">선택</option>
                <option value="seoul">서울특별시</option>
                <option value="incheon">인천광역시</option>
                <option value="busan">부산광역시</option>
            </select><br/><br/>
            <textarea name="mylife"/>
        </>
    )
}

export default Member_enroll;