# User defined data structures

User defined data structures are a very import feature in any modern programming
language that wants to be taken seriously. They allow us to describe and model complex
data structures using the built-in types and other user defined structures. 

```zulu
type Person struct {name, age}
```

The code above declares a new user defined type `Person` that has two fields, `name` and `age`. 
To create an instance of this type use the following syntax. 

```zulu
Person {name: "John", age: 45}
```

User defined data structures can also have methods, both type methods and instance methods. 

```zulu
impl Person = 
  fn new(name, age)
    where types::is_string(name)
      && types::is_number(age) => Person {name: name, age: age}

  fn greet(self) => io::println("Hello, my name is ${self.name}")
;
```

Inside the `impl` block, functions that have `self` as the first argument are instance methods and 
the rest are simply type methods.

