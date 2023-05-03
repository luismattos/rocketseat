# [Mongoose ODM](https://mongoosejs.com/)

## CRUD

### Create OR Update

#### `Model.prototype.save()`

Saves this document by inserting a new document into the database if document.isNew is true, or sends an updateOne operation with just the modified paths if isNew is false.

```js
product.sold = Date.now();
product = await product.save();
```

### Create

#### `MyModel.create(docs)`

It is the same as `MyModel(doc).save()`.

```js
// Insert one new `Character` document
await Character.create({ name: "Jean-Luc Picard" });

// Insert multiple new `Character` documents
await Character.create([{ name: "Will Riker" }, { name: "Geordi LaForge" }]);

// Create a new character within a transaction. Note that you **must**
// pass an array as the first parameter to `create()` if you want to
// specify options.
await Character.create([{ name: "Jean-Luc Picard" }], { session });
```

#### `Model.insertMany()`

Shortcut for validating an array of documents and inserting them into MongoDB if they're all valid. This function is faster than .create() because it only sends one operation to the server, rather than one for each document.

Mongoose always validates each document before sending insertMany to MongoDB. So if one document has a validation error, no documents will be saved, unless you set the ordered option to false.

```js
const arr = [{ name: "Star Wars" }, { name: "The Empire Strikes Back" }];
Movies.insertMany(arr, function (error, docs) {});
```

### Read

#### `Model.where()`

Creates a Query, applies the passed conditions, and returns the Query.

```js
// For example, instead of writing:
User.find({ age: { $gte: 21, $lte: 65 } });

// We can instead write:
User.where("age").gte(21).lte(65).exec();

// Since the Query class also supports where you can continue chaining
// User
// .where('age').gte(21).lte(65)
// .where('name', /^b/i)
// ... etc.
```

#### `Model.find()`

Mongoose casts the filter to match the model's schema before the command is sent.

```js
// find all documents
await MyModel.find({});

// find all documents named john and at least 18
await MyModel.find({ name: "john", age: { $gte: 18 } }).exec();

// executes, name LIKE john and only selecting the "name" and "friends" fields
await MyModel.find({ name: /john/i }, "name friends").exec();

// passing options
await MyModel.find({ name: /john/i }, null, { skip: 10 }).exec();
```

#### `Model.findById()`

Finds a single document by its \_id field.

```js
// Find the adventure with the given `id`, or `null` if not found
await Adventure.findById(id).exec();

// select only the adventures name and length
await Adventure.findById(id, "name length").exec();
```

#### `Model.findOne()`

Finds one document.

```js
// Find one adventure whose `country` is 'Croatia', otherwise `null`
await Adventure.findOne({ country: "Croatia" }).exec();

// Model.findOne() no longer accepts a callback

// Select only the adventures name and length
await Adventure.findOne({ country: "Croatia" }, "name length").exec();
```

### Update

#### `Model.findByIdAndUpdate()`

Finds a matching document, updates it according to the update arg, passing any options, and returns the found document (if any).

```js
Model.findByIdAndUpdate(id, { name: "jason bourne" }, options);

// is sent as
// Model.findByIdAndUpdate(id, { $set: { name: 'jason bourne' }}, options)
```

#### `Model.findOneAndReplace()`

Finds a matching document, replaces it with the provided doc, and returns the document.

#### `Model.findOneAndUpdate()`

```js
const query = { name: "borne" };
Model.findOneAndUpdate(query, { name: "jason bourne" }, options);

// is sent as
// Model.findOneAndUpdate(query, { $set: { name: 'jason bourne' }}, options)
```

#### `Model.replaceOne()`

Replace the existing document with the given document (no atomic operators like $set).

```js
const res = await Person.replaceOne({ _id: 24601 }, { name: "Jean Valjean" });
res.matchedCount; // Number of documents matched
res.modifiedCount; // Number of documents modified
res.acknowledged; // Boolean indicating everything went smoothly.
res.upsertedId; // null or an id containing a document that had to be upserted.
res.upsertedCount; // Number indicating how many documents had to be upserted. Will either be 0 or 1.
```

#### `Model.updateMany()`

Same as updateOne(), except MongoDB will update all documents that match filter (as opposed to just the first one) regardless of the value of the multi option.

```js
const res = await Person.updateMany({ name: /Stark$/ }, { isDeleted: true });
res.matchedCount; // Number of documents matched
res.modifiedCount; // Number of documents modified
res.acknowledged; // Boolean indicating everything went smoothly.
res.upsertedId; // null or an id containing a document that had to be upserted.
res.upsertedCount; // Number indicating how many documents had to be upserted. Will either be 0 or 1.
```

#### `Model.updateOne()`

Update only the first document that matches filter. Use `replaceOne()` if you want to overwrite an entire document rather than using atomic operators like `$set`.

```js
const res = await Person.updateOne(
  { name: "Jean-Luc Picard" },
  { ship: "USS Enterprise" }
);
res.matchedCount; // Number of documents matched
res.modifiedCount; // Number of documents modified
res.acknowledged; // Boolean indicating everything went smoothly.
res.upsertedId; // null or an id containing a document that had to be upserted.
res.upsertedCount; // Number indicating how many documents had to be upserted. Will either be 0 or 1.
```

### Delete

#### `Model.deleteMany()`

Deletes all of the documents that match conditions from the collection. It returns an object with the property deletedCount containing the number of documents deleted.

```js
// returns {deletedCount: x} where x is the number of documents deleted.
await Character.deleteMany({ name: /Stark/, age: { $gte: 18 } });
```

#### `Model.deleteOne()`

Deletes the first document that matches conditions from the collection. It returns an object with the property deletedCount indicating how many documents were deleted.

```js
// returns {deletedCount: 1}
await Character.deleteOne({ name: "Eddard Stark" });
```

#### `Model.findByIdAndDelete()`

Issue a MongoDB `findOneAndDelete()` command by a document's \_id field. It is a shorthand for `findOneAndDelete({ _id: id })`.

#### `Model.findByIdAndRemove()`

Finds a matching document, removes it, and returns the found document (if any).

#### `Model.findOneAndDelete()`

Finds a matching document, removes it, and returns the found document (if any).

#### `Model.findOneAndRemove()`

Finds a matching document, removes it, and returns the found document (if any).

## Transaction

```js
const session = await Person.startSession();
let doc = await Person.findOne({ name: "Ned Stark" }, null, { session });
await doc.remove();
// `doc` will always be null, even if reading from a replica set
// secondary. Without causal consistency, it is possible to
// get a doc back from the below query if the query reads from a
// secondary that is experiencing replication lag.
doc = await Person.findOne({ name: "Ned Stark" }, null, {
  session,
  readPreference: "secondary",
});
```

## Populate
