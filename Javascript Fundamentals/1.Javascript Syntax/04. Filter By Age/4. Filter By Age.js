function filterByAge(minAge, nameA, ageA, nameB, ageB){

    let personA = {
        name:nameA,
        age:ageA
    };
    let personB = {
        name:nameB,
        age:ageB
    };

    if (ageA >= minAge){
        console.log(personA);
    }
    if (ageB >= minAge){
        console.log(personB);
    }

}