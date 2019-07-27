/**
 * get name partipant
 */
var fieldFirstName = document.querySelector(".fieldFirstName");

var buttonSend = document.querySelector(".buttonSend");
var buttonList = document.querySelector(".buttonList");

var divContainer = document.querySelector(".container");

var formRecordPeople = document.querySelector(".recordPeople");

/**List participants */
var ulAttribute = document.createElement("ul");

ulAttribute.className = "listPeoples";

divContainer.appendChild(ulAttribute);

/**List Pilot and Co-Pilot */
var ulAttributePilotCoPilot = document.createElement("ul");

ulAttributePilotCoPilot.className = "listPilotCoPilot";

divContainer.appendChild(ulAttributePilotCoPilot);

/**Arrays participants and Pilot/Co-Pilot */
var participants = ['maria', 'pedro', 'jose'];
var pilotAndCopilot = [];

buttonSend.addEventListener("click", function (event) {
    event.preventDefault();

    var liAttribute = document.createElement("li");

    partipants.push(fieldFirstName.value);
    liAttribute.textContent = fieldFirstName.value;

    ulAttribute.appendChild(liAttribute);

})

buttonList.addEventListener("click", function (event) {
    event.preventDefault();
   
    setTimeout(()=>{
        for(var i = 0; i < participants.length; participants++){

            setTimeout(() => {
                pilotAndCopilot.push(participants[i]);
            }, 1000);
            console.log(pilotAndCopilot);

        }    
    },500)
        
})




