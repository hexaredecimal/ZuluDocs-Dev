## Pattern Matching

The match expression allows you to check if a value is an expected value or type. 
The match expression takes a match expression, followed by a list of match cases and their 
respective bodies to run if they match. The default case is represented by an underscore symbol.
Lets match some values. 

## Constant Matching
When matching constants the match expression behaves like a switch statement. It checks if the match expression is equals to the case.

```zulu
match :true
  | :false -> io::println("False")
  | :true  -> io::println("True")
```


## Tuple Matching
```zulu
match ("Hello", :nil)
  | (t, :nil) -> io::println("The tuple has " + t + " and :nil")
  | (_, _) -> io::println("The tuple has unexpected values")
  | _ -> io::println("Some non tuple expression was passed")
```

The code above matches the tuple `("Hello", :nil)` with the match cases below. If a case matches then its body runs. 
The case that will match here is the first one `(t, :nil)`. In this case t will be a match variable that has the value `"Hello"`
since it matches the first value of the tuple and the second value is matched directly using the atom.

## List Matching
List pattern matching works similarly to languages such as Ocaml and Standard ML. 
```zulu
match [1,2,3,4]
  | [head:tail] -> io::println("Head = " + head + ", tail = " + tail)
  | [one] -> io::println("The list has only one value: " + one)
  | [] -> io::println("The list is empty")
```

The code above matches the list `[1,2,3,4]`. In this match expression the first case will match because it tries to grab the top value
in the list and assign it to head, then assign a new list of the other values to tail. This will succeed because the list has enough items
to create the new list after the top item has been created.




