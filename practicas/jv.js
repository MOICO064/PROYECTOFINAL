//variables
/*let a=true;
var edad=4;
var peso=150.8;
var falso=false;
var vev=[2,2,2,3];
var matris=[[3,15,6,1],[15,154,6,1,3]];

document.write(edad);*/

//var nombre='moises';
//var apellido='pozo';
//document.write(nombre+ ' '+apellido);
//document.write(nombre);
function multiplo3(i){
   
    if(i%3==0)
    {
        document.writeln(i+" Fizz"+"<br>");
    }
    
}
function multiplo5(i){
   
    if(i%5==0)
    {
        document.writeln(i+" Buzz"+"<br>");
    }
    return 0;
}
function multiplo3y5(i){
   
    if(i%3==0&& i%5==0)
    {
        document.writeln(i+" FizzBuzz"+"<br>");
    }
    return 0;
}
function nomul(i){
    if(i%3!=0&& i%5!=0){
     document.write(i+"<br>");
    }
return 0;
}
for(var i=1;i<=100;i++){
    multiplo3(i);
    multiplo5(i);
    multiplo3y5(i);
    nomul(i);
}