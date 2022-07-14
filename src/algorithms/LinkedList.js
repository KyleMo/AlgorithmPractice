

export default class LinkedList {
    constructor(head = null){
        this.head = head
    }

    add(ListNode){

        if (this.head === null){
            this.head = ListNode
        } 
        else {
            let currNode = this.head
            while (currNode.next !== null){
                currNode = currNode.next
            }
            //this should be last ndoe in list
            currNode.next = ListNode
        }
    }

    //delete from beginning
    deleteFromHead(){
        this.head = this.head.next
    }

    deleteFromEnd(){

        let currNode = this.head

        if(currNode === null){
            return
        }

        if(currNode.next === null){
            this.head = null
        }

        while(currNode.next.next !== null){
            currNode = currNode.next
        }

        currNode.next = null
    }

    deleteNodewithValue(value){
        let currNode = this.head

        if (currNode === null){
            return
        }

        if (currNode.val === value){
            this.head = currNode.next
            return
        }

        // if(currNode.val === value && currNode.next === null){
        //     this.head = null
        //     return
        // }

        // if(currNode.next !== null && currNode.val === value){
        //     this.head = currNode.next
        //     return
        // }


        while (currNode.next !== null){

            if (currNode.next.val === value){
                currNode.next = currNode.next.next
                return
            }
        }
        return
    }

}