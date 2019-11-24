export function inc() {
    return {type: 'INC'}
}

export function dec() {
    return {type: 'DEC'}
}

export function rnd(payload) {
    return {type: 'RND', payload}
}