var fieldFirstName = document.querySelector(".fieldFirstName");

var buttonSend = document.querySelector(".buttonSend");

var buttonDisplayPeoples = document.querySelector(".buttonDisplayPeoples");

var divContainer = document.querySelector(".container");

var formRecordPeople = document.querySelector(".recordPeople");

var peoples = [];

var ulAttribute = document.createElement("ul");



buttonSend.addEventListener("click", function (event) {
    event.preventDefault();
    peoples.push(fieldFirstName.value);
    console.log(peoples);
})

buttonDisplayPeoples.addEventListener("click", function (event) {
    // event.preventDefault();

    ulAttribute.className = "listPeoples";
    divContainer.appendChild(ulAttribute);
    var liAttribute = document.createElement("li");
    divContainer.appendChild(ulAttribute);
    
    peoples.forEach((people) => {
        liAttribute.textContent = people;
        ulAttribute.appendChild(liAttribute);
    })

})

