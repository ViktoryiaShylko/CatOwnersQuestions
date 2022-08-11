class catForm {
    constructor(petName, age, ownerName, ownerEmail, phoneNumber, breed, foodPreferences, sex, comments) {
        this.petName = petName;
        this.age = age;
        this.ownerName = ownerName;
        this.ownerEmail = ownerEmail;
        this.phoneNumber = phoneNumber;
        this.breed = breed;
        this.foodPreferences = foodPreferences;
        this.sex = sex;
        this.comments = comments;
    }
}


function createObj() {
    let petName = document.querySelector('#petName').value;
    let age = document.querySelector('#age').value;
    let ownerName = document.querySelector('#ownerName').value;
    let ownerEmail = document.querySelector('#ownerEmail').value;
    let phoneNumber = document.querySelector('#phoneNumber').value;
    let breed = document.querySelector('#breed').value;
    let foodPreferences = getFoodPreferences();
    let sex = document.querySelector('input[name="sex"]:checked').value;
    let comments = document.querySelector('#comments').value;
    let catFormCompleted = new catForm(petName, age, ownerName, ownerEmail, phoneNumber, breed, foodPreferences, sex, comments);
    
    console.log( catFormCompleted);
}

function getFoodPreferences() {
    let food = document.querySelectorAll('.food');
    let checkedFood = [];
    for(let i = 0; i < food.length; i++) {
        if (food[i].checked) {
            checkedFood.push(food[i].value);
        }
    }
    return checkedFood;
}

let btn = document.querySelector('#btnSubmit');
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    createObj();
})