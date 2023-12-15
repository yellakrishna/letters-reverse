

function reverseString(){
    let inputValue=document.getElementById("inputString").value;
    let reversed=inputValue.split('').reverse().join('')
    document.getElementById("result").textContent=reversed
}


// function reverseString(){
//     const inputValue=document.getElementById("inputString").value 
//     let reversed=" "

//     for (let i=inputValue.length-1;i>=0;i--){
//         reversed+=inputValue[i]

//     }
//     document.getElementById("result").textContent=reversed
// }