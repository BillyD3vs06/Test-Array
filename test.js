class test {
    constructor(size) {
        this.arr = new Array();
        this.maximum = size;
        this.position = 0;
    }
    // Klar
    push(data) {
        if (this.position >= this.size) { return "The array is full"; }

        this.arr[this.position] = data;
        this.position++;
        return this.arr;
    }

    // Klar
    length() {
        if (this.arr[0] == undefined) {return { min:undefined, pos: -1 }}
        let i = 0;
        while (this.arr[i] != undefined) {
            i++;
        }
        return i;
    }

    // Klar
    pop() {
        if (this.arr[0] == undefined) { return -1; }
        let i;
        let array = [];
        for (i = 0; i < this.position - 1; i++) {
            array[i] = this.arr[i];
        }
        this.position--;
        this.arr = array;
        return this.arr;
    }

    // Klar
    at(pos) {
        if (this.position <= 0) {return -1;}

        if (this.arr[pos - 1] != undefined) {
            return this.arr[pos - 1];
        }
        else {
            console.log("Error, positionen som angetts är ej giltig");
            return;
        }
    }
    

    // Klar
    min() {
        if (this.position <= 0) {return -1;}

        let min = this.arr[0];
        let pos = 0;

        for (let i = 1; i < this.position; i++) {
            if (this.arr[i] < min) {
                min = this.arr[i];
                pos = i;
            } 
        }
        return { min: min, pos: pos};
    } 

    // Klar
    max() {
        if (this.position <= 0) {return -1;}

        let max = this.arr[0];
        let pos = 0;

        for (let i = 1; i < this.position; i++) {
            if (this.arr[i] > max) {
                max = this.arr[i];
                pos = i;
            } 
        }
        return { max: max, pos: pos};

    }

    // Klar
    mean() {
        if (this.position <= 0) { return undefined; }

        let sum = 0;
        for (let i = 0; i < this.position; i++) {
            sum += this.arr[i];
        }
        return sum / this.position;
    }
    // Klar
    clear() {
        if (this.position <= 0) { return -1; }
        while(this.arr[0] != undefined) {
            this.arr = this.pop();     
        }
        this.size = 0;
        this.position = 0;
        return this.arr;
    }

    

    // Klar
    sum() {
        if (this.position <= 0) { return undefined; }

        let sum = 0;
        for (let i = 0; i < this.position; i++) {
            sum += this.arr[i];
        }
        return sum;
    }

    // Klar
    popHead() {
        if (this.position <= 0) { return -1; }
        let i = 1;
        let array = [];
        while(this.arr[i] != undefined) {
            array[i-1] = this.arr[i];
            i++;
        }
        this.position--;
        this.arr = array;
        return array;
    }

    show() {
        
    }

    // Klar
    reverse() {
        if (this.position <= 0) {return undefined;}
        let a;
        for (let i = 0; i < this.position/2; i++) {
            a = this.arr[i];
            this.arr[i] = this.arr[this.position - 1 - i];
            this.arr[this.position - 1 - i] = a;
        }
        return this.arr;
    }


    
    replace(index, value) {
        if (this.position <= 0 || index == undefined || value === undefined) {return -1};

        this.arr[index] = value;
        return this.arr;
    }

    swap(indexA, indexB) {
        if (this.position <= 0 || indexA == undefined || indexB == undefined) { return -1};

        let a = this.arr[indexA];

        this.arr[indexA] = this.arr[indexB];
        this.arr[indexB] = a;

        return this.arr;
    }


}


let a = new test(7);

a.push(29);
a.push(13);
a.push(7);
a.push(64);
a.push(1);

console.log(a);

console.log(a.swap(1, 3));

console.log(a);