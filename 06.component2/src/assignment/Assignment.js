function Assign(){
    /*


    */

    // 1. 배열 분해 할당
    //  - ES5
    const points = [20,30,40];
    const x1 = points[0];
    const y1 = points[1];
    const z1 = points[2];

    // -ES6
    const [x2,y2,z2] =points;
    console.log(`x2=${x2},y2=${y2},z2=${z2}`);

    //두번쨰 값 무시
    const [x3, ,z3]=points;
    console.log(`x3=${x3},z3=${z3}`);

    //첫번째 값만 넣고 싶으면
    const [x4] =points;
    console.log(`x4=${x4}`);

    //배열보다 더 많은 변수가 있을때
    const [x5, , , ,n5] =points;
    console.log(`x5=${x5},n5=${n5}`);



    //2.객채 분해 할당
    const car = {
        model : 'SM7',
        color : 'black',
        year : 2024
    }

    // - ES5에서 분해 할당
    const model1 = car.model;
    const color1 = car.color;
    const year1 = car.year;

    // - ES6에서 분해 할당
    const {model, year, color} =car;
    console.log(`model = ${model}, year=${year},color=${color}`);

    //키값과 다른 변수에 분해 할당하려면
    const {model:m2,year:ye2,color:c2}=car;
    console.log(`m2 = ${m2}, ye2=${ye2},c2=${c2}`);


    const func1 = function(car){
        console.log(`model : ${car.model},year :${car.year}, color:${car.color}`);

    }

    func1(car);

    const func2 = function({model,year}= car){
        console.log(`model : ${model},year :${year}`)
    }

    func2(car);


}

export default Assign;