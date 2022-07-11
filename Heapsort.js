const maxHeapify = (arr, n, i) => {
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
  
        if (l < n && arr[l] > arr[largest]) {
            largest = l; 
        }
   
        if (r < n && arr[r] > arr[largest]) {
            largest = r; 
        }
   
        if (largest != i) { 
            let temp = arr[i]; 
            arr[i] = arr[largest]; 
            arr[largest] = temp; 
   
            maxHeapify(arr, n, largest); 
        } 
    }

    const heapSort = (arr, n) => { 
        for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
            maxHeapify(arr, n, i); 
        }
  
        for (let i = n - 1; i >= 0; i--) { 
            let temp = arr[0]; 
            arr[0] = arr[i]; 
            arr[i] = temp; 
            maxHeapify(arr, i, 0); 
        } 
    }

    let arr = new Array(3,7,9,5,4,1,0);
    let n = arr.length;
    
    heapSort(arr,n);
