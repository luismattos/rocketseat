# [Mongoose](https://mongoosejs.com/)

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

## Validation

- Validation is a middleware. Validation always runs as the first `pre('save')` hook.
- You can disable automatic validation before save by setting the `validateBeforeSave` option.
- You can manually run validation using `doc.validate()` or `doc.validateSync()`.
- You can manually mark a field as invalid (causing validation to fail) by using `doc.invalidate(...)`.
- Validators are not run on `undefined` values. The only exception is the `required` validator.
- Validation is customizable.
- **The `unique` option is not a validator**. It will _not_ be a mongoose validation error, it will be a duplicate key error.

### Built-in Validators

- `SchemaTypes` validators
  - `required`
- `Numbers` validators
  - `min`
  - `max`
- `Strings`
  - `enum`
  - `match`
  - `minLength`
  - `maxLength`

```js
const breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, "Too few eggs"],
    max: 12,
  },
  bacon: {
    type: Number,
    required: [true, "Why no bacon?"],
  },
  drink: {
    type: String,
    enum: ["Coffee", "Tea"],
    required: function () {
      return this.bacon > 3;
    },
  },
});
const Breakfast = db.model("Breakfast", breakfastSchema);

const badBreakfast = new Breakfast({
  eggs: 2,
  bacon: 0,
  drink: "Milk",
});
let error = badBreakfast.validateSync();
assert.equal(error.errors["eggs"].message, "Too few eggs");
assert.ok(!error.errors["bacon"]);
assert.equal(
  error.errors["drink"].message,
  "`Milk` is not a valid enum value for path `drink`."
);

badBreakfast.bacon = 5;
badBreakfast.drink = null;

error = badBreakfast.validateSync();
assert.equal(error.errors["drink"].message, "Path `drink` is required.");

badBreakfast.bacon = null;
error = badBreakfast.validateSync();
assert.equal(error.errors["bacon"].message, "Why no bacon?");
```

### Custom Error Messages

There are two equivalent ways to set the validator error message:

- Array syntax: `min: [6, 'Must be at least 6, got {VALUE}']`
- Object syntax: `enum: { values: ['Coffee', 'Tea'], message: '{VALUE} is not supported' }`

Mongoose replaces {VALUE} with the value being validated.

```js
const breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, "Must be at least 6, got {VALUE}"],
    max: 12,
  },
  drink: {
    type: String,
    enum: {
      values: ["Coffee", "Tea"],
      message: "{VALUE} is not supported",
    },
  },
});
const Breakfast = db.model("Breakfast", breakfastSchema);

const badBreakfast = new Breakfast({
  eggs: 2,
  drink: "Milk",
});
const error = badBreakfast.validateSync();
assert.equal(error.errors["eggs"].message, "Must be at least 6, got 2");
assert.equal(error.errors["drink"].message, "Milk is not supported");
```

### Custom Validators

If the built-in validators aren't enough, you can define custom validators to suit your needs. Custom validation is declared by passing a validation function.

```js
const userSchema = new Schema({
  phone: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: [true, "User phone number required"],
  },
});

const User = db.model("user", userSchema);
const user = new User();
let error;

user.phone = "555.0123";
error = user.validateSync();
assert.equal(
  error.errors["phone"].message,
  "555.0123 is not a valid phone number!"
);

user.phone = "";
error = user.validateSync();
assert.equal(error.errors["phone"].message, "User phone number required");

user.phone = "201-555-0123";
// Validation succeeds! Phone number is defined
// and fits `DDD-DDD-DDDD`
error = user.validateSync();
assert.equal(error, null);
```

Custom validators can also be asynchronous. If your validator function returns a promise (like an `async` function), mongoose will wait for that promise to settle. If the returned promise rejects, or fulfills with the value `false`, Mongoose will consider that a validation error.

```js
const userSchema = new Schema({
  name: {
    type: String,
    // You can also make a validator async by returning a promise.
    validate: () => Promise.reject(new Error("Oops!")),
  },
  email: {
    type: String,
    // There are two ways for an promise-based async validator to fail:
    // 1) If the promise rejects, Mongoose assumes the validator failed with the given error.
    // 2) If the promise resolves to `false`, Mongoose assumes the validator failed and creates an error with the given `message`.
    validate: {
      validator: () => Promise.resolve(false),
      message: "Email validation failed",
    },
  },
});

const User = db.model("User", userSchema);
const user = new User();

user.email = "test@test.co";
user.name = "test";

let error;
try {
  await user.validate();
} catch (err) {
  error = err;
}
assert.ok(error);
assert.equal(error.errors["name"].message, "Oops!");
assert.equal(error.errors["email"].message, "Email validation failed");
```

