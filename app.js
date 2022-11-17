
// Getting submit button
const submitButton = document.getElementById("submit");
let initialFloorCount;
let initialLiftCount;
let sourceFloorCount = null;
submitButton.addEventListener("click", function(){
    //hide form elements and show lift simulation div
    hideFormElements();
    let floorCount = document.getElementById("floor-count").value;
    let liftCount = document.getElementById("lift-count").value;

    initialFloorCount = floorCount;
    initialLiftCount = liftCount;

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
    let buttonUpId  = "button-up-"+floorCount;
    buttonUp.setAttribute("id", buttonUpId);

    buttonUp.addEventListener("click", ()=>{
        elevatorUp(floorCount);
    });
    buttonUp.innerText = "Up";
    buttonContainer.append(buttonUp);
   }

    //Button Down
    if(floorCount != 1){
      const buttonDown = document.createElement('button');
      buttonDown.classList.add('button-down');
      let buttonDownId  = "button-down-"+floorCount;
      buttonDown.setAttribute("id", buttonDownId);
      buttonDown.addEventListener("click", ()=>{
         elevatorDown(floorCount);
     });
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
    liftContainer.classList.add('lift-container');
    liftContainer.setAttribute("id", "lift-container-"+floorCount);
    while(liftCount > 0 && floorCount == 1){
      const singleLift = document.createElement('div');
      singleLift.classList.add('lift');
      


      // ------------------- Creating Door -------------
      const liftDoor = document.createElement('div');
     
      if(liftCount == initialLiftCount){
         singleLift.classList.add('first-lift');
         liftDoor.classList.add('lift-door');
         singleLift.setAttribute("id","moving-lift");
      }
      
      singleLift.append(liftDoor);
      // singleLift.style.marginLeft = 50 * floorCount +" px";
      liftContainer.append(singleLift);
      liftCount--;
  }
  return liftContainer;
 }

 function elevatorUp(floorCount){
    
   sourceFloorCount = floorCount;
    console.log("Up button clicked id: "+ floorCount);
    // Getting lift element
      const movingLift = document.getElementById("moving-lift"); 
      const destinationDiv = document.getElementById("lift-container-"+floorCount);
     
   var rect = destinationDiv.getBoundingClientRect();
   console.log(rect.top, rect.right, rect.bottom, rect.left);
   //  console.log(movingLift);

   //  ----Animation-----
   // create a timeline
let tl = gsap.timeline()
let pos = -(floorCount-1)*(10.3)*16+"px";
tl.to(movingLift, { y:pos, duration: 2 });

// Opening the door
let t2 = gsap.timeline()

    const door = document.getElementsByClassName('lift-door');
t2.to(door, { x:80 , duration: 2 });
t2.to(door, { x:0 , duration: 2 });
 }
 

 function elevatorDown(floorCount){
    console.log("Down button clicked id: "+ floorCount);

    
      elevatorUp(floorCount);
      

//     const movingLift = document.getElementById("moving-lift"); 
  
//     const destinationDiv = document.getElementById("lift-container-"+floorCount);

//     console.log("Source "+sourceFloorCount);
//     console.log("Destination : "+floorCount);

//    var rect = destinationDiv.getBoundingClientRect();
//    console.log(rect.top, rect.right, rect.bottom, rect.left);
//    //  console.log(movingLift);

//    //  ----Animation-----
//    // create a timeline
// let tl = gsap.timeline()
// let pos = (sourceFloorCount - floorCount)*10.3*8+"px";
// console.log("pos"+pos);
// tl.to(movingLift, { y:pos, duration: 2 });

 }