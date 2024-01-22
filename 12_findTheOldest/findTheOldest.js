const findTheOldest = function(people) {
    let oldest = 0;
    let oldObj = {};
    let currentOldest = 0;
      for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath === undefined){
          currentOldest = new Date().getFullYear() - people[i].yearOfBirth;
        }
        else {
          currentOldest = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        if (currentOldest >oldest){
          oldest = currentOldest;
          oldObj = people[i];
        }
     }
    return oldObj;
};

// Do not edit below this line
module.exports = findTheOldest;
