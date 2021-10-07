"use strict";
class TreeNode {
    constructor(name, children) {
        this.name = name;
        this.children = children;
    }
    setChildren(children) {
        this.children = children;
    }
}
const alexNode = new TreeNode("Alex", []);
const ionNode = new TreeNode("Ion", []);
const cristiNode = new TreeNode("Cristi", []);
const elenaNode = new TreeNode("Elena", []);
const georgeNode = new TreeNode("George", [alexNode]);
const johnNode = new TreeNode("John", [elenaNode]);
const robertNode = new TreeNode("Robert", [cristiNode, ionNode, georgeNode]);
const mikeNode = new TreeNode("Mike", [robertNode, johnNode]);
ionNode.setChildren([mikeNode]);
function getAllChildren(node) {
    let childrenNames = [];
    for (const childNode of node.children) {
        childrenNames.push(childNode.name);
        childrenNames.push(...getAllChildren(childNode));
    }
    return childrenNames;
}
function displayChildren(root) {
    const children = getAllChildren(root);
    console.log(`Descendentii lui ${root.name} sunt: ${children}`);
}
displayChildren(mikeNode);
