import { dataDestinations } from "./data.js";
// query data destination
const handleQueryDataDestination = () => {
    const listDestination = document.querySelector(".list-destination");
    dataDestinations.forEach((item, index) => {
        const idText = item.destinationName.toLowerCase();
        const listDestinationItem = document.createElement("li");
        listDestinationItem.className = "list-destination__item";
        const destinationItem = document.createElement("article");
        destinationItem.className = "destination-item";
        destinationItem.id = idText.replace(" ", "-");
        destinationItem.style.backgroundImage = `url("../../${item.imgUrl}")`;
        const destinationItemText = document.createElement("div");
        destinationItemText.className = "destination-item__text";
        const destinationItemTextName = document.createElement("h4");
        destinationItemTextName.className = "title-h4 destination-item__text--name";
        destinationItemTextName.innerText = item.destinationName;
        const destinationItemTextLocation = document.createElement("div");
        destinationItemTextLocation.className = "destination-item__text--location";
        const destinationItemTextLocationIcon = document.createElement("img");
        destinationItemTextLocationIcon.className = "destination-item__text--location--icon";
        destinationItemTextLocationIcon.src = "./img/icon/location.svg";
        const destinationItemTextLocationText = document.createElement("span");
        destinationItemTextLocationText.className = "sub-title destination-item__text--location--text";
        destinationItemTextLocationText.innerText = item.destinationLocation;
        destinationItemTextLocation.appendChild(destinationItemTextLocationIcon);
        destinationItemTextLocation.appendChild(destinationItemTextLocationText);
        destinationItemText.appendChild(destinationItemTextName);
        destinationItemText.appendChild(destinationItemTextLocation);
        destinationItem.appendChild(destinationItemText);
        listDestinationItem.appendChild(destinationItem);
        listDestination.appendChild(listDestinationItem);
    });
};
handleQueryDataDestination();
