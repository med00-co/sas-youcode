// 

const fruits = ["apple", "banana", "orange"]
for (const fruit of fruits){
    console.log(fruit)
}

// for..in   on array
for (const index in fruits){
    console.log(index)
}

// for..in on object
const students = {
   name: "Mohamed" ,
   age : 19 , 
   grade : 20
}

for (const key in students) {
    console.log(key , students[key])
}




