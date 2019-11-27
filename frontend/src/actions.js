export function inc() {
    return {type: 'INC'}
}

export function dec() {
    return {type: 'DEC'}
}

export function rnd(payload) {
    let randomValue = Math.floor(Math.random() * 10)
    return {
        type: 'RND', 
        payload: randomValue
    }
}