function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((element, item) => element === arr2[item]);
}

function getUsersNamesInAgeRange(users, gender) {
    return users.filter(user => user.gender === gender).map(obgect => obgect.age).reduce((acc, item, index, arr) => acc + item / arr.length, 0);
}