# make-itterable-object
The main for function in JavaScript can be used to navigate to default objects such as arrays. These objects have an interface that makes them iterable. We want to see how we can make our custom objects iterable.

# How do it
*First you need to create a property called Symbol.iterator that holds a function.Name Type This property is a symbol type that is called by "for":
```shell
yourObject[Symbol.iterator] = function{...} <return {next}>
```
*This function returns an object that contains a method called next

*The next method must also return an object that contains two properties:

`value : value per iterate`

`done : Checks if there is any value for the next iteration <true or false>`

# Example
In the [sample.js](https://github.com/Miladxsar23/make-itterable-object/blob/master/sample.js) file I put a sample for you that you can read.
