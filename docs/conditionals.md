# Conditionals

Conditional expressions allow use to make decisions and branch into different parts. Zulu supports the `if` expression. The if expression 
is divided into two parts:

## If without else
```zulu
if 1 > 2 then :greater
```
This will return the atom `:greater` if 1 > 2, if not then the special atom `:false` is returned. 

## If else
```zulu
if 2 == 2 then :equal else :not_equal

```
This will return the atom `:equal` if 2 == 2, if not then the `else` expression will execute and return `:not_equal`.


