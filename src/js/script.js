var fieldFirstName = document.querySelector(".fieldFirstName");

var buttonSend = document.querySelector(".buttonSend");

var divContainer = document.querySelector(".container");

var formRecordPeople = document.querySelector(".recordPeople");

var ulAttribute = document.createElement("ul");

ulAttribute.className = "listPeoples";

divContainer.appendChild(ulAttribute);

buttonSend.addEventListener("click", function (event) {
    event.preventDefault();

    var liAttribute = document.createElement("li");

    liAttribute.textContent = fieldFirstName.value;
    
    ulAttribute.appendChild(liAttribute);
    
})

