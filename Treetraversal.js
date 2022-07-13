class Node {
	constructor(val) {
		this.key = val;
		this.left = null;
		this.right = null;
	}
}
	var root = null;
	function printPostorder(node) {
		if (node == null)
			return;
		printPostorder(node.left);
		printPostorder(node.right);
		console.log(node.key + " ");
	}

	function printInorder(node) {
		if (node == null)
			return;
        printInorder(node.left);
		console.log(node.key + " ");
		printInorder(node.right);
	}

	function printPreorder(node) {
		if (node == null)
			return;
		console.log(node.key + " ");
		printPreorder(node.left);
		printPreorder(node.right);
		
	}

		root = new Node(1);
		root.left = new Node(2);
		root.right = new Node(3);
		root.left.left = new Node(4);
		root.left.right = new Node(5);

		console.log("Preorder traversal");
		printPreorder(root);

		console.log("Inorder traversal");
		printInorder(root);

		console.log("Postorder traversal");
		printPostorder(root);
