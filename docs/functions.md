# Functions

Zulu is said to be a functional programming language, that is to say, functions are first-class citizens in this language. 
Functions can be created, called, stored, passed to functions and returned from other functions. 
In this section I am just going to introduce the basic usage and creation of functions in Zulu. 

In Zulu all functions must always return a value.

```zulu
fn add(x, y) => x + y
fn greet(name) => io::println("Hello " + name)
```

## Clauses
In Zulu functions can also use clauses as a way to match which function should be called. 

```zulu
fn out(:stdout) => io::println("The clause has :stdout")
fn out(:stderr) => io::println("The clause has :stderr")
```

This allows us to simulate function overloading similar to languages such as java. In the code above the function 
`out` will have a different body depending on the input provided during the call.

## Clause guards
Clauses can also have guards that only run the body when the guards match or result in `true` atoms.

```zulu
fn add(x, y) =>
  where types::is_number(x)
    && types::is_number(y) => x / y
```
The code above declares the `add` function with a clause that checks if the type of the input parameters is number. If true then the body
will execute and if not an error will be raised.

```zulu
add(50, 6) // Fine
add("Hello", "World") // Error
```
