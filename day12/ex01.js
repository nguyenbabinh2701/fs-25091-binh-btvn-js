function  calcBMI(weight, height){
    const bmi =  weight / (height * height);
    const bmiRounded  = bmi.toFixed(2);
    
    let status = "";

    if (bmi < 18.5){
        status = "thiếu cân";
    }else if(bmi >= 18.5 && bmi < 23){
        status = "bình thường";
    }else if(bmi >= 23  && bmi < 25){
        status = "thừa cân";
    }else{
        status = "béo phì";
    }
    return `bmi = ${bmiRounded},${status}`
}


const b = parseFloat(window.prompt("nhập cân nặng (kg):"))
const a = parseFloat(window.prompt("nhập chiều cao (m):"))

alert(calcBMI(b,a))