### Global SchemaType Validation

In addition to defining custom validators on individual schema paths, you can also configure a custom validator to run on every instance of a given `SchemaType`.

```js
// Add a custom validator to all strings
// empty string '' an invalid value
mongoose.Schema.Types.String.set("validate", (v) => v == null || v > 0);

const userSchema = new Schema({
  name: String,
  email: String,
});
const User = db.model("User", userSchema);

const user = new User({ name: "", email: "" });

const err = await user.validate().then(
  () => null,
  (err) => err
);
err.errors["name"]; // ValidatorError
err.errors["email"]; // ValidatorError
```

### Required Validators On Nested Objects

```js
let personSchema = new Schema({
  name: {
    first: String,
    last: String,
  },
});

assert.throws(function () {
  // This throws an error, because 'name' isn't a full fledged path
  personSchema.path("name").required(true);
}, /Cannot.*'required'/);

// To make a nested object required, use a single nested schema
const nameSchema = new Schema({
  first: String,
  last: String,
});

personSchema = new Schema({
  name: {
    type: nameSchema,
    required: true,
  },
});

const Person = db.model("Person", personSchema);

const person = new Person();
const error = person.validateSync();
assert.ok(error.errors["name"]);
```

### Validation Errors

Errors returned after failed validation contain an `errors` object whose values are `ValidatorError` objects. Each `ValidatorError` has `kind`, `path`, `value`, and `message` properties. A `ValidatorError` also may have a `reason` property. If an error was thrown in the validator, this property will contain the error that was thrown.

```js
const toySchema = new Schema({
  color: String,
  name: String,
});

const validator = function (value) {
  return /red|white|gold/i.test(value);
};
toySchema
  .path("color")
  .validate(validator, "Color `{VALUE}` not valid", "Invalid color");
toySchema.path("name").validate(function (v) {
  if (v !== "Turbo Man") {
    throw new Error("Need to get a Turbo Man for Christmas");
  }
  return true;
}, "Name `{VALUE}` is not valid");

const Toy = db.model("Toy", toySchema);

const toy = new Toy({ color: "Green", name: "Power Ranger" });

let error;
try {
  await toy.save();
} catch (err) {
  error = err;
}

// `error` is a ValidationError object
// `error.errors.color` is a ValidatorError object
assert.equal(error.errors.color.message, "Color `Green` not valid");
assert.equal(error.errors.color.kind, "Invalid color");
assert.equal(error.errors.color.path, "color");
assert.equal(error.errors.color.value, "Green");

// If your validator throws an exception, mongoose will use the error
// message. If your validator returns `false`,
// mongoose will use the 'Name `Power Ranger` is not valid' message.
assert.equal(
  error.errors.name.message,
  "Need to get a Turbo Man for Christmas"
);
assert.equal(error.errors.name.value, "Power Ranger");
// If your validator threw an error, the `reason` property will contain
// the original error thrown, including the original stack trace.
assert.equal(
  error.errors.name.reason.message,
  "Need to get a Turbo Man for Christmas"
);

assert.equal(error.name, "ValidationError");
```

#### Cast Errors

Before running validators, Mongoose attempts to coerce values to the correct type. This process is called _casting_ the document. If casting fails for a given path, the `error.errors` object will contain a `CastError` object.

Casting runs before validation, and validation does not run if casting fails. That means your custom validators may assume `v` is `null`, `undefined`, or an instance of the type specified in your schema.

```js
const vehicleSchema = new mongoose.Schema({
  numWheels: { type: Number, max: 18 },
});
const Vehicle = db.model("Vehicle", vehicleSchema);

const doc = new Vehicle({ numWheels: "not a number" });
const err = doc.validateSync();

err.errors["numWheels"].name; // 'CastError'
// 'Cast to Number failed for value "not a number" at path "numWheels"'
err.errors["numWheels"].message;
```

## Middleware

Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions. Middleware is specified on the schema level and is useful for writing plugins.

### Types of Middleware

- **document middleware**: In document middleware functions, `this` refers to the document. To access the model, use `this.constructor`. Document middleware is supported for the following document functions:
  - validate
  - save
  - remove
  - updateOne
  - deleteOne
- **model middleware**: In model middleware functions, `this` refers to the model. Model middleware is supported for the following model functions:
  - insertMany
