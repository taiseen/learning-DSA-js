// 2-May-2021 

class Dictionary {

    // Time Complexity | Contestant Time
    // O(1)

    // empty object
    constructor() {
        this.dictionary = {}
    }

    // add data as { key : value } pair
    add(key, value) {
        this.dictionary[key] = value;
    }

    get(key) {
        return this.dictionary[key];
    }
}

// ########################################################
// ########################################################
// ########################################################


    const phoneBook = new Dictionary();

    // add data into Dictionary 
    phoneBook.add('Jon', '01717-112233');
    phoneBook.add('Sam', '01712-334455');
    phoneBook.add('Lee', '01717-556644');

    console.log(phoneBook);
    // Dictionary {
    //     dictionary: { Jon: '01717-112233', Sam: '01712-334455', Lee: '01717-556644' }
    // }

    console.log(phoneBook.dictionary);
    // { Jon: '01717-112233', Sam: '01712-334455', Lee: '01717-556644' }

    // get data from Dictionary 
    const sam = phoneBook.get('Sam');
    console.log(sam)
    // 01712-334455

// ########################################################
// ########################################################
// ########################################################