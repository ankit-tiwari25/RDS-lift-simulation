
 let submitButton = document.getElementById("submit");

 submitButton.addEventListener("click", function() {

    // Hide Input Fields
    hideInputFields();

    // Display output

    let floorCount = document.getElementById('floors').value;
    let liftCount = document.getElementById('lifts').value;

    displayOutput(floorCount, liftCount);
    
    console.log("submit clicked");
    console.log(floorCount);
    console.log(liftCount);
 });

 function hideInputFields(){
    let formContainer = document.getElementById("container-form");
    formContainer.style.display = "none";
 }

 function displayOutput(floorNumber,liftNumber){

    // display top-floor
    let initialFloorCount = floorNumber;
   

   
    while(floorNumber > 0){
    
    const floorContainer = document.createElement('div');
    floorContainer.classList.add('container-floor');

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    
    if(floorNumber != initialFloorCount){
    const buttonUp = document.createElement('button');
    buttonUp.classList.add('button-up');
    buttonUp.innerText = "Up";
    buttonContainer.append(buttonUp);
      }

      if(floorNumber != 1){
    const buttonDown = document.createElement('button');
    buttonDown.classList.add('button-down');
    buttonDown.innerText = "Down";
    buttonContainer.append(buttonDown);
      }

    
    

    floorContainer.append(buttonContainer); 

    if(floorNumber == 1){
        // Add lifts to ground floor...

        const  elevatorContainer = document.createElement('div');
        elevatorContainer.classList.add('elevator-container');


            for(let i = 1; i <= liftNumber; i++){
                let elevator = document.createElement('div');
            elevator.classList.add('elevator-2');

            if( i == 1){
                elevator.style.marginLeft = "100px";
            }
                elevatorContainer.append(elevator);
            }
        floorContainer.append(elevatorContainer)
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

 }
