class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }
    class LinkedList {
        constructor() {
            this.next = null;
            this.size = 0;
        }

        add(data) {

            var node = new Node(data);
            var current;

            if (this.head == null) {
                this.head = node;
            }
            else {
                current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            this.size++;
        }

        
        displayList() {
            var cur = this.head;
            var str = " ";
            while (cur) {
                str += cur.data + " ";
                cur = cur.next;
            }
            console.log(str);
        }
    }

    var list = new LinkedList();

    list.add(10);
    list.add(43);
    list.add(16);
    list.add(34);
    list.add(98);

    data = window.prompt("Enter the data");
    list.add(data)
    list.displayList();
