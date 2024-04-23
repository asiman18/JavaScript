// task1.

function Əligülü(str) {
    return str == str.split('').reverse().join('');
}

let Mamaddd = "radar";

if (Əligülü(Mamaddd)) {
    console.log(Mamaddd + " Palidromdur");
} else{
    console.log(Mamaddd + " Palidrom deyildir");
}

// task2.

let String = "CodeAcademy"

if (String.length >= 10 && String.length <= 20) {
    console.log("TRUE");
} else{
    console.log("FALSE");
}

// task3.

let array = [25, 637, 86, 97, 103, 267];
let total = 0;

function myfunc (num) {
    for (let i = 0; i < num.length; i++) {
        total += num[i];
        
    }
    console.log(total);
    let average = total / num.length
    console.log(average);
}

myfunc(array)