- **aggregate middleware**: Aggregate middleware is for `MyModel.aggregate()`. Aggregate middleware executes when you call `exec()` on an aggregate object. In aggregate middleware, `this` refers to the aggregation object `aggregate`.
- **query middleware**: Query middleware executes when you call `exec()` or `then()` on a Query object, or `await` on a Query object. In query middleware functions, `this` refers to the query. Query middleware is supported for the following Query functions:
  - count
  - countDocuments
  - deleteMany
  - deleteOne
  - estimatedDocumentCount
  - find
  - findOne
  - findOneAndDelete
  - findOneAndRemove
  - findOneAndReplace
  - findOneAndUpdate
  - remove
  - replaceOne
  - update
  - updateOne
  - updateMany
  - validate

### Pre & Post Hooks

Calling `pre()` or `post() `after compiling a model does not work in Mongoose in general. For example, the below `pre('save')` middleware will not fire. This means that you must add all middleware and plugins before calling `mongoose.model()`.

Query middlewares are not executed on subdocuments.

```js
const childSchema = new mongoose.Schema({
  name: String,
});

const mainSchema = new mongoose.Schema({
  child: [childSchema],
});

mainSchema.pre("findOneAndUpdate", function () {
  console.log("Middleware on parent document"); // Will be executed
});

childSchema.pre("findOneAndUpdate", function () {
  console.log("Middleware on subdocument"); // Will not be executed
});
```

Here are the possible strings that can be passed to pre():

- aggregate
- count
- countDocuments
- deleteOne
- deleteMany
- estimatedDocumentCount
- find
- findOne
- findOneAndDelete
- findOneAndRemove
- findOneAndReplace
- findOneAndUpdate
- init
- insertMany
- remove
- replaceOne
- save
- update
- updateOne
- updateMany
- validate

#### Pre

Pre middleware functions are executed one after another.

```js
const schema = new Schema({
  /* ... */
});

schema.pre("save", function (next) {
  // do stuff
  next();
});

// Or
schema.pre("save", function () {
  return doStuff().then(() => doMoreStuff());
});

// Or
schema.pre("save", async function () {
  await doStuff();
  await doMoreStuff();
});
```

If any pre hook errors out, mongoose will not execute subsequent middleware or the hooked function. Mongoose will instead pass an error to the callback and/or reject the returned promise. There are several ways to report an error in middleware:

```js
schema.pre("save", function (next) {
  const err = new Error("something went wrong");
  // If you call `next()` with an argument, that argument is assumed to be
  // an error.
  next(err);
});

schema.pre("save", function () {
  // You can also return a promise that rejects
  return new Promise((resolve, reject) => {
    reject(new Error("something went wrong"));
  });
});

schema.pre("save", function () {
  // You can also throw a synchronous error
  throw new Error("something went wrong");
});

schema.pre("save", async function () {
  await Promise.resolve();
  // You can also throw an error in an `async` function
  throw new Error("something went wrong");
});

// later...

// Changes will not be persisted to MongoDB because a pre hook errored out
myDoc.save(function (err) {
  console.log(err.message); // something went wrong
});
```

They are useful for atomizing model logic. Here are some other ideas:

- complex validation
- removing dependent documents (removing a user removes all their blogposts)
- asynchronous defaults
- asynchronous tasks that a certain action triggers

#### Post

Post middleware are executed after the hooked method and all of its Pre middleware have completed.

```js
schema.post("init", function (doc) {
  console.log("%s has been initialized from the db", doc._id);
});

schema.post("validate", function (doc) {
  console.log("%s has been validated (but not saved yet)", doc._id);
});

schema.post("save", function (doc) {
  console.log("%s has been saved", doc._id);
});

schema.post("remove", function (doc) {
  console.log("%s has been removed", doc._id);
});
```

If your post hook function takes at least 2 parameters, mongoose will assume the second parameter is a `next()` function that you will call to trigger the next middleware in the sequence.

```js
// Takes 2 parameters: this is an asynchronous post hook
schema.post("save", function (doc, next) {
  setTimeout(function () {
    console.log("post1");
    // Kick off the second post hook
    next();
  }, 10);
});

// Will not execute until the first middleware calls `next()`
schema.post("save", function (doc, next) {
  console.log("post2");
  next();
});
```

## Populate

MongoDB has the join-like `$lookup` aggregation operator. Mongoose has a more powerful alternative called `populate()`, which lets you reference documents in other collections.

