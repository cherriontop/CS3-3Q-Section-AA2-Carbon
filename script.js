function exponentialPopulationGrowth(){
    let initialPopulation = parseFloat(prompt('Enter value for the initial population:'));
    let rateOfGrowth =  parseFloat(prompt('Enter value for the rate of growth:'));
    let timeInHours = parseFloat(prompt('Enter value for the time in hours:'));

    let finalPopulation = Math.round(initialPopulation*Math.pow(Math.E, (rateOfGrowth*timeInHours)));

    let locationOfTheMonster = prompt('Enter the location of the Monster: ');
    let nameOfTheMonster = prompt('Enter the name of the Monster: ');
    let nameAndLocOfTheMonster = locationOfTheMonster.concat(" ", nameOfTheMonster).toUpperCase();

    document.getElementById("result").innerHTML="After " + timeInHours + " hour/s, the population of " + nameAndLocOfTheMonster + " has risen to " + finalPopulation;
}