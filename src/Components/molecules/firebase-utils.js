// Firebase

export function transformToArray(data) {
    console.log(data)
    const toReturn = [];
    for (let key in data) {
      const temp = {
        ...data[key],
        id: key,
      };
      toReturn.push(temp);
    }
    return toReturn;

}