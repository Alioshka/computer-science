/* Trie Data Structure */

function Node() {
    this.keys = {};
    this.end = false;
}

function Trie() {

    this.root = new Node();

    this.add = function(input, node = this.root) {
        if (!input.length) {
            node.end = true;
        } else if (!node.keys[input[0]]) {
            node.keys[input[0]] = new Node();
            this.add(input.substr(1), node.keys[input[0]]);
        } else {
            this.add(input.substr(1), node.keys[input[0]]);
        }
    };

    this.isWord = function(word) {
        let node = this.root;
        while (word.length > 1) {
            if (!node.keys[word[0]]) {
                return false;
            } else {
                node = node.keys[word[0]];
                word = word.substr(1);
            }
        }
        return !!(node.keys[word] && node.keys[word].end);
    };

    this.print = function() {
        let words = [];
        let search = function(node, string) {
            const keys = Object.keys(node.keys);
            if (keys.length) {
                keys.forEach(key => {
                    search(node.keys[key], string + key);
                });
                if (node.end) {
                    words.push(string);
                }
            } else {
                string.length > 0 ? words.push(string) : undefined;
            }
        };
        search(this.root, '');
        return words;
    };

}

myTrie = new Trie();
myTrie.add('ball');
myTrie.add('bat');
myTrie.add('doll');
myTrie.add('dork');
myTrie.add('do');
myTrie.add('dorm');
myTrie.add('send');
myTrie.add('sense');
console.log(myTrie.isWord('doll'));
console.log(myTrie.isWord('dor'));
console.log(myTrie.isWord('dorf'));
console.log(myTrie.print());
