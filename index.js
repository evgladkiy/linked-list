class Node {
    constructor(data = null, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var elem = new Node(data);

        if (this.length > 0) {
            elem.prev = this._tail;
            this._tail.next = elem;
            this._tail = elem;
        }

        if (this.length === 0) {
            this._head = elem;
            this._tail = elem;
        }
        
        this.length++;
        return this;
    }

    head() {
    	if (this._head == null) {
    		return this._head
    	}
        return this._head.data;
    }

    tail() {
    	if (this._tail == null) {
    		return this._tail
    	}
        return this._tail.data;
    }
    at(index) {
        return this.find(index).data;
    }

    insertAt(index, data) {
    	if( this.find(index) !== null) {
	        this.find(index).data = data;
    	}
    	return this;
    }


    isEmpty() {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
        if (index === 0) {
        	if(this.length === 1) {
        		this.clear();
    			return this
    	}
            this._head = this._head.next; 
            this._head.prev = null;
        } else if (index === this.length -1) {
            this._tail = this._tail.prev;
            this._tail.next = null;
        } else {
            var prevElem = this.find(index -1),
               	current = prevElem.next;
            prevElem.next = current.next;
        }
        this.length--;
        return this;
    }

    reverse() {
        if (this.length == 0) {
            return
        } else {
        	var oldHead = this._head,
        		oldTail = this._tail; 
        	this.clear();
        	this.append(oldTail.data);
        	var current = oldTail.prev
        	while(current !== null) {
        		this.append(current.data)
        		current = current.prev;
        	}
        }
        return this;
   }

    indexOf(data) {
    	var current = this._head,
    		pos = 0 
    	while(current !== null) {
    		if (current.data === data) {
    			return pos;
    		}
    		current = current.next;
    		pos++;

    	} 
    	return -1;
    }

    find(index) {
        var pos = 0,
            current = this._head;
        while(pos !== index) {
            current = current.next;
            pos++;
        }
        return current;
    }
}

const list = new LinkedList();
            console.log(list.append(4).reverse().deleteAt(0).clear().insertAt(0, 3));


