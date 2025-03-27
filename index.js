function first(name){
  function sayName(){
    console.log(name)
  };
  return sayName;

}

// p=first("ani");
// p();

function adderFix(num){
  function adding(b){
    console.log(num+b);
  }
  return adding;
}

let addT = adderFix(10);
addT(15) ;
/// counter 
countShow = document.getElementById('show');
cBtn = document.getElementById('btn');

function countI(){
  let c = 0;
  function counter(){
    c++;
    console.log(c);
    countShow.innerText = c;
  }
  return counter;
}
let p = countI() ;

cBtn.addEventListener("click",p);
