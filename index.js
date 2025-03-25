function sum(n){
    let ans = 0;
    for(let i =1;i<=n;i++){
        ans += i;
    }
    return ans;
}

console.log(sum(10));

const ans1 = sum(10);
console.log(ans1);
const ans2 = sum(100);  
console.log(ans2);
const ans3 = sum(1000);
console.log(ans3);
