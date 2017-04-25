

var Donors = (function(){
console.log("IIFE LOADED")

let donorInfo =[];

    return {

        setDonor : function(firstName, lastName, pledge, pledgeOccurance){
            donorInfo.push({"firstName": firstName, "lastName": lastName, "pledge": pledge, "pledgeOccurance": pledgeOccurance});
            console.log("donorInfo", donorInfo);

        },

    }






})();
