let MAX=10;
let Queue=new Array(MAX);
let rear=-1;
let front=-1;

function isEmpty(){
    if(front==-1||front==rear+1){
        return true;
    }
    else return false;
}

function isFull(){
    if(rear==MAX-1){
        return true;
    }
    else return false;
}

function Push(item){
    if(isFull()){
        console.log("Overflow");
        return;
    }
    if(front==-1){
        front=0;
    }
    rear=rear+1;
    Queue[rear]=item;
}

function Pop(){
    if(isEmpty()){
        console.log("Underflow");
        return;
    }
    let item=Queue[front];
    front=front+1;
    return item;
}

function ViewQueue(){
    if(isEmpty()){
        console.log("Underflow");
        return;
    }
    for(let i=front;i<=rear;i++){
        console.log(Queue[i]+" ");
    }
    
}

Push(1);
Push(2);
Push(3);
Push(4);
Push(5);
Push(6);
console.log("Queue is:")
ViewQueue();

console.log("Poped item is:"+Pop());
console.log("Poped item is:"+Pop());

console.log("Queue is:")
ViewQueue();
