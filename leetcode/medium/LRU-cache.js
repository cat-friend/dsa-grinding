/**
 * @param {number} capacity
 */

// LRUCache - keep track of size
// use a queue - FIFO
// PUT -
    // when an item is in the cache, update its value
        // move it from its position in the queue to the end of the queue
    // if item not in cache
        // cache is full - kick out least recently used item (the oldest item) -> this will be the front of the queue
            // delete this.cache(queue.shift())
            //

class LRUCache {
    constructor (capacity) {
        this.size = 0;
        this.capacity = capacity;
        this.cache = {};
        this.hashTable = {};
    }
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {

};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.size === this.capacity) {

    }

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
