const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if(height === '' || height < 0 || isNaN(height)){
        alert('Please provide a valid height');
        return;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        alert('Please provide a valid weight');
        return;
    }else{
       const bmi = (weight/ ((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`; 
        //Underweight : Less than 18.5
        //Healthy Weight : 18.5 to less than 25
        //Overweight : 25 to less than 30
        if(bmi < 18.5){
            result.innerHTML += `<span> :Underweight</span>`
        }else if(bmi >= 18.5 && bmi < 25){
            result.innerHTML += `<span> :Healthy Weight</span>`
        }else if(bmi >= 25 && bmi < 30){
            result.innerHTML += `<span> :Overweight</span>`
        }else{
            result.innerHTML += `<span> :Obese</span>`
        }
    }
});