function count(){
    var a = document.getElementById(`op1`).value;
    var a = Number(a)
    var b = document.getElementById(`op2`).value;
    var b = Number(b)
    var op = document.getElementById(`op`).value;
     var result = document.getElementById(`out`);
    if(op === '+'){
        result = a + b;
        document.getElementById(`out`).innerHTML = result;
    }
    else if  (op === '-'){
        result = a - b;
        document.getElementById(`out`).innerHTML = result;
    }
    else if  (op === '/'){
        result = a / b;
        document.getElementById(`out`).innerHTML = result;
    }
    else if  (op === '*'){
        result = a * b;
        document.getElementById(`out`).innerHTML = result;
    }
    else if  (op === '>='){
        result = a >= b;
        document.getElementById(`out`).innerHTML = result;
    }
    else if  (op === '>'){
        result = a - b;
        document.getElementById(`out`).innerHTML = result;
    }
    else if  (op === '<='){
        result = a - b;
        document.getElementById(`out`).innerHTML = result;
    }
    else if  (op === '<'){
        result = a - b;
        document.getElementById(`out`).innerHTML = result;
    }
    else if  (op === '=='){
        result = a == b;
        document.getElementById(`out`).innerHTML = result;
    }
    else{
        alert("                               Please use correct optionals")
    }

}

