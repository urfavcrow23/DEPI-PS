function sumOfPositive(arr) {
  return arr.filter((x) => x > 0).reduce((acc, current) => acc + current, 0);

  //   let initValue = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > 0) {
  //       initValue += arr[i];
  //     }
  //   }
  //   return initValue;
}

console.log(sumOfPositive([1, -3, 5, 9]));
