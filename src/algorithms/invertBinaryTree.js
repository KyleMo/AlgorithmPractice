
const invertTree = (root) => {
    if (!root){
        return null
    }

    const tempLeft = root.left

    root.left = root.right
    root.right = tempLeft

    invertTree(root.left)
    invertTree(root.right)

    return root
}