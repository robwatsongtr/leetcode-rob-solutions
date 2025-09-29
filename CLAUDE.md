# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

Personal LeetCode solutions repository containing implementations in both Python and JavaScript. Solutions are organized by problem category/algorithm type with additional reference implementations of common data structures and algorithms.

## Code Organization

### Primary Solution Directories

**Python Solutions** (`python_solutions/`):
- `array_string/` - Array and string manipulation problems
- `hashmap/` - Hash table/dictionary problems
- `trees/` - Binary tree problems (traversal, properties, manipulation)
- `linked_list/` - Linked list operations and algorithms
- `two_pointers/` - Two-pointer technique problems
- `sliding_window/` - Sliding window pattern problems
- `stack/` - Stack-based problems
- `binary_search/` - Binary search implementations
- `bit_manipulation/` - Bitwise operation problems
- `dynamic_prog/` - Dynamic programming solutions
- `graph/` - Graph algorithms (DFS, BFS, etc.)
- `intervals/` - Interval manipulation problems
- `matrix/` - 2D matrix problems

**JavaScript Solutions** (root-level directories):
- `Array/`, `String/`, `hashmap/`, `trees/`, `linked_List/`, `stack/`, `binary_search/`, `bit_manipulation/`, `intervals/`, `sliding_window/`, `two_pointer/`, `math/`
- `Grind_58/` - Solutions from the Grind 75/58 problem set

### Algorithm Reference Implementations

`algo_memorization/` contains standalone reference implementations of core algorithms and data structures:
- `graph_bfs_dfs.py` - Graph class with BFS (breadth-first) and DFS (depth-first) traversal using adjacency list
- `b_tree_bfs_dfs.py` - Binary tree class with BFS, DFS preorder/inorder/postorder traversal, BST insertion, and balanced insertion
- `lru_cache_v2.py` - LRU Cache implementation using doubly linked list + hashmap, includes OrderedDict alternative
- `prefix_sum.py` - Prefix sum array construction and range sum queries
- `singly_linked_list.py`, `doubly_linked_list.py` - Linked list implementations
- `graph_matrix.py` - Graph representation using adjacency matrix
- `weight_graph_dijkstra.py` - Weighted graph with Dijkstra's shortest path
- `sort_algos.py` - Common sorting algorithm implementations

### Other Files

- `b_tree.py`, `graph.py`, `graph_with_rob.py` - Root-level data structure implementations (older versions)
- `non-leetcode-questions/` - Practice problems not from LeetCode
- `scratchpad.js` - Scratch work file

## File Naming Convention

Solution files typically follow the pattern: `problem_name_<problem_number>.{py|js}`
Examples: `two_sum_1.py`, `binary_search_704.js`, `subarr_sum_eq_k_560.py`

## Running Code

**Python files:**
```bash
python3 path/to/file.py
```

Most Python files include test cases in `if __name__ == '__main__':` blocks.

**JavaScript files:**
```bash
node path/to/file.js
```

## Key Implementation Patterns

### Graph Traversal
- BFS uses `deque` with `popleft()` for O(1) queue operations
- DFS typically uses recursive helper function with `visited` set
- Graph representation: adjacency list stored as dictionary

### Tree Traversal
- BFS: Queue-based level-order traversal
- DFS Preorder: Process node, then left, then right
- DFS Inorder: Left, process node, right (produces sorted order for BST)
- DFS Postorder: Left, right, then process node

### Prefix Sum Pattern
Used for efficient range sum queries. Store cumulative sums in hashmap with running total. Key insight: `running_sum - k` checks for valid subarrays ending at current position. Initialize with `{0: 1}` to handle subarrays starting at index 0.

### LRU Cache
Combines doubly linked list (O(1) insertion/removal) with hashmap (O(1) lookup). Head = most recently used, tail = least recently used. On access, move node to head. On capacity overflow, evict tail.

## Development Notes

- Solutions include detailed comments explaining approach and intuition
- Many files contain problem descriptions at the top in docstrings
- Time/space complexity often noted in comments
- Multiple solution approaches sometimes included for comparison