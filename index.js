function first(name){
  function sayName(){
    console.log(name)
  };
  return sayName;

}

p=first("ani");
p();