// Random Color Generator
const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

// document.querySelector('#start').addEventListener('click', () => {
   
//     setInterval(() => {
//         const color = randomColor();
//         document.body.style.backgroundColor = color;
//         console.log(color, new Date());
        
//     }, 1000);
// });
let intervalId;
const startColorChanging = () => {
    if(!intervalId){
        intervalId = setInterval(() => {
            const color = randomColor();
            document.body.style.backgroundColor = color;
            console.log(color, new Date());
    }, 1000);
    }
}

const stopColorChanging = () => {
    clearInterval(intervalId);
    console.log("the interval has been stopped");
    intervalId = null;
    
}

document.querySelector('#start').addEventListener('click', startColorChanging);
document.querySelector('#stop').addEventListener('click', stopColorChanging);
