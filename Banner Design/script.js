var bannerCost = {
    "24x36": {
        "vinyl": 50,
        "mesh": 70,
        "fabric": 90
    },
    "36x48": {
        "vinyl": 75,
        "mesh": 100,
        "fabric": 120
    },
    "48x72": {
        "vinyl": 100,
        "mesh": 150,
        "fabric": 200
    }
};
var creativityCost = {
    "basic": 20,
    "medium": 50,
    "premium": 100
};
var totalCost = 0;

var total_cost = 0;

function submitForm() {
    try {
        //  // Fetch the required DOM values   

        const dimension = document.getElementById("dimension").value;

        const vinylType = document.getElementById("vinyl").checked;
        const meshType = document.getElementById("mesh").checked
        const fabricType = document.getElementById("fabric").checked;

        const count = document.getElementById("count").value;

        const basic = document.getElementById("basic").checked;
        const medium = document.getElementById("medium").checked
        const premium = document.getElementById("premium").checked;

        // const reset = document.querySelector("reset");
        // console.log("asdf");
        // console.log("asdf",reset.checked)


        if(vinylType && basic){
            console.log("sdf");
           total_cost += calculateCost(dimension, "vinyl", count, "basic");
            document.getElementById("cost").innerHTML = `The entire cost of your requirements is ${total_cost} dollars`;
        }
        else if(vinylType && medium){
             total_cost +=   calculateCost(dimension, "vinyl", count, "medium");
            document.getElementById("cost").innerHTML = `The entire cost of your requirements is ${total_cost} dollars`;
        }
        else if(vinylType && premium){
             total_cost =   calculateCost(dimension, "vinyl", count, "premium");
            document.getElementById("cost").innerHTML = `The entire cost of your requirements is ${total_cost} dollars`;
        }
        else if(meshType && basic){
             total_cost =   calculateCost(dimension, "mesh", count, "basic");
            document.getElementById("cost").innerHTML = `The entire cost of your requirements is ${total_cost} dollars`;
        }
        else if(meshType && medium){
             total_cost =   calculateCost(dimension, "mesh", count, "basic");
            document.getElementById("cost").innerHTML = `The entire cost of your requirements is ${total_cost} dollars`;
        }
        else if(meshType && premium){
             total_cost =   calculateCost(dimension, "mesh", count, "basic");
            document.getElementById("cost").innerHTML = `The entire cost of your requirements is ${total_cost} dollars`;
        }
        else if(fabricType && basic){
             total_cost =   calculateCost(dimension, "fabric", count, "basic");
            document.getElementById("cost").innerHTML = `The entire cost of your requirements is ${total_cost} dollars`;
        }
        else if(fabricType && medium){
             total_cost =   calculateCost(dimension, "fabric", count, "medium");
            document.getElementById("cost").innerHTML = `The entire cost of your requirements is ${total_cost} dollars`;
        }
        else if(fabricType && premium){
             total_cost =   calculateCost(dimension, "fabric", count, "premium");
            document.getElementById("cost").innerHTML = `The entire cost of your requirements is ${total_cost} dollars`;
        }


    }
    catch (err) {
        document.getElementById("cost").innerHTML = "Function submitForm: " + err;
    }
    return false;
}

function calculateCost(dimension, banner_type, count, creativity_type) {
    try {
        // 
        totalCost = (bannerCost[dimension][banner_type]*count)+creativityCost[creativity_type];
     
        return totalCost;
        
    }
    catch (err) {
        document.getElementById("cost").innerHTML = "Function calculateCost: " + err;
    }

}

function resetForm() {
    try {

        document.getElementById("cost").innerHTML = `Previous estimations have been successfully reset`;
    }
    catch (err) {
        document.getElementById("cost").innerHTML = "Function resetForm: " + err;
    }
}