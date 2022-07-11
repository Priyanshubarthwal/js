function InsertionSort(a, n) {
    let i, j, temp;
    for (i = 1; i <= n; i++) {
        temp = a[i];
        for (j = i - 1; j >= 0 && temp < a[j]; j--)
            a[j + 1] = a[j];
        a[j + 1] = temp;
    }
}
a = [9, 2, 5, 16, 7, 1, 6, 109];
console.log("Array is :" + a);
InsertionSort(a, a.length - 1);
console.log("Sorted array is :" + a);
