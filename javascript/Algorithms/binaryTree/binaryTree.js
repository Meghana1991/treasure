// Defining the Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

//Defining the BST
function BST() {
    this._root = null;
}

//Inserting into BST
BST.prototype.insert = function (data) {
    var node = new Node(data);

    // If it's the first node
    if (this._root === null) {
        this._root = node;
        return;
    }

    var current = this._root;

    while (current) {
        if (data < current.data) {
            if (current.left === null) {
                current.left = node;
                return;
            }
            current = current.left;
        } else if (data > current.data) {
            if (current.right === null) {
                current.right = node;
                return;
            }
            current = current.right;
        } else {
            // Duplicates are not supported
            return;
        }
    }
};

//Search in BST
BST.prototype.contains = function (data) {
    var current = this._root;
    while (current) {
        if (data === current.data) {
            return true;
        }
        if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return false;
};

var bst = new BST();
console.log('Insert into BST: 5');
bst.insert(5);

console.log('BST contains 5? Returns ' + bst.contains(5));
console.log('BST contains 6? Returns ' + bst.contains(6));