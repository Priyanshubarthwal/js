function BinarySearch(item){
    let low=0;
    let up=a.length-1;
    let mid;

    while(low<=up)
	{
		mid=Math.floor((low+up)/2);
		if(item>a[mid])
			low=mid+1;
		else if(item<a[mid])
			up=mid-1;
			else 
			return mid;	
	}
	return -1;
}
let a=new Array();
a=[11,22,33,44,55,66,77,88,99];
let index=BinarySearch(44);

if(index==-1)
    console.log("Element is not in the array");
else
    console.log("Element is found at posision "+(index+1));
