function make(v){
    parent[v]=v;
    size[v]=1;
}

function find(v){
    if(v==parent[v]){
        return v;
    }
    return parent[v]=find(parent[v]);
}

function Union(a,b){
    a=find(a);
    b=find(b);
    if(a!=b){
        if(size[a]<size[b]){
            [a,b]=[b,a];
        }
        parent[b]=a;
    }
    size[a]+=size[b];
}
let N=1e3+10;
let parent=new Array(N);
let size=new Array(N);

        make(1);
	make(2);
	Union(1,2);
	make(3);
	make(4);
	Union(2,4);
    console.log("Parent of 4 is: "+find(4));
