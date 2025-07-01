/** Observer pattern */
export class Observer {
  notify(index: number, notification: string) {
    console.log(
      'Observer ' +
      index +
      ': The subject i am subscribed to has emitted a notification -> ',
      notification
    )
  }
}

export class Subject {
  observers: Observer[] = [];

  subscribe(observer: Observer) {
    this.observers.push(observer)
  }

  unsubscribe(observer: Observer) {
    let index = this.observers.indexOf(observer)
    console.log('Subject: Unsubscribing observer ' + (index + 1))
    if (index > -1) {
      this.observers.splice(index, 1)
    }
  }

  notifyAllObservers() {
    console.log(
      'Subject: Something changed i am going to notify my subscribers'
    )

    this.observers.forEach((observer, index) => {
      observer.notify(index + 1, 'shared message')
    })
  }
}



















/** Iterator pattern */
export class Iterator {
  counter: number = -1
  last: number
  collection: number[]

  constructor(collection: number[]) {
    this.collection = collection
    this.last = collection.length - 1
  }

  next() {
    this.counter += 1

    // makes sure we dont go over the max amount of available elements inside the collection
    const indexOfNextValue = Math.min(this.counter, this.last)

    // get the next value
    const nextValue = this.collection[indexOfNextValue]

    // has the last element been reached?
    const isDone = nextValue === this.collection[this.last]

    return {
      nextValue: nextValue,
      isDone: isDone
    }
  }
}
