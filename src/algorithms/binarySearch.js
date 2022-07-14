const bisearch = (nums,left,right,target) => {
    
    if (left > right) {
        return -1
    }
    
    let mid = (left + right) / 2

    if (target === nums[mid]){
        return mid
    } else if (target < nums[mid]){
        return bisearch(nums, left, mid - 1, target)
    } else {
        return bisearch(nums, mid + 1, right, target)
    } 
    
}