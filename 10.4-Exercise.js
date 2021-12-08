function filterOutOdds(){
    let nums = Array.from(arguments);
    return nums.filter(num => num % 2 === 0);
}

function findMin(...nums){
    let min = nums[0];
    for(let num of nums){
        if(num < min){
            min = num;
        }
    }
    return min;
}

function mergeObjects(obj1, obj2){
    let newObj = {...obj1, ...obj2}
    return newObj;
}

function doubleAndReturnArgs(arr, ...nums){
    let newArr = arr.concat(nums);
    let doubled = newArr.map(x => x * 2);
    return doubled;
}

function removeRandom(item){
    let random = Math.floor(Math.random() * item.length);
    item.splice(random, 1);
    return item;
}

function extend(arr1, arr2){
    let newArr = arr1.concat(arr2);
    return  newArr;
}

function addKeyVal(obj, key, val){
    let newObj = {...obj, [key]: val};
    return newObj;
}

function removeKey(obj, key){
    delete obj[key];
    return obj;
}

function combine(obj1, obj2){
    let newObj = {...obj1, ...obj2};
    return newObj;
}

function update(obj, key, val){
    let newObj = {...obj, [key]: val};
    return newObj;
}
