# node-record-manager
Expose Create Read Update Delete (CRUD) methods on records provided by a backend. Fully functional to integrate well with React applications

# Context
Suppose a REST API exposes a route to fetch users, and returns these users in JSON format. Example:
```json
{
  "name": "Nicolas"
  "birthday": "1999-06-07"
  "address": {
    "street": "CoolStreet"
    "number": "42"
    "zip": "2323"
  }
}
```
When receiving this data, working on it raw is not a clean solution because you will have to rely on external functions in order to Update or Delete this data, this function would in turn need to know which route it needs to contact in order to perform the Update or Delete. Preferably, the update and delete functions should be implemented as methods on this object. This is one of the things that this library will solve for you.

For every value that you expect to receive from the backend, you create a class. This class will have static methods to Read and Create data, which will return instances of the class, on which you can then call Update and Delete methods on, depending on whether or not Updating and Deleting is allowed on the object. Furthermore, these objects can be used in a purely functional way, that is, you are not supposed to mutate the attributes in order to simulate an Update. You can instead call a functional setter, that will create an exact copy of the object, with the requested field modified to the new value. This design decision was made to ease making forms in React, specifically if you want to edit existing records, and have all the existing values prewritten in the form, or when you want to submit the form and already have a complete object with the Create method defined on it along with any validation errors.
