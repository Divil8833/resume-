let e= document.querySelector(".but1");
let h= document.querySelector(".but2");
let k= document.querySelector(".but3");
let f= "code";
let g= "coder";
let l= "reset";
e.addEventListener("click", ()=>{
    if("code"=== f){
        code();
    }
})

h.addEventListener("click",()=>{
    if("coder"=== g){
        coder();
    }
})
k.addEventListener("click",()=>{
    if(l==="reset"){
        window.location.reload();
    }
})

function code(){
    let a= prompt("Code");
    let b= document.querySelectorAll("p");
    
    console.log(a);
    console.log(a.length);
    
    
    
    for (let i = 0; i<=50000; i++) {
        if (a[i]===" ") {
            b[i].innerText="0200";  
        }
        else if (a[i]==="!") {
            b[i].innerHTML="0201"; 
        }
        else if (a[i]==='"') {
            b[i].innerText="0202";   
        }
        else if (a[i]==="#") {
            b[i].innerText="0203";  
        }
        else if (a[i]==="$") {
            b[i].innerText="0210";  
        }
        else if (a[i]==="%") {
            b[i].innerText="0211"; 
        }
        else if (a[i]==="&") {
            b[i].innerText="0212";   
        }
        else if (a[i]==="'") {
            b[i].innerText="0213";  
        }
        else if (a[i]==="(") {
            b[i].innerText="0220";  
        }
        else if (a[i]===")") {
            b[i].innerHTML="0221"; 
        }
        else if (a[i]==="*") {
            b[i].innerText="0222";   
        }
        else if (a[i]==="+") {
            b[i].innerText="0223";  
        }
        else if (a[i]===",") {
            b[i].innerText="0230";  
        }
        else if (a[i]==="-") {
            b[i].innerText="0231"; 
        }
        else if (a[i]===".") {
            b[i].innerText="0232";   
        }
        else if (a[i]==="/") {
            b[i].innerText="0233";  
        }
        else if (a[i]==="0") {
            b[i].innerText="0300";  
        }
        else if (a[i]==="1") {
            b[i].innerHTML="0301"; 
        }
        else if (a[i]==="2") {
            b[i].innerText="0302";   
        }
        else if (a[i]==="3") {
            b[i].innerText="0303";  
        }
        else if (a[i]==="4") {
            b[i].innerText="0310";  
        }
        else if (a[i]==="5") {
            b[i].innerText="0311"; 
        }
        else if (a[i]==="6") {
            b[i].innerText="0312";   
        }
        else if (a[i]==="7") {
            b[i].innerText="0313";  
        }
        else if (a[i]==="8") {
            b[i].innerText="0320";  
        }
        else if (a[i]==="9") {
            b[i].innerHTML="0321"; 
        }
        else if (a[i]===":") {
            b[i].innerText="0322";   
        }
        else if (a[i]===";") {
            b[i].innerText="0323";  
        }
        else if (a[i]==="<") {
            b[i].innerText="0330";  
        }
        else if (a[i]==="=") {
            b[i].innerText="0331"; 
        }
        else if (a[i]===">") {
            b[i].innerText="0332";   
        }
        else if (a[i]==="?") {
            b[i].innerText="0333";  
        }
        else if (a[i]==="@") {
            b[i].innerText="1000";  
        }
        else if (a[i]==="A") {
            b[i].innerHTML="1001"; 
        }
        else if (a[i]==="B") {
            b[i].innerText="1002";   
        }
        else if (a[i]==="C") {
            b[i].innerText="1003";  
        }
        else if (a[i]==="D") {
            b[i].innerText="1010";  
        }
        else if (a[i]==="E") {
            b[i].innerText="1011"; 
        }
        else if (a[i]==="F") {
            b[i].innerText="1012";   
        }
        else if (a[i]==="G") {
            b[i].innerText="1013";  
        }
        else if (a[i]==="H") {
            b[i].innerText="1020";  
        }
        else if (a[i]==="I") {
            b[i].innerHTML="1021"; 
        }
        else if (a[i]==="J") {
            b[i].innerText="1022";   
        }
        else if (a[i]==="K") {
            b[i].innerText="1023";  
        }
        else if (a[i]==="L") {
            b[i].innerText="1030";  
        }
        else if (a[i]==="M") {
            b[i].innerText="1031"; 
        }
        else if (a[i]==="N") {
            b[i].innerText="1032";   
        }
        else if (a[i]==="O") {
            b[i].innerText="1033";  
        }
        else if (a[i]==="P") {
            b[i].innerText="1100";  
        }
        else if (a[i]==="Q") {
            b[i].innerHTML="1101"; 
        }
        else if (a[i]==="R") {
            b[i].innerText="1102";   
        }
        else if (a[i]==="S") {
            b[i].innerText="1103";  
        }
        else if (a[i]==="T") {
            b[i].innerText="1110";  
        }
        else if (a[i]==="U") {
            b[i].innerText="1111"; 
        }
        else if (a[i]==="V") {
            b[i].innerText="1112";   
        }
        else if (a[i]==="W") {
            b[i].innerText="1113";  
        }
        else if (a[i]==="X") {
            b[i].innerText="1120";  
        }
        else if (a[i]==="Y") {
            b[i].innerHTML="1121"; 
        }
        else if (a[i]==="Z") {
            b[i].innerText="1122";   
        }
        else if (a[i]==="[") {
            b[i].innerText="1123";  
        }
        else if (a[i]==="\ ") {
            b[i].innerText="1130";  
        }
        else if (a[i]==="]") {
            b[i].innerText="1131"; 
        }
        else if (a[i]==="^") {
            b[i].innerText="1132";   
        }
        else if (a[i]==="_") {
            b[i].innerText="1133";  
        }
        else if (a[i]==="`") {
            b[i].innerText="1200";  
        }
        else if (a[i]==="a") {
            b[i].innerHTML="1201"; 
        }
        else if (a[i]==="b") {
            b[i].innerText="1202";   
        }
        else if (a[i]==="c") {
            b[i].innerText="1203";  
        }
        else if (a[i]==="d") {
            b[i].innerText="1210";  
        }
        else if (a[i]==="e") {
            b[i].innerText="1211"; 
        }
        else if (a[i]==="f") {
            b[i].innerText="1212";   
        }
        else if (a[i]==="g") {
            b[i].innerText="1213";  
        }
        else if (a[i]==="h") {
            b[i].innerText="1220";  
        }
        else if (a[i]==="i") {
            b[i].innerHTML="1221"; 
        }
        else if (a[i]==="j") {
            b[i].innerText="1222";   
        }
        else if (a[i]==="k") {
            b[i].innerText="1223";  
        }
        else if (a[i]==="l") {
            b[i].innerText="1230";  
        }
        else if (a[i]==="m") {
            b[i].innerText="1231"; 
        }
        else if (a[i]==="n") {
            b[i].innerText="1232";   
        }
        else if (a[i]==="o") {
            b[i].innerText="1233";  
        }
        else if (a[i]==="p") {
            b[i].innerText="1300";  
        }
        else if (a[i]==="q") {
            b[i].innerHTML="1301"; 
        }
        else if (a[i]==="r") {
            b[i].innerText="1302";   
        }
        else if (a[i]==="s") {
            b[i].innerText="1303";  
        }
        else if (a[i]==="t") {
            b[i].innerText="1310";  
        }
        else if (a[i]==="u") {
            b[i].innerText="1311"; 
        }
        else if (a[i]==="v") {
            b[i].innerText="1312";   
        }
        else if (a[i]==="w") {
            b[i].innerText="1313";  
        }
        else if (a[i]==="x") {
            b[i].innerText="1320";  
        }
        else if (a[i]==="y") {
            b[i].innerHTML="1321"; 
        }
        else if (a[i]==="z") {
            b[i].innerText="1322";   
        }
        else if (a[i]==="{") {
            b[i].innerText="1323";  
        }
        else if (a[i]==="|") {
            b[i].innerText="1330";  
        }
        else if (a[i]==="}") {
            b[i].innerText="1331"; 
        }
        else if (a[i]==="~") {
            b[i].innerText="1332";   
        }
        else if (a[i]==="Del") {
            b[i].innerText="1333";  
        }
        
    }
    
    }
