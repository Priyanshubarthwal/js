function BuildHeap(i){
    if(a[i]>a[(Math.floor((i/2)))-1])
	{
	let temp;
	temp=a[(Math.floor(i/2))];
	a[(Math.floor(i/2))]=a[i];
	a[i]=temp;
	if((Math.floor((i/2)))-1>0)
	BuildHeap((Math.floor(i/2)));
	}
}
let MAX=7;
let a=new Array(MAX);
const prompt=require("prompt-sync")({sigint:true});
for(let i=0;i<MAX;i++){
    a[i]=prompt("Enter the number")
    if(i!=0)
    BuildHeap(i);
}

for(let i=0;i<MAX;i++){
    console.log(a[i]);
}
