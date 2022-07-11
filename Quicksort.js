function swap(arr,a, b){
	        let temp;
	        temp = arr[a];
	        arr[a] = arr[b];
	        arr[b] = temp;
        }

        function partition(arr, low, high){
            i = (low - 1)
            piv = arr[high]

            for(let j=low;j<high;j++){
                if(arr[j] <= piv){
                    i = i + 1
                    swap(arr,i,j);
                }
            }
            swap(arr,i+1,high);
            return (i + 1);
        }

        function QuickSort(arr, low, high){
            if(low < high){
                pi = partition(arr, low, high)
                QuickSort(arr, low, pi - 1)
                QuickSort(arr, pi + 1, high)
            }
        }

        function display(arr,n){
            console.log("Sorted Array using QuickSort is: ");
	        for (let i=0;i<n;i++){
                console.log(arr[i]);
	        }
        }

        let arr = [ 12, 1, 17, 5, 8, 7 ];
        let n = arr.length;

        QuickSort(arr, 0, n-1);
        display(arr,n);
