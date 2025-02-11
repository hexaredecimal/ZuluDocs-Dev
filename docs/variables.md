## Variables
A variable is a named storage location that holds a value or data. These values can change during the execution of a program. Variables are essential for storing and manipulating data in computer programs.

In Zulu variables are declared using the `let` keyword followed by the `in` keyword, used to mark start the expression that they might be used for. 

```zulu
let 
  name = "John Doe"
  result = math::PI() * 2
in io::println("Hello " + name + " 2 x PI is " + result)
```

The code above declares two variables, `name` and `result`. Both variables are used in the string concatination 
expression and the result is printed to the standard output. You can think of the space between `let` and `in` as the 
variable declaration zone and then after the `in` is the expression zone.

