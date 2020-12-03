// Rover Object Goes Here
// ======================
let rover = {
  direction: "N"
}
console.log(rover.direction);

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
    default:
      console.log("can't turn");
  }
  console.log(rover.direction);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
    default:
      console.log("can't turn");
  }
  console.log(rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called");
  
}