### MongoDB `$lookup` aggregation

The `$lookup` aggregation performs a left outer join to a collection in the same database to filter in documents from the "joined" collection for processing.

```js
{
   $lookup:
     {
       from: /*<collection to join>*/,
       localField: /*<field from the input documents>*/,
       foreignField: /*<field from the documents of the "from" collection>*/,
       as: /*<output array field>*/
     }
}
```

The operation would correspond to the following pseudo-SQL statement:

```
SELECT *, <output array field>
FROM collection
WHERE <output array field> IN (
   SELECT *
   FROM <collection to join>
   WHERE <foreignField> = <collection.localField>
);
```

### Mongoose Populate

Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, a plain object, multiple plain objects, or all objects returned from a query.

Lets create two `Models`:

```js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: "Person" },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: "Person" }],
});

const Story = mongoose.model("Story", storySchema);
const Person = mongoose.model("Person", personSchema);
```

#### Saving Refs

Saving refs to other documents works the same way you normally save properties, just assign the \_id value.

```js
const author = new Person({
  _id: new mongoose.Types.ObjectId(),
  name: "Ian Fleming",
  age: 50,
});

author.save(function (err) {
  if (err) return handleError(err);

  const story1 = new Story({
    title: "Casino Royale",
    author: author._id, // assign the _id from the person
  });

  story1.save(function (err) {
    if (err) return handleError(err);
    // that's it!
  });
});
```

#### Population

Let's take a look at populating our story's `author` using the query builder:

```js
Story.findOne({ title: "Casino Royale" })
  .populate("author")
  .exec(function (err, story) {
    if (err) return handleError(err);
    console.log("The author is %s", story.author.name);
    // prints "The author is Ian Fleming"
  });
```

Populated paths are no longer set to their original `_id` , their value is replaced with the mongoose document returned from the database by performing a separate query before returning the results.

Arrays of refs work the same way. Just call the populate method on the query and an array of documents will be returned in place of the original `_ids`.

When there's no document, story.author will be null.

```js
await Person.deleteMany({ name: "Ian Fleming" });

const story = await Story.findOne({ title: "Casino Royale" }).populate(
  "author"
);
story.author; // `null`
```

If you have an array of authors in your storySchema, populate() will give you an empty array instead.

```js
const storySchema = Schema({
  authors: [{ type: Schema.Types.ObjectId, ref: "Person" }],
  title: String,
});

// Later

const story = await Story.findOne({ title: "Casino Royale" }).populate(
  "authors"
);
story.authors; // `[]`
```

#### Setting Populated Fields

You can manually populate a property by setting it to a document. The document must be an instance of the model your ref property refers to.

```js
Story.findOne({ title: "Casino Royale" }, function (error, story) {
  if (error) {
    return handleError(error);
  }
  story.author = author;
  console.log(story.author.name); // prints "Ian Fleming"
});
```

#### Checking Whether a Field is Populated

```js
story.populated("author"); // truthy
story.author._id; // ObjectId

story.depopulate("author"); // Make `author` not populated anymore
story.populated("author"); // undefined

story.author instanceof ObjectId; // true
story.author._id; // ObjectId, because Mongoose adds a special getter
```

#### Field Selection

If we only want a few specific fields returned for the populated documents, we should pass the usual field name syntax as the second argument to the populate method

```js
Story.findOne({ title: /casino royale/i })
  .populate("author", "name") // only return the Persons name
  .exec(function (err, story) {
    if (err) return handleError(err);

    console.log("The author is %s", story.author.name);
    // prints "The author is Ian Fleming"

    console.log("The authors age is %s", story.author.age);
    // prints "The authors age is null"
  });
```

#### Populating Multiple Paths

```js
Story.find({
  /* ... */
})
  .populate("fans")
  .populate("author")
  .exec();
```

#### Query conditions

What if we wanted to populate our fans array based on their age and select just their names?

```js
Story.find()
  .populate({
    path: "fans",
    match: { age: { $gte: 21 } },
    // Explicitly exclude `_id`, see http://bit.ly/2aEfTdB
    select: "name -_id",
  })
  .exec();
```

#### Populating an existing document

```js
const person = await Person.findOne({ name: "Ian Fleming" });

person.populated("stories"); // null

// Call the `populate()` method on a document to populate a path.
await person.populate("stories");

person.populated("stories"); // Array of ObjectIds
person.stories[0].name; // 'Casino Royale'
```

The Document#populate() method does not support chaining. You need to call populate() multiple times, or with an array of paths, to populate multiple paths.

