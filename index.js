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
// let countShow = document.getElementById('show');
// let cBtn = document.getElementById('btn');

// function countI(){
//   let c = 0;
//   function counter(){
//     c++;
//     console.log(c);
//     countShow.innerText = c;
//   }
//   return counter;
// }
// let p = countI() ;

// cBtn.addEventListener("click",p);

/// currying

function sendEmail (to){
  return function (subject){
    return function (body){
      console.log(`sending email ${to} on the subject of ${subject} body ${body}`)
    };
  };
};

let to1 = sendEmail('piyush');
let to2 =to1("on ");
to2("subject");


/// without promise

function loadScr(src,callback){
  const script = document.createElement('script');
  script.src = src;
  script.onload = ()=> callback(null,script);
  script.onerror = (err) => callback(err);
  document.head.appendChild(script);
}
loadScr('test.js',(err,script) => {
  if(err){
    console.log(err);

  }else{
    console.log('script loaded')
  }
})