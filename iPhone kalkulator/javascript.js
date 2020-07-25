var to = setTimeout(()=>{
    alert("Pritisnite taster za dugme da biste uključili telefon! Možete ga zaključati bočnim dugmetom kada završite. Uživajte!");
},500);

window.onload = ()=>{
    var btns = document.getElementsByClassName("btn");
    var op = document.getElementById("output");
    var fn = false;
    var sn = false;
    var oper = false;
    var hn = false;
    var closed = true;

    var hb = document.getElementById("homebutton");

var sb = document.getElementById("hitBox");


hb.addEventListener("touchstart",()=>{
clearInterval(to);
document.getElementById("screen").style.opacity = 1;
closed = false;
});

sb.addEventListener("click",()=>{
if(closed){
document.getElementById("screen").style.opacity = 1;
closed = false;
}else{
document.getElementById("screen").style.opacity = 0;
closed = true;
}
});


    for(var i = 0; i<btns.length; i++){
        btns[i].addEventListener("click", processTouch);
    }

    function processTouch(e){
    if((!isNaN(e.target.innerHTML)|| e.target.innerHTML == ".")&&!fn&&!oper&&e.target.innerHTML !== "0"){
      if(e.target.innerHTML == "."){
          op.innerHTML = "0"+e.target.innerHTML;
        fn = op.innerHTML;
      }else{
        op.innerHTML = e.target.innerHTML;
        fn = op.innerHTML;
        }
    }else if((!isNaN(e.target.innerHTML)|| e.target.innerHTML == ".")&&fn&&!oper){
      if(e.target.innerHTML == "."){
      if(op.innerHTML.indexOf(".")==-1){
        op.innerHTML += e.target.innerHTML;
        fn = op.innerHTML;
        }
}else{
        op.innerHTML += e.target.innerHTML;
        fn = op.innerHTML;
        }
    }else if((!isNaN(e.target.innerHTML)|| e.target.innerHTML == ".")&&fn&&oper){

    if(sn !== false){
    if(sn.indexOf(".") == -1 &&             e.target.innerHTML == "."){
    (sn.length == 0)?sn += "0.":sn += ".";
    hn = sn;
     op.innerHTML = sn;
}else{
    if(e.target.innerHTML !== "."){
       sn+= e.target.innerHTML;
       hn = sn;
       op.innerHTML = sn;
       }
    }
    }
    }else if(isNaN(e.target.innerHTML)){
        if((hn == "0" && oper == "/") || op.innerHTML == "Error"){
    (e.target.innerHTML == "C")?op.innerHTML = 0:op.innerHTML = "Error";
    fn = false;
    sn = false;
    oper = false;
    hn = false;
}else{
        switch(e.target.innerHTML){
            case "C":
            op.innerHTML = 0;
            fn = false;
            sn = false;
            oper = false;
            hn = false;
            break;
            case "±":
            op.innerHTML = -1*op.innerHTML;
            ((fn && !sn) || !fn)?fn = op.innerHTML:hn = sn = op.innerHTML;

            break;
            case "%":
            op.innerHTML = op.innerHTML/100;
            ((fn && !sn)|| !fn)?fn = op.innerHTML:hn = sn = op.innerHTML;
            break;
            case "+":
            if(fn && !sn){
                sn="";
                oper = "+";
            }else {
                op.innerHTML = Math.round(10000000*eval(fn+oper+sn))/10000000;
                fn = op.innerHTML;
                sn = "";
                oper = "+";
            }
            break;
            case "-":
            if(fn && !sn){
                sn="";
                oper = "-";
            }else{
                op.innerHTML = Math.round(10000000*eval(fn+oper+sn))/10000000;
                fn = op.innerHTML;
                sn = "";
                oper = "-";
            }
            break;
            case "÷":
            if(fn && !sn){
                sn="";
                oper = "/";
            }else{
                op.innerHTML = Math.round(10000000*eval(fn+oper+sn))/10000000;
                fn = op.innerHTML;
                sn = "";
                oper = "/";
            }
            break;
            case "x":
            if(fn && !sn){
                sn="";
                oper = "*";
            }else{
                op.innerHTML = Math.round(10000000*eval(fn+oper+sn))/10000000;
                fn = op.innerHTML;
                sn = "";
                oper = "*";
            }
            break;
            case "=":
            if(fn && hn && oper){

            op.innerHTML = Math.round(10000000*eval(fn+oper+hn))/10000000;
            fn = op.innerHTML;
            sn = false;
            }
           break;
            default:

            break;
            }
        }

    }
    }
}
