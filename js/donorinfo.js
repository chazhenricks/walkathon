

var Donors = (function(){
console.log("IIFE LOADED")

let donorInfo =[];

    return {

        setDonor : function(firstName, lastName, pledge, pledgeOccurance){
            donorInfo.push({"firstName": firstName, "lastName": lastName, "pledge": pledge, "pledgeOccurance": pledgeOccurance});
            var parsedInfo = "";
            for (item in donorInfo){
                parsedInfo = `<tr>`;
                parsedInfo += `<td>${donorInfo[i].firstName}</td>`;
                parsedInfo += `<td>${donorInfo[i].lastName}</td>`;
                parsedInfo += `<td>${donorInfo[i].pledge}</td>`;
                parsedInfo += `<td>${donorInfo[i].pledgeOccurance}</td>;`;
                parsedInfo += `</tr>`;


            }

         },
        getDonor : function(){

           return parsedInfo;

            }
        }






})();
