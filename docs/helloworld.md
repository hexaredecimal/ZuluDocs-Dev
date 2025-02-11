## HelloWorld

Hello world is the most basic program a programmer can write. Lets get into the code and write our own
version of the program in Zulu.


```zulu
module :main

import :io

fn main() => io::println("Hello, world")

```

## Explanation
The fist line `module :main` declares a module with the name main. All functions and type are declared inside modules
in Zulu. Modules allow use to write reusable code, hence they are importable using the import keyword. The next 
line is the import statement (`import :io`), which imports the `io` module which contains functions for writing and reading
to and from the standard output and input. You may have noticed that the module name and imported module are prefixed by
a colon, that is because they are atoms. Atoms are discussed in the next chapter. 

We then get the first function definition for the main function. Functions are declared with the `fn` keyword followed by
the name of the function. Main is a special function because it is used as the entry point for the program. 
Between the `()` input parameters can be listed. The function body is a single expression that is expected to follow the 
`=>` symbol. All functions have a single expression as the body, in order to perform multiple expressions use the block
expression. The block expression will also be discussed in the following chapters.


