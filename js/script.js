const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair");


const createVehicle = function (type, numWheels, color) {
  const vehicle = {
    type: type,
    numWheels: numWheels,
    color: color
  };
  return vehicle;
};

const car = createVehicle("car", 4, "blue");
const bike = createVehicle("bike", 2, "red");
const skateboard = createVehicle("skateboard", 4, "green");

const myVehicles = ["car", "bike", "skateboard"];
for (let vehicle of myVehicles) {
  for (let key in vehicle) {
    console.log(key, vehicle[key]);
  }
}

bike.needsRepair = true;
skateboard.needsRepair = true;

button.addEventListener("click", function () {
  repairList.innerHTML = "", //clear the list

  //Grab our repair list
  const vehicleRepairList = myVehicles.filter(function (vehicle) {
    return vehicle.needsRepair === true;
  });

  for (let vehicle of vehicleRepairList) {
  let li = document.createElement("li");
  li.innerHTML = `My <span class="vehicle">${vehilce.type}</span> needs some love.`;
  repairList.append(li); 
  }
});