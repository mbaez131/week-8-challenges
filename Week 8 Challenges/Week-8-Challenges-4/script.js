var tomHeight = 9;
var jerryHeight = 10;
var tomMass = 8;
var jerryMass = 45;
var jerryBmi s= jerryMass/Math.pow(jerryHeight, 2);
var tomBmi = tomMass/Math.pow(jerryHeight, 2);



function bmi (mass, height){
    console.log(mass/Math.pow(height, 2))
}

//Tom's BMI is 0.140625
//Jerry's BMI is 0.0049383

// console.log("Is Tom's BMI higher than Jerry's?" + " " + Boolean(0.140625>0.0049383))

function bmi2 (tomHeight, tomMass){
    var tomBmi = console.log(tomMass/Math.pow(tomHeight, 2))
    return tomBmi 
}

function bmi3 (jerryHeight, jerryMass){
    var jerryBmi = console.log(jerryMass/Math.pow(jerryHeight, 2))
    return jerryBmi 
}

console.log("Is Tom's BMI higher than Jerry's?" + " " + Boolean(tomBmi < jerryBmi))