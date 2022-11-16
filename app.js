
// Getting submit button
const submitButton = document.getElementById("submit");
let initialFloorCount;
submitButton.addEventListener("click", function(){
    //hide form elements and show lift simulation div
    hideFormElements();
    let floorCount = document.getElementById("floor-count").value;
    let liftCount = document.getElementById("lift-count").value;

    initialFloorCount = floorCount;

    console.log("Submit button clicked");
    console.log("floor count : " + floorCount);
    console.log("lift count : " + liftCount);
    addFloorContainer(floorCount, liftCount);

});

function hideFormElements(){
    const formContainer = document.getElementById("container-form");
    formContainer.style.display = "none";
    const lsContainer = document.getElementById('ls-container');
    lsContainer.style.display = "block";
 }

 function addFloorContainer(floorCount,liftCount){

    while(floorCount > 0){
        //create floor container div
        const floorContainer = createFloorContainer(floorCount, liftCount);
        floorCount--;
        addInLSContainer(floorContainer);
            
        
    }
    
 }

 function createFloorContainer(floorCount,liftCount){

    //create floor container div
    let floorContainer = document.createElement('div');
    floorContainer.classList.add("floor-container");

    // create button container
    const buttonContainer = createButtonContainer(floorCount, liftCount);
    const  elevatorContainer = createElevatorContainer(floorCount, liftCount);
    
    
    const textContainer = createTextContainer(floorCount);
    

    
    floorContainer.append(buttonContainer);
    floorContainer.append(elevatorContainer)
   //  floorContainer.append(hrContainer);
    floorContainer.append(textContainer);

    return floorContainer;
    
    
 }

 function addInLSContainer(floorContainer){
    // adding to main div
    const lsContainer = document.getElementById('ls-container');
    lsContainer.append(floorContainer);
 }


 function createButtonContainer(floorCount, liftCount){
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    // Button up
   if(floorCount != initialFloorCount){
      const buttonUp = document.createElement('button');
    buttonUp.classList.add('button-up');
    buttonUp.innerText = "Up";
    buttonContainer.append(buttonUp);
   }

    //Button Down
    if(floorCount != 1){
      const buttonDown = document.createElement('button');
      buttonDown.classList.add('button-down');
      buttonDown.innerText = "Down";
      buttonContainer.append(buttonDown);
    }

    return buttonContainer;
 }

 function createElevatorContainer(floorCount, liftCount){
    const elevatorContainer = document.createElement('div');
    elevatorContainer.classList.add('elevator-container');

      // elevator container contains lift container + hr container

      
         //call lift container container only lifts
      const liftContainer = createLiftContainer(floorCount, liftCount);
    

      // hr container - always
      const hrContainer = createHRContainer();

    elevatorContainer.append(liftContainer);
    elevatorContainer.append(hrContainer);
   return elevatorContainer;

 }

 function createHRContainer(){
    const hrContainer = document.createElement('div');
    hrContainer.classList.add('hr-container');

    const hr = document.createElement('hr');
    hrContainer.append(hr);

    return hrContainer;
 }

 function createTextContainer(floorNumber){
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const textElement = document.createElement('h3');
    textElement.innerText = "Floor " + floorNumber;

    textContainer.append(textElement);
    return textContainer;
 }

 function createLiftContainer(floorCount,liftCount){

    // Add elevators in elevator container based on lift count
    const liftContainer = document.createElement('div');
    liftContainer.classList.add('lift-container')
    while(liftCount > 0 && floorCount == 1){
      const singleLift = document.createElement('div');
      singleLift.classList.add('lift');
      // singleLift.style.marginLeft = 50 * floorCount +" px";
      liftContainer.append(singleLift);
      liftCount--;
  }
  return liftContainer;
 }

 