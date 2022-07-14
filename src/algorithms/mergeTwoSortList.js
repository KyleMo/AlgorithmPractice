
import ListNode from './ListNode.js'

const mergeTwoLists = (list1, list2) => {

    let dummy = new ListNode()
    let mergeHead = dummy


    while(list1 && list2){
       
        if (list1.val <= list2.val){
            mergeHead.next = list1
            list1 = list1.next
        }
        else {
            mergeHead.next = list2
            list2 = list2.next
        }

        mergeHead = mergeHead.next
    }

    if (list1){
        mergeHead.next = list1
    }
    else if (list2) {
        mergeHead.next = list2
    }

    return dummy.next
}

export default mergeTwoLists

