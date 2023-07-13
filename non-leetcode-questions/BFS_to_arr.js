class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function constructTree(bfs) {
  if (bfs.length === 0) {
    return null;
  }

  const root = new TreeNode(bfs[0]);
  const queue = [root];
  let i = 1;

  while (i < bfs.length) {
    const current = queue.shift();

    // Left child
    if (i < bfs.length && bfs[i] !== null) {
      current.left = new TreeNode(bfs[i]);
      queue.push(current.left);
    }
    i++;

    // Right child
    if (i < bfs.length && bfs[i] !== null) {
      current.right = new TreeNode(bfs[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}


const bfs = [1, 2, 3, null, 4, 5, 6];

const root = constructTree(bfs);
console.log(root);