```js
await person.populate(["stories", "fans"]);
person.populated("fans"); // Array of ObjectIds
```

#### Populating across multiple levels

Say you have a user schema which keeps track of the user's friends. Populate lets you get a list of a user's friends, but what if you also wanted a user's friends of friends? Specify the populate option to tell mongoose to populate the friends array of all the user's friends:

```js
const userSchema = new Schema({
  name: String,
  friends: [{ type: ObjectId, ref: "User" }],
});

User.findOne({ name: "Val" }).populate({
  path: "friends",
  // Get friends of friends - populate the 'friends' array for every friend
  populate: { path: "friends" },
});
```

#### Dynamic References via `refPath`

Let's say you're building a schema for storing comments. A user may comment on either a blog post or a product.

```js
const commentSchema = new Schema({
  body: { type: String, required: true },
  doc: {
    type: Schema.Types.ObjectId,
    required: true,
    // Instead of a hardcoded model name in `ref`, `refPath` means Mongoose
    // will look at the `docModel` property to find the right model.
    refPath: "docModel",
  },
  docModel: {
    type: String,
    required: true,
    enum: ["BlogPost", "Product"],
  },
});

const Product = mongoose.model("Product", new Schema({ name: String }));
const BlogPost = mongoose.model("BlogPost", new Schema({ title: String }));
const Comment = mongoose.model("Comment", commentSchema);

const book = await Product.create({ name: "The Count of Monte Cristo" });
const post = await BlogPost.create({ title: "Top 10 French Novels" });

const commentOnBook = await Comment.create({
  body: "Great read",
  doc: book._id,
  docModel: "Product",
});

const commentOnPost = await Comment.create({
  body: "Very informative",
  doc: post._id,
  docModel: "BlogPost",
});

// The below `populate()` works even though one comment references the
// 'Product' collection and the other references the 'BlogPost' collection.
const comments = await Comment.find().populate("doc").sort({ body: 1 });
comments[0].doc.name; // "The Count of Monte Cristo"
comments[1].doc.title; // "Top 10 French Novels"
```

#### Populating Maps

You can populate() every element in the map by populating the special path members.$_. $_ is a special syntax that tells Mongoose to look at every key in the map.

```js
const BandSchema = new Schema({
  name: String,
  members: {
    type: Map,
    of: {
      type: "ObjectId",
      ref: "Person",
    },
  },
});

const Band = mongoose.model("Band", bandSchema);

const person1 = new Person({ name: "Vince Neil" });
const person2 = new Person({ name: "Mick Mars" });

const band = new Band({
  name: "Motley Crue",
  members: {
    singer: person1._id,
    guitarist: person2._id,
  },
});

const mcBand = await Band.findOne({ name: "Motley Crue" }).populate(
  "members.$*"
);

mcBand.members.get("singer"); // { _id: ..., name: 'Vince Neil' }
```

#### Populate in Middleware

