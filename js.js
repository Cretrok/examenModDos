function tripleDown(numeros){
  return numeros.map(numero => {
    return numero*3;
  });
}

const num = [1,2,3];

console.log(tripleDown(num));


/******************
 * 2.- Defina ... *
 ******************/

const persona = {
  evalPerson: function(currentYear, person){
    person.ageOfBirth = this.anioNacimiento(currentYear,person.age);
    person.inmigrant = this.inmigrantFunction(person.location);
    delete person.age;
    return person;
  },
  anioNacimiento: function(currentYear, year){
    return currentYear-parseInt(year);
  },
  inmigrantFunction: function(location){
    if(location.toLowerCase() === "mexico"){
      return false;
    }else{
      return true;
    }
  }
}
console.log(persona.evalPerson(2019, {name: "Cesar", age: "26", location: "Mexico"}));



/**********************
 * 3.-filterAndSum ...*
 *******************+**/

const lista = [1,2,3,4,5];
function filterAndSum(numbers, target){

  const filteredNumbers = numbers.filter(numbers => {
    return numbers <= target;
  });
  
  let sumOfNumbers = 0;
  filteredNumbers.forEach(number => {
    sumOfNumbers += number;
  });
  
  
  const objet = { filteredNumbers: filteredNumbers, sumOfNumbers: sumOfNumbers }
  return objet;
}

console.log(filterAndSum(lista, 3));
console.log(lista)


/************************
 * 4.- generateHTML ... *
 ************************/





