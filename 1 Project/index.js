const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( function (button) {
    button.addEventListener('click', (e) => {
        // if(e.target.id === "gray"){
        //     body.style.backgroundColor = "gray";
        // }else if(e.target.id === "yellow"){
        //     body.style.backgroundColor = "yellow";
        // }else if(e.target.id === "green"){
        //     body.style.backgroundColor = "green";
        // }else if(e.target.id === "lightblue"){
        //     body.style.backgroundColor = "lightblue";
        // }

        switch(e.target.id){
            case "gray":
                body.style.backgroundColor = "gray";
                break;
            case "yellow":
                body.style.backgroundColor = "yellow";
                break;
            case "green":
                body.style.backgroundColor = "green";
                break;
            case "lightblue":
                body.style.backgroundColor = "lightblue";
                break;
        }

    });

});
