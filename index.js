const bruteForceTwoSum = (array, sum) => {
    let result = []
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === sum)
                result.push([array[i], array[j]])
        }
    }
    return result
}

const binarySearch = (array, num) => {
    let min = 0
    let max = array.length - 1
    let half
    while (true) {
        half = Math.floor((min + max) / 2)
        if (array[half] === num)
            return num
        else if (array[half] < num) {
            if (min === half)
                break
            min = half
        }
        else {
            if (max === half)
                break
            max = half
        }
    }
    return null
}

const binarySearchTwoSum = (array, sum) => {
    array = array.sort((x, y) => {
        if(x < y)
            return -1
        if(x > y)
            return 1
        return 0
    })
    let result = []
    while (array.length > 1) {
        let num = array.splice(0, 1)[0]
        if (binarySearch(array, sum - num)) {
            result.push([num, sum - num])
            array.splice(array.findIndex((x) => x === (sum - num)), 1)
        }
    }
    return result
}

const binaryMatch = (array, sum) => {
    while (array.length > 1) {
        let num = array.splice(0, 1)[0]
        if (binarySearch(array, sum - num)) 
            return true
    }
    return false
}

const hashTwoSum = (array, sum) => {
    let hash = {}
    let result = []
    array.forEach(num => {
        if(hash[sum - num]) {
            result.push([sum - num, num])
            delete hash[sum - num]
        } else {
            hash[num] = true
        }
    })
    return result
}