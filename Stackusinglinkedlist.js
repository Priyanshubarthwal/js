class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.head=null;
    }

    isEmpty(){
        if(this.head==null)
            return true;
        else return false;    
    }

    Push(data){
        if(this.head==null)
            this.head=new Node(data);
        else{
            let newnode=new Node(data);
            newnode.next=this.head;
            this.head=newnode;
        }    
    }

    Pop(){
        if(this.isEmpty())
            return null;
        else{
            let popnode=this.head;
            this.head=this.head.next;
            popnode.next=null;
            return popnode.data;
        }    
    }

    ViewStack(){
        let temp=this.head;
        if(this.isEmpty()){
            console.log("Stack Underflow");
        }
        else{
            while(temp!=null){
                console.log(temp.data);
                temp=temp.next;
            }
            return;
        }
    }
}

stack=new Stack();
stack.Push(1);
stack.Push(2);
stack.Push(3);

stack.ViewStack();

let item=stack.Pop();
console.log("Poped item is:"+item);

stack.ViewStack();
