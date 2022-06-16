/**
 * @param {number} capacity
 */
/**
LRUCache - keep track of size
use a combination of DLL and hash table (object)
    cache is the DLL, hash table gives access to the DLL

HASH TABLE
    hash table structure:
        key: key given
        value: newNode
        ex: this.hashTable = {}
    new item - goes to the head
    least recently used (oldest) - goes to the tail

PUT -
    when an item is in the hash table/cache
        --> update its value
        --> this.hashTable[key]["value"] = value;
move it from its position in the DLL to the head
node = this.hashTable[key];
need to make the node.prev = node.next
node.prev = null;
node.next = this.cache.head
node.next.prev = node;
if item not in cache
cache is full - kick out least recently used item (the oldest item) -> this will be the tail
then delete the item from the hash table
identify the tail: cache.tail
newTail = cache.tail.prev
this.cache.tail = newTail;
this.cache.tail.next = null;

make the new node
newNode.prev = this.cache.tail.prev
newNode.prev.next - newNode;
delete this.hashTable.value of the thing in the tail
 */
/**
 *
 */

class LRUCache {
    constructor(capacity) {
        this.size = 0;
        this.capacity = capacity;
        this.cache = {
            head: null,
            tail: null
        };
        this.hashTable = {};
    }

}

LRUCache.prototype.newNode = function (value = null, prev = null, next = null) {
    const node = {
        value: value,
        prev: prev,
        next: next
    }
    return node
}

LRUCache.prototype.addToHash = function (key, node) {
    this.hashTable[key] = node;
}

/**
 * @param {number} key
 * @return {number}
 */

// need to move the node from where it is
// check if it 's the head
// if it's the head, don't need to move
LRUCache.prototype.get = function (key) {
    if (this.hashTable.hasOwnProperty(key)) {
        if (this.cache.head == this.hashTable[key]) {
        }
        else {
            if (this.hashTable[key].prev) {
                this.hashTable[key].prev.next = this.hashTable[key].next;
            }
            if (this.hashTable[key].prev) {
                this.hashTable[key].next.prev = this.hashTable[key].prev;
            }
        }
        this.addToHead(this.hashTable[key])
        return this.hashTable[key].value;
    }
    else return -1
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.hashTable.hasOwnProperty(key)) {
        this.hashTable[key].next.prev = this.hashTable[key].prev;
        this.hashTable[key].prev.next = this.hashTable[key].next;
        this.hashTable[key][value] = value;
        this.addToHead(this.hashTable[key])
    }
    else {
        const newNode = this.newNode(value);
        this.addToHash(key, newNode);
        if (this.size === this.capacity) {
            this.removeFromTail();
        }
        else {
            this.size++;
        }
        this.addToHead(newNode)
    }
};

LRUCache.prototype.addToHead = function (node) {
    if (!this.cache.head) {
        this.cache.head = node;
        if (!this.cache.tail) {
            this.addToTail(node);
        }
        return
    }
    if (this.cache.head === node) return;
    this.cache.head.prev = node;
    node.next = this.cache.head;
    this.cache.head = node;
    node.prev = null;
}

LRUCache.prototype.removeFromTail = function () {
    const key = this.cache.tail.value;
    this.cache.tail.prev.next = null;
    this.cache.tail = this.cache.tail.prev;
    delete this.hashTable[key];
    console.log("key", key);
    console.log("hash table after deletion", this.hashTable)
    console.log("cache after deletion", this.cache);
}

LRUCache.prototype.addToTail = function (node) {
    if (!this.cache.tail) {
        this.cache.tail = node;
        this.cache.head.next = node;
        this.cache.tail.pre = this.cache.head
    }
    node.prev = this.cache.tail;
    this.cache.tail.next = node;
    node.next = null;
    this.cache.tail = node;
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
