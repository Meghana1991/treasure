export class Stack {
    constructor() {
        let stack = []
    }

    isEmpty() {
        return !stack.length
    }

    peek() {
        return stack[0]
    }
}