const nameInput = document.querySelector('#nameInput');
const ageInput = document.querySelector('#ageInput');
const jobInput = document.querySelector('#jobInput');
const submitBtn = document.querySelector('#submitBtn');


submitBtn.addEventListener('click', function () {

    const nameVal = nameInput.value.trim();
    const ageVal = ageInput.value.trim();
    const jobVal = jobInput.value.trim();

    
    if (nameVal === "" || ageVal === "" || jobVal === "") {
        alert("Please fill all fields");
    } else {
        
        console.log("Name: " + nameVal);
        console.log("Age: " + ageVal);
        console.log("Job: " + jobVal);

        
        const ageNum = Number(ageVal); 
        if (ageNum < 18) {
            alert("You are under age");
        } else {
            alert("Registration Completed");
        }
    }
});