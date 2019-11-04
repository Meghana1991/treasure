/**
 * Queue is FIFO
 * To remove any element in the queue, we need to remove the previously added elements
 * 10
 * 2 10
 * 7 2 10
 * 3 7 2 10
 */

function createQueue() {
    let queue = [];
    this.enqueue = (item) => {
        queue.unshift(item)
        console.log('added. Queue looks like', queue)
    }

    this.dequeue = () => {
        queue.pop()
        console.log('removed. Queue looks like', queue)
    }

    // Peek tells you which item to remove next in the queue
    this.peek = () => {
        console.log('Peek this -', queue[queue.length - 1])
    }

    //length

    this.isEmpty = () => {
        if (queue.length == 0) {
            console.log('isEmpty -', queue)
        } else {
            console.log('queue not empty -', queue)
        }
    }
}
let q = new createQueue()

q.isEmpty()
q.enqueue(1)
q.enqueue('Heyyyy')
q.enqueue('Phew')
q.dequeue();
q.isEmpty()
q.peek();
q.isEmpty()