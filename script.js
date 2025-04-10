let fullName = "Muhammad Umair"

document.getElementById("alertname").onclick = function() {
    alert(fullName)
    console.log(fullName)

    let statement="alert(fullName)"
    document.getElementById("statement").innerHTML=statement

    document.getElementById("output").innerHTML=""

    
}
document.getElementById("alertnumber").onclick = function() {
    let number=123
    alert(number)
    console.log(number)

    let statement="alert(number) <br>console.log(number)"
    document.getElementById("statement").innerHTML=statement

    document.getElementById("output").innerHTML="Number shown in alert and console"

    
}
document.getElementById("variables").onclick = function() {
    
    let statement="all the variables listed"
    document.getElementById("statement").innerHTML=""

    document.getElementById("output").innerHTML=statement

    
}
document.getElementById("camelcase").onclick = function() {
    
    let statement="this is an example of camel case"
    document.getElementById("statement").innerHTML=statement

    document.getElementById("output").innerHTML="camelCase"

    
}
document.getElementById("sum").onclick = function() {
    
    let x=20
    let y=10
    let sum= x+y
    document.getElementById("statement").innerHTML="let x=20 <br> let y=10 <br> let sum=x+y"

    document.getElementById("output").innerHTML=x+y

    
}
document.getElementById("subtract").onclick = function() {
    
    let x=20
    let y=10
    let subtract= x-y
    document.getElementById("statement").innerHTML="let x=20 <br> let y=10 <br> let subtract=x-y"

    document.getElementById("output").innerHTML=x-y

    
}
document.getElementById("multiply").onclick = function() {
    
    let x=20
    let y=10
    let subtract= x*y
    document.getElementById("statement").innerHTML="let x=20 <br> let y=10 <br> let subtract=x*y"

    document.getElementById("output").innerHTML=x*y

    
}
document.getElementById("Divide").onclick = function() {
    
    let x=20
    let y=10
    let subtract= x/y
    document.getElementById("statement").innerHTML="let x=20 <br> let y=10 <br> let subtract=x/y"

    document.getElementById("output").innerHTML=x/y

    
}
document.getElementById("Calculate").onclick = function() {
    
    let x=20
    let y=10
    let z=30
    let calculate= x+y+z+(x*y)-(x/y)
    document.getElementById("statement").innerHTML="let x=20 <br> let y=10 <br> let calculate= x+y+z+(x*Y)-(x/y)"

    document.getElementById("output").innerHTML=x+y+z+(x*y)-(x/y)

    
}