let json = '{"fname":"sam","lame":"Smith"}';
let Obj = JSON.parse(json);

//console.log(typeof(Obj));

let Obj2 = {
    fname : "Jack",
    lname : "Smith"
};
let json2 = JSON.stringify(Obj2);
console.log(typeof(Obj2));