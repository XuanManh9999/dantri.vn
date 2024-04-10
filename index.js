const hendleFindMin = (arr) => {
    let min = arr[0];
    if (arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]
            }
        }
        return min;

    }else {
        console.log("Arr is not invalit");
        return;
    }
}

console.log(hendleFindMin([5, 1, 2, 3, 4]));