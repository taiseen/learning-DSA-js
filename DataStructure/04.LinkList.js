// 2-May-2021 

class Node {
    constructor(data) {
        this.data = data;
        
        // single
        this.next = null;

        // Doubly
        //this.previous = null;
    }
}

// #############################################
// #############################################

class LinkList {

    // main --> starting point... 
    // & this should be a Node 

    constructor(head) {
        this.head = head;
        this.size = 1;
    }

    add(data) {

        const newNode = new Node(data);
        let currentNode = this.head;

        // checking until - null area not found... 
        while (currentNode.next != null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        this.size++;
    }
}

// ########################################################
// ########################################################
// ########################################################

    const head = new Node(90);

    const linking = new LinkList(head);
    linking.add(80);
    linking.add(70);
    linking.add(60);
    linking.add(50);


    console.log(linking);
    // LinkList {
    //     head: Node { data: 90, next: Node { data: 80, next: [Node] } },
    //     size: 5
    // }

    console.log(JSON.stringify(linking));
    // {"head":
    //     {"data":90,"next":
    //         {"data":80,"next":
    //             {"data":70,"next":
    //                 {"data":60,"next":
    //                     {"data":50,"next":
    //                         null }}}}} ,
    //                         "size" : 5 }

    console.log(linking.size);
    // 5

// ########################################################
// ########################################################
// ########################################################