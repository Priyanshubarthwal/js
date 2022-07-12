function MaximumSumSubarray(){
    let MaxSum=0;
    let CrSum=0;
    for(let i=0;i<ar.length;i++){
        CrSum=CrSum+ar[i];
        if(CrSum>MaxSum)
            MaxSum=CrSum;
        if(CrSum<0)
            CrSum=0;    
    }
    return MaxSum;
}

let MAX=100;
let ar=new Array(MAX);
ar=[-1,4,-2,5,6,-10,12,2,0];
console.log("Array is:"+ar);

console.log("Maximum Sum is:"+MaximumSumSubarray());
