# Type Casting

Despite being a dynamically typed language, Zulu allows us to cast between primitive constants. Casting 
is performed using the `as` keyword followed by the atom naming the target type. 

```zulu
300 as :string
"Hello" as :atom
"420" as :number
```
Lists, tuples and maps cannot cast into other types and type casting is prohibited for user defined types.

