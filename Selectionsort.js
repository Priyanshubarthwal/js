function Selection(arr,n){
        for(let i=0;i<n-1;i++){
            let min1 = i;
            for(let j=i+1;j<n;j++){
                if(arr[min1]>arr[j]){
                    min1 = j;
                }
            }
            let temp = arr[min1];
            arr[min1] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }
    let arr = [5,10,19,1,11,2,8,15,9];
    let n = arr.length;
    console.log("The Selection Sort is ");
    console.log(Selection(arr,n));
