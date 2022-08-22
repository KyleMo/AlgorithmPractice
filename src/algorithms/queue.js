import ListNode from "./ListNode";

export default class Queue {
    constructor(first = null, last = null){
        this.first = first,
        this.last = last
    }

    //to end
    add(node){

        //if theres notthing

        if (this.last === null && this.first === null){
            this.first = node
            this.last = node
        }

        this.last.next = node
        this.last = node

    }

    //from front
    remove(){

        if (this.first === null){
            return
        }

        let temp = this.first.val

        this.first = this.first.next
        
        if (this.first === null){
            this.last = null
        }

        return temp

    }

}