"""
A Trie is a great example of an N-ary tree with fixed children slots 

It is used for fast prefix and word lookup in situations that neeed it, like autocomplete. 
"""


class TrieNode:
    def __init__(self):
        # each array slot siginifies and alphabet position
        self.children = [None] * 26
        # last node flag to get the 'full word-ness'
        self.is_word = False 


class Trie:
    def __init__(self):
        self.root = TrieNode() 


    def insert(self, string) -> None:
        # start inserting at the root 
        curr_node = self.root 

        for char in string:
            # get alaphabet position
            char_val = ord(char.lower()) - ord('a')

            # if there's no node in the slot of the current letter 
            # make one and put it there. This is the branching. 
            if curr_node.children[char_val] == None:
                new_node = TrieNode()
                curr_node.children[char_val] = new_node

            # otherwise move to the node of the existing letter
            # kind of like a linked list or BST traversal 
            curr_node = curr_node.children[char_val]

        # exit loop, we're done inputting the word so set the last node flag
        curr_node.is_word = True 

    def search(self, string) -> bool:
        curr_node = self.root

        for char in string:
            char_val = ord(char.lower()) - ord('a')

            if curr_node.children[char_val] == None:
                return False 
            else:
                # keep traversing 
                curr_node = curr_node.children[char_val]
                
        return curr_node.is_word # last node has to to have the flag flipped 

    def starts_with(self, string) -> bool:
        curr_node = self.root

        for char in string:
            char_val = ord(char.lower()) - ord('a')

            if curr_node.children[char_val] is None:
                return False 
            else:
                # keep traversing 
                curr_node = curr_node.children[char_val]       

        return True    


if __name__ == "__main__":
 
    example_trie = Trie()

    print()
    print("insert 'fathom' and example' ")
    example_trie.insert("fathom")
    example_trie.insert("example")
    print()

    print(f' search trie for "example": {example_trie.search('example')}') # true
    print(f' search trie for "exam": {example_trie.search('exam')}') # false 
    
    print(f' check trie for starts_with on "fa": {example_trie.starts_with('fa')} ') # true 
    print(f' check trie for starts_with on "fat": {example_trie.starts_with('fat')} ') # true
    print(f' check trie for starts_with on "fe": {example_trie.starts_with('fe')} ') # false 
    