function cleardisplay(){
    let x = document.querySelector('.current');
    x.textContent = '0';
}
function appendnumber(y){
    let x = document.querySelector('.current');
    if(x.textContent === "0"){
        x.textContent = "";
    }
    x.textContent += y;
}

function compute(){
    let x = document.querySelector('.current');
    let p = x.textContent.search(/[+\-*/]/);
    let operator = x.textContent[p];
    let parts = x.textContent.split(operator);
    switch(operator){
        case '+':
            x.textContent = Number(parts[0]) + Number(parts[1]);
            break;
        case '-':
            x.textContent = Number(parts[0]) - Number(parts[1]);
            break;
        case '*':
            x.textContent = Number(parts[0]) * Number(parts[1]);
            break;
        case '/':
            x.textContent = Number(parts[0]) / Number(parts[1]);
            break;
    }
}