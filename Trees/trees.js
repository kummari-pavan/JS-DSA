//This is for create nodes
class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

//Creating Tree
class Tree{
    constructor(){
        this.root=null;
    }

    addNode(data){

        const newNode= new Node(data);
        if(this.root===null){
            this.root=newNode;
        }
        else{
            this._insertNode(this.root,newNode)
        }
    }

    _insertNode(currentNode,newNode){
        if(newNode.data<currentNode.data){
            if(currentNode.left===null){
                currentNode.left=newNode;
            }
            else{
                this._insertNode(currentNode.left,newNode);
            }
        }
        else if(newNode.data>currentNode.data){
            if(currentNode.right===null){
                currentNode.right=newNode;
            }
            else{
                this._insertNode(currentNode.right,newNode);
            }
        }
    }

    inorder_display(currentNode=this.root){
        if(currentNode!=null){
            this.inorder_display(currentNode.left);
            console.log(currentNode.data);
            this.inorder_display(currentNode.right);
        }

    }
    postorder_display(currentNode=this.root){
        if(currentNode!=null){
            this.postorder_display(currentNode.left);
            this.postorder_display(currentNode.right);
            console.log(currentNode.data);
        }
    }

    preorder_display(currentNode=this.root){
        if(currentNode!=null){
            console.log(currentNode.data);
            this.preorder_display(currentNode.left);
            this.preorder_display(currentNode.right);
        }
    }
    

}

let bst=new Tree();
bst.addNode(50);
bst.addNode(70);
bst.addNode(30);

console.log("Inorder Travels")
bst.inorder_display();

console.log("post Travels")
bst.postorder_display();

console.log("pre Travels")
bst.preorder_display();