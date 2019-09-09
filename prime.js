function question(n) {
    const limit = Math.sqrt(n)

    const arr = []
    for (let i = 0; i <= n; i++) {
        arr.push(true)
    }
    arr[0] = false;
    arr[1] = false;

    for (let i = 2; i < limit; i++) {
        if (arr[i]) {
            for (let j = i * i; j < n; j += i) {
                arr[j] = false
            }
        }
    }
    let res = 0
    for (let i = 0; i < n; i++) {
        if (arr[i]) res++
    }
    console.log(res)
}

question(100000)