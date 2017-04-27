


//Get form info elements
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let pledge = document.getElementById("pledge");
var pledgeType = document.getElementsByName("pledge-type");



//Donate button captures info
var donateBtn = document.getElementById("btn-donate");
donateBtn.addEventListener("click", function(event){
    var donorFirstName = firstName.value;
    var donorLastName = lastName.value;
    var donorPledge = pledge.value;
    var whichselected;
    var pledgeOccurance = "";
    for (var i=0; i<pledgeType.length; i++){
        if(pledgeType[i].checked){
            whichselected = pledgeType[i].value;
            break;
        }
    };
    if(whichselected == 1){
        pledgeOccurance = "One Time";
    } else if (whichselected ==0){
        pledgeOccurance = "Per Lap";
    };
    Donors.setDonor(donorFirstName, donorLastName, donorPledge, pledgeOccurance);
    document.getElementById("print-div").innerHTML = Donors.getDonor();

});


//Clear Button clears input field

var clearBtn = document.getElementById("btn-clear");
clearBtn.addEventListener("click", function(event){

    firstName.value = "";
    lastName.value ="";
    pledge.value="";
    pledgeType.forEach(function(element){
        element.checked = false;
    })

});
