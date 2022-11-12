
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(){
    let floorNumber = document.getElementById('floors').value;

    let liftNumber = document.getElementById('lifts').value;

    console.log("submit-button clicked!");
  
    while(floorNumber > 0){
        const floorContainer = document.createElement('div');

    floorContainer.classList.add('container-floor');

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const buttonUp = document.createElement('button');
    buttonUp.classList.add('button-up');
    buttonUp.innerText = "Up";

    const buttonDown = document.createElement('button');
    buttonDown.classList.add('button-down');
    buttonDown.innerText = "Down";

    buttonContainer.append(buttonUp);
    buttonContainer.append(buttonDown);

    floorContainer.append(buttonContainer);

    
    

   

    if(floorNumber == 1){
        // Add lifts to ground floor...
       
        

            

            for(let i = 1; i <= liftNumber; i++){
                let elevator = document.createElement('div');
            elevator.classList.add('elevator-2');

                elevator.style.marginLeft = i * 50 + "px";
                floorContainer.append(elevator);
            }
            
            
        

    }
   

    const floor = document.createElement('hr');
    const floorText = document.createElement('h3');

    floorText.innerText = "Floor " + floorNumber;
    floorContainer.append(floor);
    floorContainer.append(floorText);

   

    // Root element

    let mainContainer = document.querySelector('main');

    mainContainer.append(floorContainer);

    // console.log(mainContainer);
    
    floorNumber--;
}

});
