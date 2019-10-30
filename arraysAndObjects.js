// const purePop = arr => {
//   let output = [...arr]
//   output.pop()
//   return output
// }

// let smallArray = [1,2,3,4,5]

// console.log(smallArray)

// let otherArray = purePop(smallArray)

// console.log(smallArray.concat(otherArray))

// smallArray.map(item => item * 2)


// console.log(smallArray)
// console.log(otherArray)

let interviewer = {
  id: 1,
  name: 'Sylvia Palmer',
  avatar: 'https://i.imgur.com/LpaY82x.png',
};

let newInterviewer = {...interviewer}
newInterviewer.id = 5




console.log(interviewer)
console.log(newInterviewer)