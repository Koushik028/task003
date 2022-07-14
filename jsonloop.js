// for loop
var persons = [
    {
        "name":"itachi", 
        "lastname":"uchiha",
        "age":"20",
    },
    {
        "name":"naruto",
        "lastname":"uzumaki", 
        "age":"16",
    },
    {
        "name":"kakashi",
        "lastname":"hatake",
        "age":"22",
    }
];

for(var i=0;i<persons.length;i++){
  console.log(persons[i].name+" "+persons[i].lastname+" "+persons[i].age);
}

//for in
let car = {                         
    "name": "mercedes benz",
    "mileage" : "7.08Kmpl",
    "transmission":"automatic",
     "type":"sedan",
     "engine":"v12",    
};

for (var key in car){
  console.log(car[key]);
}