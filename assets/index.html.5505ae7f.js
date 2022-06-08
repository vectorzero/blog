import{_ as e,o as t,c as n,e as r}from"./app.1d54f927.js";const o={},a=r(`<p>In computer science, <strong>binary search trees</strong> (BST), sometimes called ordered or sorted binary trees, are a particular type of container: data structures that store &quot;items&quot; (such as numbers, names etc.) in memory. They allow fast lookup, addition and removal of items, and can be used to implement either dynamic sets of items, or lookup tables that allow finding an item by its key (e.g., finding the phone number of a person by name).</p><p>Binary search trees keep their keys in sorted order, so that lookup and other operations can use the principle of binary search: when looking for a key in a tree (or a place to insert a new key), they traverse the tree from root to leaf, making comparisons to keys stored in the nodes of the tree and deciding, on the basis of the comparison, to continue searching in the left or right subtrees. On average, this means that each comparison allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree. This is much better than the linear time required to find items by key in an (unsorted) array, but slower than the corresponding operations on hash tables.</p><p>A binary search tree of size 9 and depth 3, with 8 at the root. The leaves are not drawn.</p><p><img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg" alt="Binary Search Tree"></p><h2 id="pseudocode-for-basic-operations" tabindex="-1"><a class="header-anchor" href="#pseudocode-for-basic-operations" aria-hidden="true">#</a> Pseudocode for Basic Operations</h2><h3 id="insertion" tabindex="-1"><a class="header-anchor" href="#insertion" aria-hidden="true">#</a> Insertion</h3><div class="language-text ext-text"><pre class="language-text"><code>insert(value)
  Pre: value has passed custom type checks for type T
  Post: value has been placed in the correct location in the tree
  if root = \xF8
    root \u2190 node(value)
  else
    insertNode(root, value)
  end if
end insert
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>insertNode(current, value)
  Pre: current is the node to start from
  Post: value has been placed in the correct location in the tree
  if value &lt; current.value
    if current.left = \xF8
      current.left \u2190 node(value)
    else
      InsertNode(current.left, value)
    end if
  else
    if current.right = \xF8
      current.right \u2190 node(value)
    else
      InsertNode(current.right, value)
    end if
  end if
end insertNode
</code></pre></div><h3 id="searching" tabindex="-1"><a class="header-anchor" href="#searching" aria-hidden="true">#</a> Searching</h3><div class="language-text ext-text"><pre class="language-text"><code>contains(root, value)
  Pre: root is the root node of the tree, value is what we would like to locate
  Post: value is either located or not
  if root = \xF8
    return false
  end if
  if root.value = value
    return true
  else if value &lt; root.value
    return contains(root.left, value)
  else
    return contains(root.right, value)
  end if
end contains
</code></pre></div><h3 id="deletion" tabindex="-1"><a class="header-anchor" href="#deletion" aria-hidden="true">#</a> Deletion</h3><div class="language-text ext-text"><pre class="language-text"><code>remove(value)
  Pre: value is the value of the node to remove, root is the node of the BST
      count is the number of items in the BST
  Post: node with value is removed if found in which case yields true, otherwise false
  nodeToRemove \u2190 findNode(value)
  if nodeToRemove = \xF8
    return false
  end if
  parent \u2190 findParent(value)
  if count = 1
    root \u2190 \xF8
  else if nodeToRemove.left = \xF8 and nodeToRemove.right = \xF8
    if nodeToRemove.value &lt; parent.value
      parent.left \u2190  nodeToRemove.right
    else
      parent.right \u2190 nodeToRemove.right
    end if
  else if nodeToRemove.left != \xF8 and nodeToRemove.right != \xF8
    next \u2190 nodeToRemove.right
    while next.left != \xF8
      next \u2190 next.left
    end while
    if next != nodeToRemove.right
      remove(next.value)
      nodeToRemove.value \u2190 next.value
    else
      nodeToRemove.value \u2190 next.value
      nodeToRemove.right \u2190 nodeToRemove.right.right
    end if
  else
    if nodeToRemove.left = \xF8
      next \u2190 nodeToRemove.right
    else
      next \u2190 nodeToRemove.left
    end if
    if root = nodeToRemove
      root = next
    else if parent.left = nodeToRemove
      parent.left = next
    else if parent.right = nodeToRemove
      parent.right = next
    end if
  end if
  count \u2190 count - 1
  return true
end remove
</code></pre></div><h3 id="find-parent-of-node" tabindex="-1"><a class="header-anchor" href="#find-parent-of-node" aria-hidden="true">#</a> Find Parent of Node</h3><div class="language-text ext-text"><pre class="language-text"><code>findParent(value, root)
  Pre: value is the value of the node we want to find the parent of
       root is the root node of the BST and is != \xF8
  Post: a reference to the prent node of value if found; otherwise \xF8
  if value = root.value
    return \xF8
  end if
  if value &lt; root.value
    if root.left = \xF8
      return \xF8
    else if root.left.value = value
      return root
    else
      return findParent(value, root.left)
    end if
  else
    if root.right = \xF8
      return \xF8
    else if root.right.value = value
      return root
    else
      return findParent(value, root.right)
    end if
  end if
end findParent
</code></pre></div><h3 id="find-node" tabindex="-1"><a class="header-anchor" href="#find-node" aria-hidden="true">#</a> Find Node</h3><div class="language-text ext-text"><pre class="language-text"><code>findNode(root, value)
  Pre: value is the value of the node we want to find the parent of
       root is the root node of the BST
  Post: a reference to the node of value if found; otherwise \xF8
  if root = \xF8
    return \xF8
  end if
  if root.value = value
    return root
  else if value &lt; root.value
    return findNode(root.left, value)
  else
    return findNode(root.right, value)
  end if
end findNode
</code></pre></div><h3 id="find-minimum" tabindex="-1"><a class="header-anchor" href="#find-minimum" aria-hidden="true">#</a> Find Minimum</h3><div class="language-text ext-text"><pre class="language-text"><code>findMin(root)
  Pre: root is the root node of the BST
    root = \xF8
  Post: the smallest value in the BST is located
  if root.left = \xF8
    return root.value
  end if
  findMin(root.left)
end findMin
</code></pre></div><h3 id="find-maximum" tabindex="-1"><a class="header-anchor" href="#find-maximum" aria-hidden="true">#</a> Find Maximum</h3><div class="language-text ext-text"><pre class="language-text"><code>findMax(root)
  Pre: root is the root node of the BST
    root = \xF8
  Post: the largest value in the BST is located
  if root.right = \xF8
    return root.value
  end if
  findMax(root.right)
end findMax
</code></pre></div><h3 id="traversal" tabindex="-1"><a class="header-anchor" href="#traversal" aria-hidden="true">#</a> Traversal</h3><h4 id="inorder-traversal" tabindex="-1"><a class="header-anchor" href="#inorder-traversal" aria-hidden="true">#</a> InOrder Traversal</h4><div class="language-text ext-text"><pre class="language-text"><code>inorder(root)
  Pre: root is the root node of the BST
  Post: the nodes in the BST have been visited in inorder
  if root != \xF8
    inorder(root.left)
    yield root.value
    inorder(root.right)
  end if
end inorder
</code></pre></div><h4 id="preorder-traversal" tabindex="-1"><a class="header-anchor" href="#preorder-traversal" aria-hidden="true">#</a> PreOrder Traversal</h4><div class="language-text ext-text"><pre class="language-text"><code>preorder(root)
  Pre: root is the root node of the BST
  Post: the nodes in the BST have been visited in preorder
  if root != \xF8
    yield root.value
    preorder(root.left)
    preorder(root.right)
  end if
end preorder
</code></pre></div><h4 id="postorder-traversal" tabindex="-1"><a class="header-anchor" href="#postorder-traversal" aria-hidden="true">#</a> PostOrder Traversal</h4><div class="language-text ext-text"><pre class="language-text"><code>postorder(root)
  Pre: root is the root node of the BST
  Post: the nodes in the BST have been visited in postorder
  if root != \xF8
    postorder(root.left)
    postorder(root.right)
    yield root.value
  end if
end postorder
</code></pre></div><h2 id="complexities" tabindex="-1"><a class="header-anchor" href="#complexities" aria-hidden="true">#</a> Complexities</h2><h3 id="time-complexity" tabindex="-1"><a class="header-anchor" href="#time-complexity" aria-hidden="true">#</a> Time Complexity</h3><table><thead><tr><th style="text-align:center;">Access</th><th style="text-align:center;">Search</th><th style="text-align:center;">Insertion</th><th style="text-align:center;">Deletion</th></tr></thead><tbody><tr><td style="text-align:center;">O(log(n))</td><td style="text-align:center;">O(log(n))</td><td style="text-align:center;">O(log(n))</td><td style="text-align:center;">O(log(n))</td></tr></tbody></table><h3 id="space-complexity" tabindex="-1"><a class="header-anchor" href="#space-complexity" aria-hidden="true">#</a> Space Complexity</h3><p>O(n)</p><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2><ul><li><a href="https://en.wikipedia.org/wiki/Binary_search_tree" target="_blank" rel="noopener noreferrer">Wikipedia</a></li><li><a href="https://www.youtube.com/watch?v=wcIRPqTR3Kc&amp;list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&amp;index=9&amp;t=0s" target="_blank" rel="noopener noreferrer">Inserting to BST on YouTube</a></li><li><a href="https://www.cs.usfca.edu/~galles/visualization/BST.html" target="_blank" rel="noopener noreferrer">BST Interactive Visualisations</a></li></ul>`,34),i=[a];function d(s,l){return t(),n("div",null,i)}var c=e(o,[["render",d],["__file","index.html.vue"]]);export{c as default};