You can populate in either pre or post hooks. If you want to always populate a certain field, check out the [mongoose-autopopulate](https://www.npmjs.com/package/mongoose-autopopulate) plugin.

```js
// Always attach `populate()` to `find()` calls
MySchema.pre("find", function () {
  this.populate("user");
});

// Always `populate()` after `find()` calls. Useful if you want to selectively populate
// based on the docs found.
MySchema.post("find", async function (docs) {
  for (const doc of docs) {
    if (doc.isPublic) {
      await doc.populate("user");
    }
  }
});

// `populate()` after saving. Useful for sending populated data back to the client in an
// update API endpoint
MySchema.post("save", function (doc, next) {
  doc.populate("user").then(function () {
    next();
  });
});
```

#### Populating Multiple Paths in Middleware:

```js
const userSchema = new Schema({
  email: String,
  password: String,
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

// Wrong: will trigger an infinite recursion
userSchema.pre("find", function (next) {
  this.populate("followers following");
  next();
});

//Correct
userSchema.pre("find", function (next) {
  if (this.options._recursed) {
    return next();
  }
  this.populate({ path: "followers following", options: { _recursed: true } });
  next();
});

const User = mongoose.model("User", userSchema);
```

# [migrate-mongo](https://github.com/seppevs/migrate-mongo#readme)

## Installation

```bash
$ npm install -g migrate-mongo
```

## CLI Usage

```
$ migrate-mongo
Usage: migrate-mongo [options] [command]
  Commands:
    init                  initialize a new migration project
    create [description]  create a new database migration with the provided description
    up [options]          run all unapplied database migrations
    down [options]        undo the last applied database migration
    status [options]      print the changelog of the database
  Options:
    -h, --help     output usage information
    -V, --version  output the version number
```

## Basic Usage

### Initialize a new project

Make sure you have [Node.js](https://nodejs.org/en/) 10 (or higher) installed.

Create a directory where you want to store your migrations for your mongo database (eg. 'albums' here) and cd into it

```bash
$ mkdir albums-migrations
$ cd albums-migrations
```

Initialize a new migrate-mongo project

```bash
$ migrate-mongo init
Initialization successful. Please edit the generated migrate-mongo-config.js file
```

The above command did two things:

1. create a sample 'migrate-mongo-config.js' file and
2. create a 'migrations' directory

Edit the migrate-mongo-config.js file. An object or promise can be returned. Make sure you change the mongodb url:

```javascript
// In this file you can configure migrate-mongo
module.exports = {
  mongodb: {
    // TODO Change (or review) the url to your MongoDB:
    url: "mongodb://localhost:27017",
    // TODO Change this to your database name:
    databaseName: "YOURDATABASENAME",
    options: {
      useNewUrlParser: true, // removes a deprecation warning when connecting
      //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
      //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
    },
  },
  // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
  migrationsDir: "migrations",
  // The mongodb collection where the applied changes are stored. Only edit this when really necessary.
  changelogCollectionName: "changelog",
  // The file extension to create migrations and search for in migration dir
  migrationFileExtension: ".js",
  // Enable the algorithm to create a checksum of the file contents and use that in the comparison to determin
  // if the file should be run.  Requires that scripts are coded to be run multiple times.
  useFileHash: false,
};
```

Alternatively, you can also encode your database name in the url (and leave out the `databaseName` property):

```
        url: "mongodb://localhost:27017/YOURDATABASE",
```

### Creating a new migration script

To create a new database migration script, just run the `migrate-mongo create [description]` command.

For example:

```bash
$ migrate-mongo create blacklist_the_beatles
Created: migrations/20160608155948-blacklist_the_beatles.js
```

A new migration file is created in the 'migrations' directory:

```javascript
module.exports = {
  up(db, client) {
    // TODO write your migration here. Return a Promise (and/or use async & await).
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
  },
  down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  },
};
```

Edit this content so it actually performs changes to your database. Don't forget to write the down part as well.
The `db` object contains [the official MongoDB db object](https://www.npmjs.com/package/mongodb)
The `client` object is a [MongoClient](https://mongodb.github.io/node-mongodb-native/3.3/api/MongoClient.html) instance (which you can omit if you don't use it).

There are 3 options to implement the `up` and `down` functions of your migration:

1. Return a Promises
2. Use async-await
3. Call a callback (DEPRECATED!)

Always make sure the implementation matches the function signature:

- `function up(db, client) { /* */ }` should return `Promise`
- `function async up(db, client) { /* */ }` should contain `await` keyword(s) and return `Promise`
- `function up(db, client, next) { /* */ }` should callback `next`

#### Example 1: Return a Promise

```javascript
module.exports = {
  up(db) {
    return db
      .collection("albums")
      .updateOne({ artist: "The Beatles" }, { $set: { blacklisted: true } });
  },
  down(db) {
    return db
      .collection("albums")
      .updateOne({ artist: "The Beatles" }, { $set: { blacklisted: false } });
  },
};
```

#### Example 2: Use async & await

Async & await is especially useful if you want to perform multiple operations against your MongoDB in one migration.

```javascript
module.exports = {
  async up(db) {
    await db
      .collection("albums")
      .updateOne({ artist: "The Beatles" }, { $set: { blacklisted: true } });
    await db
      .collection("albums")
      .updateOne({ artist: "The Doors" }, { $set: { stars: 5 } });
  },
  async down(db) {
    await db
      .collection("albums")
      .updateOne({ artist: "The Doors" }, { $set: { stars: 0 } });
    await db
      .collection("albums")
      .updateOne({ artist: "The Beatles" }, { $set: { blacklisted: false } });
  },
};
```

#### Example 3: Call a callback (deprecated)

Callbacks are supported for backwards compatibility.
New migration scripts should be written using Promises and/or async & await. It's easier to read and write.

```javascript
module.exports = {
  up(db, callback) {
    return db
      .collection("albums")
      .updateOne(
        { artist: "The Beatles" },
        { $set: { blacklisted: true } },
        callback
      );
  },
  down(db, callback) {
    return db
      .collection("albums")
      .updateOne(
        { artist: "The Beatles" },
        { $set: { blacklisted: false } },
        callback
      );
  },
};
```

#### Overriding the sample migration

To override the content of the sample migration that will be created by the `create` command,
create a file **`sample-migration.js`** in the migrations directory.

### Checking the status of the migrations

At any time, you can check which migrations are applied (or not)

```bash
$ migrate-mongo status
┌─────────────────────────────────────────┬────────────┐
│ Filename                                │ Applied At │
├─────────────────────────────────────────┼────────────┤
│ 20160608155948-blacklist_the_beatles.js │ PENDING    │
└─────────────────────────────────────────┴────────────┘
```

### Migrate up

This command will apply all pending migrations

```bash
$ migrate-mongo up
MIGRATED UP: 20160608155948-blacklist_the_beatles.js
```

If an an error occurred, it will stop and won't continue with the rest of the pending migrations

If we check the status again, we can see the last migration was successfully applied:

```bash
$ migrate-mongo status
┌─────────────────────────────────────────┬──────────────────────────┐
│ Filename                                │ Applied At               │
├─────────────────────────────────────────┼──────────────────────────┤
│ 20160608155948-blacklist_the_beatles.js │ 2016-06-08T20:13:30.415Z │
└─────────────────────────────────────────┴──────────────────────────┘
```

### Migrate down

With this command, migrate-mongo will revert (only) the last applied migration

```bash
$ migrate-mongo down
MIGRATED DOWN: 20160608155948-blacklist_the_beatles.js
```

If we check the status again, we see that the reverted migration is pending again:

```bash
$ migrate-mongo status
┌─────────────────────────────────────────┬────────────┐
│ Filename                                │ Applied At │
├─────────────────────────────────────────┼────────────┤
│ 20160608155948-blacklist_the_beatles.js │ PENDING    │
└─────────────────────────────────────────┴────────────┘
```

## Advanced Features

### Using a custom config file

All actions (except `init`) accept an optional `-f` or `--file` option to specify a path to a custom config file.
By default, migrate-mongo will look for a `migrate-mongo-config.js` config file in of the current directory.

#### Example:

```bash
$ migrate-mongo status -f '~/configs/albums-migrations.js'
┌─────────────────────────────────────────┬────────────┐
│ Filename                                │ Applied At │
├─────────────────────────────────────────┼────────────┤
│ 20160608155948-blacklist_the_beatles.js │ PENDING    │
└─────────────────────────────────────────┴────────────┘
```

### Using npm packages in your migration scripts

You can use use Node.js modules (or require other modules) in your migration scripts.
It's even possible to use npm modules, just provide a `package.json` file in the root of your migration project:

```bash
$ cd albums-migrations
$ npm init --yes
```

Now you have a package.json file, and you can install your favorite npm modules that might help you in your migration scripts.
For example, one of the very useful [promise-fun](https://github.com/sindresorhus/promise-fun) npm modules.

### Using ESM (ECMAScript Modules) instead of CommonJS

Since migrate-mongo 7.0.0, it's possible to use ESM instead of CommonJS.

#### Using ESM when initializing a new project

Pass the `-m esm` option to the `init` action:

```bash
$ migrate-mongo init -m esm
```

It's also required to have package.json file in the root of your project with `"type": "module"`.
Create a new package.json file:

```bash
$ npm init --yes
```

Then edit this package.json file, and add:

```bash
"type": "module"
```

When you create migration files with `migrate-mongo create`, they will be prepared for you in ESM style.

Please note that CommonJS is still the default module loading system.

### Using MongoDB's Transactions API

You can make use of the [MongoDB Transaction API](https://docs.mongodb.com/manual/core/transactions/) in your migration scripts.

Note: this requires both:

- MongoDB 4.0 or higher
- migrate-mongo 7.0.0 or higher

migrate-mongo will call your migration `up` and `down` function with a second argument: `client`.
This `client` argument is an [MongoClient](https://mongodb.github.io/node-mongodb-native/3.3/api/MongoClient.html) instance, it gives you access to the `startSession` function.

Example:

```javascript
module.exports = {
  async up(db, client) {
    const session = client.startSession();
    try {
      await session.withTransaction(async () => {
        await db
          .collection("albums")
          .updateOne(
            { artist: "The Beatles" },
            { $set: { blacklisted: true } }
          );
        await db
          .collection("albums")
          .updateOne({ artist: "The Doors" }, { $set: { stars: 5 } });
      });
    } finally {
      await session.endSession();
    }
  },
  async down(db, client) {
    const session = client.startSession();
    try {
      await session.withTransaction(async () => {
        await db
          .collection("albums")
          .updateOne(
            { artist: "The Beatles" },
            { $set: { blacklisted: false } }
          );
        await db
          .collection("albums")
          .updateOne({ artist: "The Doors" }, { $set: { stars: 0 } });
      });
    } finally {
      await session.endSession();
    }
  },
};
```

### Using a file hash algorithm to enable re-running updated files

There are use cases where it may make sense to not treat scripts as immutable items. An example would be a simple collection with lookup values where you just can wipe and recreate the entire collection all at the same time.

```javascript
useFileHash: true;
```

Set this config value to will enable tracking a hash of the file contents and will run a file with the same name again as long as the file contents have changes. Setting this flag changes the behavior for every script and if this is enabled each script needs to be written in a manner where it can be re-run safefly. A script of the same name and hash will not be executed again, only if the hash changes.

Now the status will also include the file hash in the output

```bash
┌────────────────────────────────────────┬──────────────────────────────────────────────────────────────────┬──────────────────────────┐
│ Filename                               │ Hash                                                             │ Applied At               │
├────────────────────────────────────────┼──────────────────────────────────────────────────────────────────┼──────────────────────────┤
│ 20160608155948-blacklist_the_beatles.js│ 7625a0220d552dbeb42e26fdab61d8c7ef54ac3a052254588c267e42e9fa876d │ 2021-03-04T15:40:22.732Z │
└────────────────────────────────────────┴──────────────────────────────────────────────────────────────────┴──────────────────────────┘
```

### Version

To know which version of migrate-mongo you're running, just pass the `version` option:

```bash
$ migrate-mongo version
```

## API Usage

```javascript
const {
  init,
  create,
  database,
  config,
  up,
  down,
  status,
} = require("migrate-mongo");
```

### `init() → Promise`

Initialize a new migrate-mongo project

```javascript
await init();
```

The above command did two things:

1. create a sample `migrate-mongo-config.js` file and
2. create a `migrations` directory

Edit the `migrate-mongo-config.js` file. Make sure you change the mongodb url.

### `create(description) → Promise<fileName>`

For example:

```javascript
const fileName = await create("blacklist_the_beatles");
console.log("Created:", fileName);
```

A new migration file is created in the `migrations` directory.

### `database.connect() → Promise<{db: MongoDb, client: MongoClient}>`

Connect to a mongo database using the connection settings from the `migrate-mongo-config.js` file.

```javascript
const { db, client } = await database.connect();
```

### `config.read() → Promise<JSON>`

Read connection settings from the `migrate-mongo-config.js` file.

```javascript
const mongoConnectionSettings = await config.read();
```

### `config.set(yourConfigObject)`

Tell migrate-mongo NOT to use the `migrate-mongo-config.js` file, but instead use the config object passed as the first argument of this function.
When using this feature, please do this at the very beginning of your program.

Example:

```javascript
const { config, up } = require("../lib/migrate-mongo");
const myConfig = {
  mongodb: {
    url: "mongodb://localhost:27017/mydatabase",
    options: { useNewUrlParser: true },
  },
  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js",
};
config.set(myConfig);
// then, use the API as you normally would, eg:
await up();
```

### `up(MongoDb, MongoClient) → Promise<Array<fileName>>`

Apply all pending migrations

```javascript
const { db, client } = await database.connect();
const migrated = await up(db, client);
migrated.forEach((fileName) => console.log("Migrated:", fileName));
```

If an an error occurred, the promise will reject and won't continue with the rest of the pending migrations.

### `down(MongoDb, MongoClient) → Promise<Array<fileName>>`

Revert (only) the last applied migration

```javascript
const { db, client } = await database.connect();
const migratedDown = await down(db, client);
migratedDown.forEach((fileName) => console.log("Migrated Down:", fileName));
```

### `status(MongoDb) → Promise<Array<{ fileName, appliedAt }>>`

Check which migrations are applied (or not.

```javascript
const { db } = await database.connect();
const migrationStatus = await status(db);
migrationStatus.forEach(({ fileName, appliedAt }) =>
  console.log(fileName, ":", appliedAt)
);
```

### `client.close() → Promise`

Close the database connection

```javascript
const { db, client } = await database.connect();
await client.close();
```
