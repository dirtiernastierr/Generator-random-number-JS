function fill_displayRand(){
    
    const number_min = Number(document.getElementById("fr_text").value) //меньше
    const number_max = Number(document.getElementById("to_text").value) //больше
    const amount_number = Number(document.getElementById("amount_value").value)
     

    if (number_max <= number_min) {
        alert("the 'From' can't be greater than or equal to 'To' field" )
    } else {
    // скрипт генерації випадкових чисел
    const randNumbers = []
    for (let i = 0; i < amount_number;i++){
        let numbers = Math.floor(Math.random() * (number_max - number_min + 1) + number_min)
        randNumbers.push(numbers);
    }
    if (isNaN(number_min) || isNaN(number_max) || isNaN(amount_number)) {
        alert("Enter numeric values");
        return;
    }
    else if((number_max == "") || (number_min == "") || (amount_number == "")) {
        alert("Fill in all fields!");
        return false
    } 
    else if ((number_max < 0) || (number_min < 0) || (amount_number < 0)) {
        alert("Numbers must be greater than 0")
    }
    else {
        for (let i = 0; i < randNumbers.length - 1; i++) {
            if (randNumbers[i] == randNumbers[i + 1]) {
              fill_displayRand()
              break;
            }
            else {
                document.getElementById("display").value = randNumbers.join(' ');
            }
        }
    }
}
}
function clearValues(){
    document.getElementById("fr_text").value = "" 
    document.getElementById("to_text").value = "" 
    document.getElementById("amount_value").value = ""
    document.getElementById("display").value = ""
}