function coder(){
    
let a= prompt("Coder");
// let a= "1031121002320200102012011202122112021311130202001102120112201201123112011232";
// let a="02010202020302100211021202130220022102220223023002310232030003010302030303100311031203130320032103220323033003310332033310001001100210031010101110121013102010211022102310301031103210331100110111021103111011111112111311201121112211231131113211331200120112021203121012111212121312201221122212231230123112321233130013011302130313101311131213131320132113221323133013311332";
let b= document.querySelectorAll("p");

console.log(a);
console.log(a.length);
console.log(a[0]+a[1]+a[2]+a[3]+a[4]);




for (let i = 0; i<=50000; i+=4) {
    if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0200") {
        b[i].innerText="aa";  
        b[i].style.width="7px";
        b[i].style.visibility="hidden";
        
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0201") {
        b[i].innerHTML="!"; 
        b[i].style.width="8px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0202") {
        b[i].innerText='"';
        b[i].style.width="10px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0203") {
        b[i].innerText="#"; 
        b[i].style.width="15px"; 
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0210") {
        b[i].innerText="$";  
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0211") {
        b[i].innerText="%"; 
        b[i].style.width="23px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0212") {
        b[i].innerText="&";   
        b[i].style.width="23px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0213") {
        b[i].innerText="'"; 
        b[i].style.width="9px"; 
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0220") {
        b[i].innerText="(";  
        b[i].style.width="10px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0221") {
        b[i].innerHTML=")"; 
        b[i].style.width="10px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0222") {
        b[i].innerText="*";   
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0223") {
        b[i].innerText="+";  
        b[i].style.width="15px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0230") {
        b[i].innerText=",";  
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0231") {
        b[i].innerText="-"; 
        b[i].style.width="12px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0232") {
        b[i].innerText=".";   
        b[i].style.width="8px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0233") {
        b[i].innerText="/";  
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0300") {
        b[i].innerText="0";  
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0301") {
        b[i].innerHTML="1"; 
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0302") {
        b[i].innerText="2";   
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0303") {
        b[i].innerText="3";  
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0310") {
        b[i].innerText="4";  
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0311") {
        b[i].innerText="5"; 
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0312") {
        b[i].innerText="6";   
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0313") {
        b[i].innerText="7";  
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0320") {
        b[i].innerText="8";  
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0321") {
        b[i].innerHTML="9"; 
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0322") {
        b[i].innerText=":";   
        b[i].style.width="9px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0323") {
        b[i].innerText=";";  
        b[i].style.width="10px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0330") {
        b[i].innerText="<";  
        b[i].style.width="15px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0331") {
        b[i].innerText="="; 
        b[i].style.width="15px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0332") {
        b[i].innerText=">";   
        b[i].style.width="15px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="0333") {
        b[i].innerText="?";  
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1000") {
        b[i].innerText="@";  
        b[i].style.width="24px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1001") {
        b[i].innerHTML="A"; 
        b[i].style.width="19px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1002") {
        b[i].innerText="B";   
        b[i].style.width="17px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1003") {
        b[i].innerText="C";  
        b[i].style.width="17px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1010") {
        b[i].innerText="D";  
        b[i].style.width="17px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1011") {
        b[i].innerText="E"; 
        b[i].style.width="17px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1012") {
        b[i].innerText="F";   
        b[i].style.width="14px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1013") {
        b[i].innerText="G";  
        b[i].style.width="17px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1020") {
        b[i].innerText="H";  
        b[i].style.width="20px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1021") {
        b[i].innerHTML="I"; 
        b[i].style.width="11px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1022") {
        b[i].innerText="J";   
        b[i].style.width="11px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1023") {
        b[i].innerText="K";  
        b[i].style.width="19px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1030") {
        b[i].innerText="L";  
        b[i].style.width="15px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1031") {
        b[i].innerText="M"; 
        b[i].style.width="23px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1032") {
        b[i].innerText="N";   
        b[i].style.width="17px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1033") {
        b[i].innerText="O";  
        b[i].style.width="17px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1100") {
        b[i].innerText="P";  
        b[i].style.width="14px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1101") {
        b[i].innerHTML="Q"; 
        b[i].style.width="17px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1102") {
        b[i].innerText="R";   
        b[i].style.width="17px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1103") {
        b[i].innerText="S";  
        b[i].style.width="14px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1110") {
        b[i].innerText="T";  
        b[i].style.width="17px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1111") {
        b[i].innerText="U"; 
        b[i].style.width="19px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1112") {
        b[i].innerText="V";   
        b[i].style.width="19px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1113") {
        b[i].innerText="W";  
        b[i].style.width="24px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1120") {
        b[i].innerText="X";  
        b[i].style.width="19px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1121") {
        b[i].innerHTML="Y"; 
        b[i].style.width="17px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1122") {
        b[i].innerText="Z";   
        b[i].style.width="17px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1123") {
        b[i].innerText="[";  
        b[i].style.width="11px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1130") {
        b[i].innerText="\ ";  
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1131") {
        b[i].innerText="]"; 
        b[i].style.width="10px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1132") {
        b[i].innerText="^";   
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1133") {
        b[i].innerText="_";  
        b[i].style.width="18px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1200") {
        b[i].innerText="`";  
        b[i].style.width="9px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1201") {
        b[i].innerHTML="a"; 
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1202") {
        b[i].innerText="b";   
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1203") {
        b[i].innerText="c";  
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1210") {
        b[i].innerText="d";  
        b[i].style.width="15px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1211") {
        b[i].innerText="e"; 
        b[i].style.width="12px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1212") {
        b[i].innerText="f";   
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1213") {
        b[i].innerText="g";  
        b[i].style.width="14px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1220") {
        b[i].innerText="h";  
        b[i].style.width="14px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1221") {
        b[i].innerHTML="i"; 
        b[i].style.width="9px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1222") {
        b[i].innerText="j";   
        b[i].style.width="11px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1223") {
        b[i].innerText="k";  
        b[i].style.width="14px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1230") {
        b[i].innerText="l";  
        b[i].style.width="9px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1231") {
        b[i].innerText="m"; 
        b[i].style.width="22px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1232") {
        b[i].innerText="n";   
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1233") {
        b[i].innerText="o";  
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1300") {
        b[i].innerText="p";  
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1301") {
        b[i].innerHTML="q"; 
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1302") {
        b[i].innerText="r";   
        b[i].style.width="10px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1303") {
        b[i].innerText="s";  
        b[i].style.width="11px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1310") {
        b[i].innerText="t";  
        b[i].style.width="8px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1311") {
        b[i].innerText="u"; 
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1312") {
        b[i].innerText="v";   
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1313") {
        b[i].innerText="w";  
        b[i].style.width="19px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1320") {
        b[i].innerText="x";  
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1321") {
        b[i].innerHTML="y"; 
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1322") {
        b[i].innerText="z";   
        b[i].style.width="13px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1323") {
        b[i].innerText="{";  
        b[i].style.width="11px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1330") {
        b[i].innerText="|";  
        b[i].style.width="4px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1331") {
        b[i].innerText="}"; 
        b[i].style.width="11px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1332") {
        b[i].innerText="~";   
        b[i].style.width="16px";
    }
    else if (a[i]+a[i+1]+a[i+2]+a[i+3]==="1333") {
        b[i].innerText="Del";  
        b[i].style.width="13px";
    }
    
}

}