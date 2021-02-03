// function LinkedList() {
//     let Node = function(element){
//         this.element = element;
//         this.next = null;
//     };
//     let length = 0;
//     let head = null;
//     this.append = function(element){};
//     this.insert = function(position, element){};
//     this.removeAt = function(position){};
//     this.remove = function(element){};
//     this.indexOf = function(element){};
//     this.isEmpty = function() {};
//     this.size = function() {};
//     this.toString = function(){};
//     this.getHead = function(){};
// }

function LinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };
    let length = 0;
    let head = null;

    this.append = function (element) {
        let node = new Node(element),
            current;
        if (head === null) { //first node on list //{3}
            head = node;
        } else {
            current = head;
            //loop the list until find last item
            while (current.next) {
                current = current.next;
            }
            //get last item and assign next to node to make the link
            current.next = node;
        }
        length++; //update size of list
    };

    this.insert = function(position, element){
        //check for out-of-bounds values
        if (position >= 0 && position <= length){
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0){ //add on first position
                node.next = current;
                head = node;
            } else {
                while (index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++; //update size of list
            return true;
        } else {
            return false;
        }
    };

    this.removeAt = function(position){
        //check for out-of-bounds values
        if (position > -1 && position < length){
            let current = head,
                previous,
                index = 0;
            //removing first item
            if (position === 0){
                head = current.next;
            } else {
                while (index++ < position){
                    previous = current;
                    current = current.next;
                }
                //link previous with current's next: skip it to remove
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };

    this.remove = function(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    };

    this.indexOf = function(element){
        let current = head,
            index = -1;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    this.isEmpty = function() {
        return length === 0;
    };

    this.size = function() {
        return length;
    };

    this.toString = function(){
        let current = head,
            string = '';
        while (current) {
            string +=current.element +(current.next ? 'n' : '');
            current = current.next;
        }
        return string;
    };

    this.getHead = function(){
        return head;
    };
}