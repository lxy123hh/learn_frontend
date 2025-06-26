const Linklist2 = {
    val:3,
    next: null
}

const Linklist1 = {
    val:2,
    next: Linklist2
}


const Linklist = {
    val:1,
    next: Linklist1
}
console.log(Linklist.next.next)