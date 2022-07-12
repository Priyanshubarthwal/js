class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.front=this.rear=null;
    }

    isEmpty(){
        this.front==null;
    }

    Push(data){
        let temp=new node(data);

        if(this.rear==null){
            this.front=this.rear=temp;
            return;
        }

        this.rear.next=temp;
        this.rear=temp;
    }

    Pop(){
        if(this.isEmpty())
            return;

        let temp=this.front;
        this.front=temp.next;
        
        if(this.front==null)
            this.rear=null;
    }

    ViewQueue(){
        let temp=this.front;

        if(this.isEmpty())
            console.log("Queue is empty");
        else{
            while(temp!=null){
                console.log(temp.data);
                temp=temp.next;
            }
            return;
        }    
    }
}

    q= new Queue();
    console.log("Queue is:");
    q.Push(1);
    q.Push(2);
    q.Push(3);
    q.Push(4);
    q.Push(5);

    q.ViewQueue();
    
    q.Pop();
    q.Pop();
    console.log("Queue is:");

    q.ViewQueue();
