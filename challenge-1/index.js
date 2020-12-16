const generateArr = () => {
  let arr = []
  let array = []
  for (let i = 17; i <= 53; i++) {
    arr.push(i)
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      if (arr[i] % 5 === 0) {
        array.push(`FooBar ${arr[i]}`)
      } else {
        array.push(`Foo ${arr[i]}`)
      }
    } else if (arr[i] % 5 === 0) {
      array.push(`Bar ${arr[i]}`)
    }
  }
  return array
}

console.log(generateArr())