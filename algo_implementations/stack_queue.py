"""
Personal implementations of Stack and Queue data structcures  
"""

from typing import Any

from collections import deque


class Stack:
    def __init__(self):
        self.stack = []

    def push(self, val) -> bool:
        self.stack.append(val)
        return True
        

    def pop(self) -> Any | bool:
        if self.stack:
            return self.stack.pop()
        else:
            return False 


class Queue:
    def __init__(self):
        self.queue = deque()

    def enqueue(self, val) -> bool:
        self.queue.append(val)
        return True 

    def dequeue(self) -> Any | None:
        if self.queue:
            return self.queue.popleft() 
        else:
            return False 