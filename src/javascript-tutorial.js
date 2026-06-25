// var vs let
    // var has a function scope
    if(true){
        var x = 20
    }
    console.log(x)
    // let has block scope
    if(true){
        let y = 20
    }
    console.log(y) // throws VM142:4 Uncaught ReferenceError: y is not defined

// Arrow functions (cannot be used before initialization)
    const add = (a,b) => {
        return a + b
    }
    const ids = [1,2,3]
    ids.forEach((id) => {
        id++
        console.log(id)
    })

// Rest Operator (write flexible functions with unknown number of args) (collects remaining parameters in an array)
    const sum = (firstArg, ...otherArgs) => {
        console.log(firstArg)
        console.log(otherArgs) // returns an array of otherArgs [secondArg, thirdArg]
    }
    sum(1,2,3)

// Spread Operator (used to modify state of application in react) (spreads array elements or object properties)
    const fruits = ["apple", "mango"]
    const moreFruits = ["kiwi", "orange"]
    const allFruits = [...fruits,...moreFruits,"cherry"] // [apple, mango, kiwi, orange]


// React Notes

    // React State
        // state = manage component data (consists of two parts: getter and setter of the state)
        // when state value changes the UI gets updated or rerendered automatically 
    // React Props
        // props = passing data to components