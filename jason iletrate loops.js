//for 

const jsonString = '{"name": "kamesh", "age": 23, "city": "Thiruttani","Skills" : "Full stack devoloper"}';
const jsonObject = JSON.parse(jsonString);

for (const key in jsonObject) {
  if (jsonObject.hasOwnProperty(key)) {
    console.log(key + ": " + jsonObject[key]);
  }
}


// for-in

const jsonObject = {
  name: "Kamesh babu",
  age: 23,
  city: "Thiruttani"
};

for (const key in jsonObject) {
  console.log(key + ": " + jsonObject[key]);
}


//for-of

const jsonString = '{"name": "kamesh", "age": 23, "city": "Thiruttani","Skills" : "Full stack devoloper"}';
const jsonObject = JSON.parse(jsonString);

for (const key of Object.keys(jsonObject)) {
  console.log(key + ": " + jsonObject[key]);
}