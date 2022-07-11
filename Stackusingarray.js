function isFull() {
    if (top == MAX - 1) {
        return true;
    }
    else return false;
}

function isEmpty() {
    if (top == -1) {
        return true;
    }
    else return false;
}

function Push(item) {
    if (isFull()) {
        console.log("Stack Overflow");
        return;
    }
    top = top + 1;
    Stack[top] = item;
}

function Pop() {
    let item;
    if (isEmpty()) {
        console.log("Stack underflow");
        return;
    }
    item = Stack[top];
    top = top - 1;
    return item;
}

function ViewStack() {
    if (isEmpty()) {
        console.log("Stack Underfow");
        return;
    }
    for (let i = top; i >= 0; i--) {
        console.log(Stack[i] + " ");
    }
}

let Stack = new Array(MAX);
let top = -1;

Push(1);
Push(2);
Push(3);
Push(4);
Push(5);
Push(6);
console.log("Stack is:")
ViewStack();

Pop();
Pop();

console.log("Stack is:")
ViewStack();
