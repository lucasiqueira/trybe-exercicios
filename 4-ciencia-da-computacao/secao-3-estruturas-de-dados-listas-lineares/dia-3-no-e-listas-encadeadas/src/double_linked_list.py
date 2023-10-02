from node import Node


class DoubleLinkedList:
    def __init__(self):
        self.head_value = None
        self.tail_value = None
        self.__length = 0

    def __str__(self):
        return f"DLinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        if self.head_value:
            self.head_value.previous = first_value
        if not self.tail_value:
            self.tail_value = first_value
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        last_value = Node(value)
        self.tail_value.next = last_value
        last_value.previous = self.tail_value
        self.tail_value = last_value
        self.__length += 1
