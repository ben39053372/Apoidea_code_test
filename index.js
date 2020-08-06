let array = [1, 2, "test", "test"]
let array2 = [1, '11', 'b', 0, 15]
let object = { year: 2000 }
let object2 = { name: "tester", age: 25 }
let object3 = {}
let object4 = 'test'
let arrayForCount1 = [false, true, false, false, true, false, false]
let arrayForCount2 = [false, false, 'true', false]
let arrayForCount3 = []

let correct1 = "Welcome to Apoidea"
let input1 = "Welsome to Apoidea"

let correct2 = "broken key is found"
let input2 = "krokea key is fouid"

let vote1 = ["A", "A", "B"]
let vote2 = ["A", "B", "B", "A", "C", "C"]


const filterArray = (array) => {
  return array.filter((value) => {
    return Number.isInteger(value) && value >= 0
  })
}

const toArray = (object) => {
  if (object instanceof Object) {
    let array = []
    Object.keys(object).forEach(key => {
      array.push([key, object[key]])
    })
    return array
  } else {
    return false
  }
}

const countTrue = (arrayForCount) => {
  return arrayForCount.filter(value => value === true).length
}

const findBroken = (correct, input) => {
  let result = []
  let correct_length = correct.length
  let input_length = correct.length
  let max_lenght = correct_length >= input_length ? correct_length : input_length
  for(let i=0; i < max_lenght; i++){
    if(correct[i] !== input[i]){
      result.push(correct[i])
    }
  }
  return [...new Set(result)]
}

const majorityVote = (Vote) => {
  let count = {}
  Vote.forEach(value => {
    console.log(count[value])
    count[value] = count[value] === undefined ? 1 : count[value] + 1
  })
  if(Math.max(Object.values(count)) > (Vote.length/2) ){
    return Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
  }else return null
  
}

console.log(filterArray(array))

console.log(toArray(object3))

console.log(countTrue(arrayForCount2))

console.log(findBroken(correct2, input2))

console.log(majorityVote(vote2))
