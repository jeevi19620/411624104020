console.log("jeevi")
const a = 20;
console.log(a)
const b = "string"
console.log(b)
const arr = [1,2.1,"something", false]
console.log(arr)
arr[1] =3.1
console.log(arr[1])
arr.push(4)
console.log(arr)
arr.pop()
console.log(arr)
function example(){
    console.log("I am writing something")
}
const first = document.getElementById("ptag")
first.innerHTML="paragraph"
const input = document.getElementById("input")
const output = document.getElementById("inputFlied")
input.addEventListener("input",()=>{
    output.textContent = input.value
})
const ptag = document.createElement("h1")
ptag.textContent = "some text"
document.body.appendChild(ptag)
ptag.remove()