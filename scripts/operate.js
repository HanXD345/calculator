const operate = (operation, a, b) => {
    if (operation === "+") {
        return Number(a) + Number(b)
    } else if (operation === "-") {
        return Number(a) - Number(b)
    } else if (operation === "*") {
        return Number(a) * Number(b)
    } else if (operation === "/") {
        return Number(a) / Number(b)
    }
}

export { operate };