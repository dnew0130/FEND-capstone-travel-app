import { trips } from "../index.js";
import { dayCalc } from "./daysUntilCalc.js";
//creates an object
const createObject = (destination, hometown, departureDate, returnDate, cloudData, upperTemp, lowerTemp, photoLink) => {
    let object = {
        travelTo: destination,
        travelFrom: hometown,
        departing: departureDate,
        returning: returnDate,
        cloudy: cloudData,
        tempHigh: upperTemp,
        tempLow: lowerTemp,
        photo: photoLink};
    trips.push(object); //TODO: Update renderCard sourcing the trips array
    return object;
}

//renders object in the DOM
const renderCard = (index) => {
    let divCardObject = trips[index];
  
    //creates new card attached to display div
    let displayContainer = document.getElementById('travel-list-display');
    let divCard = document.createElement('div');
    divCard.setAttribute('id', `${divCardObject.travelTo}-${divCardObject.travelFrom}-trip-card`);
    divCard.setAttribute('class', 'travel-card');
    displayContainer.appendChild(divCard);
  
    //set divs
    let photoDiv = document.createElement('div');
    photoDiv.setAttribute('class', 'photo-div');
    divCard.appendChild(photoDiv);

    let tripNameLabel = document.createElement('label');
    tripNameLabel.setAttribute('class', 'trip-name-label');
    divCard.appendChild(tripNameLabel);

    let tripNameDiv = document.createElement('div');
    tripNameDiv.setAttribute('class', 'trip-name-div');
    divCard.appendChild(tripNameDiv);

    let daysUntilLabel = document.createElement('label');
    daysUntilLabel.setAttribute('class', 'days-until-label');
    divCard.appendChild(daysUntilLabel);

    let daysUntilDiv = document.createElement('div');
    daysUntilDiv.setAttribute('class', 'days-until-div');
    divCard.appendChild(daysUntilDiv);

    let weatherReportDiv = document.createElement('div');
    weatherReportDiv.setAttribute('class', 'weather-report-div');
    divCard.appendChild(weatherReportDiv);
    //set inner HTML to display fetched info
    if (trips.length >= 1) {
      photoDiv.innerHTML = `<img src='${divCardObject.photo}'>`;
  
      tripNameLabel.innerHTML = 'My trip to... ';
      tripNameDiv.innerHTML = `${divCardObject.travelTo}`;
  
      daysUntilLabel.innerHTML = 'Departing in... ';
      daysUntilDiv.innerHTML = `${dayCalc(divCardObject.departing)}`;
  
      weatherReportDiv.innerHTML = `High - ${divCardObject.tempHigh}°C / Low - ${divCardObject.tempLow}°C`;
      weatherReportDiv.innerHTML += `<br>Mostly ${divCardObject.cloudy} during your stay!`;
    } else {
      photoDiv.innerHTML = "No trips listed... Add a new one!"
    }
};
const renderCards = () => {
    let displayContainer = document.getElementById('travel-list-display');
    displayContainer.innerHTML = "";
  
    trips.map((trip, index) => {
      renderCard(index);
    });
  };

export { createObject };
export { renderCard };
export { renderCards };