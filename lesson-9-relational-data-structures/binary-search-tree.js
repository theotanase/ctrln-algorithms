"use strict";
class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
function addNumberToTree(value, tree) {
    if (value <= tree.value) {
        if (tree.left == null) {
            tree.left = new BSTNode(value);
        }
        else {
            addNumberToTree(value, tree.left);
        }
    }
    else {
        if (tree.right == null) {
            tree.right = new BSTNode(value);
        }
        else {
            addNumberToTree(value, tree.right);
        }
    }
}
function printAscendingOrder(tree) {
    if (tree == null) {
        return;
    }
    printAscendingOrder(tree.left);
    console.log(tree.value);
    printAscendingOrder(tree.right);
}
function isNumberInTree(needle, tree) {
    if (tree == null) {
        return false;
    }
    if (needle == tree.value) {
        return true;
    }
    if (needle < tree.value) {
        return isNumberInTree(needle, tree.left);
    }
    return isNumberInTree(needle, tree.right);
}
const numbers = [33, 2, 11, 45, 100, 30, 50, 22, 3, 14];
const root = new BSTNode(numbers[0]);
for (let index = 1; index < numbers.length; index++) {
    addNumberToTree(numbers[index], root);
}
// printAscendingOrder(root);
console.log(isNumberInTree(22, root)); // true
console.log(isNumberInTree(1234, root)); // false
