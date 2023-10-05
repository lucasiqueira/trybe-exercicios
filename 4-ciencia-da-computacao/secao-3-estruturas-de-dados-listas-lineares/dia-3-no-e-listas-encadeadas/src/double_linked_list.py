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

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        new_value = Node(value)
        previous_value = self.head_value
        for _ in range(position - 1):
            previous_value = previous_value.next
        new_value.next = previous_value.next
        new_value.previous = previous_value
        previous_value.next = new_value
        self.__length += 1

    def remove_first(self):
        if not self.head_value:
            return None
        if self.head_value.next:
            self.head_value.next.previous = None
        self.head_value = self.head_value.next
        self.__length -= 1

    def remove_last(self):
        if not self.tail_value:
            return None
        if self.tail_value.previous:
            self.tail_value.previous.next = None
        self.tail_value = self.tail_value.previous
        self.__length -= 1

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()
        previous_value = self.head_value
        for _ in range(position - 1):
            previous_value = previous_value.next
        previous_value.next = previous_value.next.next
        previous_value.next.previous = previous_value
        self.__length -= 1

    def get_element_at(self, position):
        if position < 0 or position >= len(self):
            return None
        current_value = self.head_value
        for _ in range(position):
            current_value = current_value.next
        return current_value.value

    def is_empty(self):
        return self.head_value is None
