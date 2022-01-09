var str = "Semangat..."
const repeatString = (x) =>{
    console.log(x.repeat(5))
}

repeatString(str)

const repeatStar = (y) => {
    console.log("*".repeat(5))
    console.log("*".repeat(Math.pow(5,2)))
    console.log("*".repeat(9*5))
    console.log("*".repeat(13*5))
    console.log("*".repeat(19*5))
    console.log("*".repeat(13*5))
    console.log("*".repeat(9*5)) 
    console.log("*".repeat(Math.pow(5,2)))
    console.log("*".repeat(5))     
}

repeatStar()