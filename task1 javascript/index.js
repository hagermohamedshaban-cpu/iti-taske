
let student = {
    name: "Hager",
    age: 22,
    gpa: 3.8
};

// 3. Boolean 
let isGraduated = false; 

// 4. Undefined 
let futureProject; 

// 5. Null 
let initialValue = null; 

// 6. Object 
let skills = ["HTML", "CSS", "JavaScript"];

console.log(student);
console.log(isGraduated);
console.log(skills);



let grade = 85; 


if (grade >= 90) {
    console.log("Excellent");
} else if (grade >= 80 && grade <= 89) {
    console.log("Good");
} else if (grade >= 70 && grade <= 79) {
    console.log("Average");
} else if (grade >= 60 && grade <= 69) {
    console.log("Pass");
} else {
    
    console.log("Fail");
}