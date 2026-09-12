print('//1');
db.restaurants.find({}, { _id: 0 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//2');
db.restaurants.find({}, { _id: 0, restaurant_id: 1, name: 1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//3');
db.restaurants.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//4');
db.restaurants.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//5');
db.restaurants.find({ borough: "Bronx" }, { _id: 0 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//6');
db.restaurants.find({ borough: "Bronx" }, { _id: 0 }).limit(5).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//7');
db.restaurants.find({ borough: "Bronx" }, { _id: 0 }).skip(5).limit(5).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//8');
db.restaurants.find({ "grades.score": { $gt: 90 } }, { _id: 0 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//9');
db.restaurants.find({ grades: { $elemMatch: { score: { $gt: 80, $lt: 100 } } } }, { _id: 0 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//10');
db.restaurants.find({ "location.coordinates.0": { $lt: -95.754168 } }, { _id: 0 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//11');
db.restaurants.find({ $and: [{ cuisine: { $ne: "American" } }, { "grades.score": { $gt: 70 } }, { "location.coordinates.0": { $lt: -65.754168 } }] }, { _id: 0 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//12');
db.restaurants.find({ cuisine: { $ne: "American" }, "grades.score": { $gt: 70 }, "location.coordinates.0": { $lt: -65.754168 } }, { _id: 0 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//13');
db.restaurants.find({ cuisine: { $ne: "American" }, "grades.grade": "A", borough: { $ne: "Brooklyn" } }, { _id: 0 }).sort({ cuisine: -1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//14');
db.restaurants.find({ name: /^Wil/ }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//15');
db.restaurants.find({ name: /ces$/ }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//16');
db.restaurants.find({ name: /Reg/ }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//17');
db.restaurants.find({ borough: "Bronx", cuisine: { $in: ["American", "Chinese"] } }, { _id: 0 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//18');
db.restaurants.find({ borough: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//19');
db.restaurants.find({ borough: { $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//20');
db.restaurants.find({ "grades.score": { $lte: 10 } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//21');
db.restaurants.find({ $or: [{ cuisine: { $nin: ["American", "Chinees"] } }, { name: /^Wil/ }] }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//22');
db.restaurants.find({ grades: { $elemMatch: { grade: "A", score: 11, date: ISODate("2014-08-11T00:00:00Z") } } }, { _id: 0, restaurant_id: 1, name: 1, grades: 1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//23');
db.restaurants.find({ "grades.1.grade": "A", "grades.1.score": 9, "grades.1.date": ISODate("2014-08-11T00:00:00Z") }, { _id: 0, restaurant_id: 1, name: 1, grades: 1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//24');
db.restaurants.find({ location: { $near: { $geometry: { type: "Point", coordinates: [-74, 40.7] }, $maxDistance: 5000 } } }, { _id: 0, restaurant_id: 1, name: 1, "address.street": 1, "address.zipcode": 1, "location.coordinates": 1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//25');
db.restaurants.find({}, { _id: 0 }).sort({ name: 1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//26');
db.restaurants.find({}, { _id: 0 }).sort({ name: -1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//27');
db.restaurants.find({}, { _id: 0 }).sort({ cuisine: 1, borough: -1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//28');
db.restaurants.find({ "address.street": "" }, { _id: 0 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//29');
db.restaurants.find({ "location.coordinates": { $type: "double" } }, { _id: 0, name: 1, restaurant_id: 1, "location.coordinates": 1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//30');
db.restaurants.find({ "grades.score": { $mod: [7, 0] } }, { _id: 0, restaurant_id: 1, name: 1, "grades.grade": 1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//31');
db.restaurants.find({ name: /mon/ }, { _id: 0, name: 1, borough: 1, "location.coordinates": 1, cuisine: 1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');

print('//32');
db.restaurants.find({ grades: { $elemMatch: { score: { $gt: 80, $lt: 100 } } } }, { _id: 0, restaurant_id: 1, name: 1, "grades.grade": 1, "grades.score": 1 }).sort({restaurant_id: 1 }).forEach(doc => print(JSON.stringify(doc)));
print('//EOQ');