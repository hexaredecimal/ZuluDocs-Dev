# Zulu language constants

## Atoms
The most basic constant in Zulu is the atom constant. Atoms are named (or symbolic) constants, such that 
their name is their value. They are preceded with a leading `:`. 

### Defining atoms
Atoms are defined by a leading `:` and a series of letters, digits and underscores (`_`).

```zulu
:hello :world 
:atom_too :year_2025
```

There are atoms that are special as they used to mark the absence of values and returned as the result
of boolean expressions. These atoms are `nil`, `true` and `false`. 

### :Nil
The `:nil` atom is used as a value that stands in place of the absent value.

### :True and :False
The `:true` and `:false` atoms are returned as the result of boolean expressions such as comparing two numbers, etc.

All atoms even special atoms can be created by the programmer, even though some of them are also created by the 
interpreter at runtime. 


## Numbers
The second most basic constant in Zulu is the number. Numbers are used in mathematical expressions to compute values at runtime. 
Numbers can be both integer and decimal as they are not different at runtime. Numbers can contain `_` as a visual separator.

```zulu
200
50.5
600_500
```
## Strings
The third basic constant is the string constant. Strings are enclosed inside `" "`. String allow us to have values that represent text that can
be modified and displayed. String are immutable in Zulu, operations such as concatination create a new string internally.

```zulu
"Hello"
"This is a string"
```
## List
The list constant allows use to store values of any type in a single storage unit. The list constant is declared in side the `[]` symbols. 

```zulu
[3, 5, 6, 7, 8]
[:one, :two, 3, "four", 5]
```


## Map
The map constant is a reference constant that allows us to associate a key with a value. The map is declared like this:
```zulu
&{"Hello" -> "World", :one -> 4}
```
The `&` symbol is the reference symbol, this is because maps are reference types by default. More on references in the coming chapters

## Tuple

Tuples are used to store multiple items in a single variable. Tuples are similar to lists. They are declared using the `()` symbols. For a value to 
be a tuple it must have multiple values inside the `()` symbols, else it becomes are group expressions. 
```zulu
(:hello, :nil)
("Hello", "World")
```
