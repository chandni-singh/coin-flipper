//Helper function to choose a side of the coin

function choice(arr) {
    let RandIdx = Math.floor(Math.random() * arr.length);
    return arr[RandIdx];
}

export { choice };