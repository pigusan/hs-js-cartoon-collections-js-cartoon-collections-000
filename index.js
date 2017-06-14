function dwarfRollCall(dwarves) {
  var string = "";
  for (var i = 0; i < dwarves.length; i++) {
      string += `${i + 1}. ${dwarves[i]} `
    }
  return string;
}


function summonCaptainPlanet(planeteerCalls){
  var list = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    list.push(planeteerCalls[i].toUpperCase())
    list[i] += "!";
  }
  return list
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true
    }
    else {
      return false
    }
  }
}


/*function findTheCheese (foods) {
  var words = ["cheddar", "gouda", "camembert"];
    for (var cheese in words) {
      if (foods.includes(cheese)) {
        return cheese
      }
    }
    return "no cheese!"
}*/

function findTheCheese(foods) {
  var words = ["cheddar", "gouda", "camembert"];
  for (var n = 0; n < foods.length; n++) {

    for (let i = 0; i < words.length; i++) {
      if (words[i] == foods[n]) {
        return words[i];
      }
    }
  }
  return "no cheese!"
}
