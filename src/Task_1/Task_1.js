/**
 * It is intended not to separate this files into simple-modular components
 * as the entire code shall be copy-pasted to dev-tools to see the output.
 * Else, the Train class along with its properties can be moved to separate file.
 */


/**
 * Train class with members and properties
 */
class Train {
    constructor({
        id,
        passengers,
        journeyRoutes,
        startingStation
    }) {
        this.id = id,
            this.passengers = passengers,
            this.journeyRoutes = journeyRoutes,
            this.currentStation = startingStation,
            this.isInReverseJourney = false
    }
}

// Set the direction of the train it the route
Train.prototype.setTrainPath = function () {
    const currentStationIdx = this.journeyRoutes.indexOf(this.currentStation);

    if (currentStationIdx === (this.journeyRoutes.length - 1)) this.isInReverseJourney = true;
    if (currentStationIdx === 0) this.isInReverseJourney = false;
}

// Get the next station of the Train journey
Train.prototype.getNextStation = function () {
    const currentStationIdx = this.journeyRoutes.indexOf(this.currentStation);

    if (this.isInReverseJourney) return this.journeyRoutes[currentStationIdx - 1];

    return this.journeyRoutes[currentStationIdx + 1];
}

// Move train to next station
// Change showLogs to true to trace the movement of the train
Train.prototype.goNextStation = function (showLogs = false) {
    this.setTrainPath();

    this.currentStation = this.getNextStation();

    if (showLogs) console.log(`Train ${this.id} moved to ${this.currentStation}`)
}


/**
 * Inititate the train journeys with defined number of station movements
 * @param {*} trainInfo - Array of train info
 * @param {*} counter - Number of allowed station movements
 */
function init(trainInfo, counter) {
    let trainList = [];

    // Create instance for each train
    trainInfo.forEach(train => {
        const trainInstance = new Train(train);

        trainList.push(trainInstance);
    })

    // Execute journey for pre-defined counter
    while (counter > 0) {
        let busyStations = [];

        // Sort trains based on passengers count
        // Used within the loop with the assumption that passenger count may change at each station
        trainList.sort((a, b) => b.passengers - a.passengers)

        trainList.forEach(train => {
            let nextStation = train.getNextStation();

            // If the station is occupied by previous train, halt this train
            if (busyStations.indexOf(nextStation) > -1) {
                console.log(`Train "${train.id}" halted to avoid collision`)
                return;
            }

            train.goNextStation();
            busyStations.push(nextStation);
        })

        counter--;
    }
}

/**
 *  Train details
 *  starting position and passenger count shall be changed here
 *  Stations are named based on the train names and shared stations are named using concat of train names
 */
let trainInfo = [{
    id: 'Train_A',
    passengers: 15,
    journeyRoutes: ['A1', 'A2', 'AC1', 'A4', 'AB1', 'A6', 'A7'],
    startingStation: 'A1'
}, {
    id: 'Train_B',
    passengers: 20,
    journeyRoutes: ['B1', 'B2', 'BC1', 'AB1', 'B5', 'B6'],
    startingStation: 'B1'
}, {
    id: 'Train_C',
    passengers: 25,
    journeyRoutes: ['C1', 'C2', 'AC1', 'AB1', 'C5', 'C6'],
    startingStation: 'C1'
}];

// 30 represents the number of allowed stationed movement
// Can be altered timeout based if needed
init(trainInfo, 40);