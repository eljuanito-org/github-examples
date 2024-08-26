# Markdown example

- headings
- [Unordered lists](#unordered-lists)
- ordered lists
- text formating
- code
- tables
- blockquotes
- [links](#links)
- images
- autolists
- lists

https://github.github.com/gfm/

https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

## Unordered lists
We can create unordered lists in markdown by using hyphens -.

Next we have two lists, they can be destinguished because there's a different symbol for each one:
- foo
- bar
+ baz
+ baz

## Ordered lists
Again we have two different lists, that uses a different symbols to differentiate. Also we can see how the numbers in the preview keep the ordered secuence, despite having written the same number repeatedly in the raw version.
1. foo
2. bar
3) baz
3) baz
3) baz

## Text formatting
*italics*
_italics_
**bold**
__bold__
~~striketrough~~

## Code
### Inline code
You can print to the terminal using `puts "hello world!"` command.

### Multiline code
#### Without highlightning

```
def hello_world:
    puts "hello world"
end
```
#### With highlightning

```rb
def hello_world:
    puts "hello world"
end
```

## Tables
| foo | bar |
| --- | --- |
| baz | bim |

| abc | defghi |
:-: | -----------:
bar | baz

| abc | def |
| --- | --- |
| bar |
| bar | baz | boo |

## Blockquotes
> # Foo
> bar
> baz

## Links
[Github page](https://github.com)

[Secret page](Secret.md)

## Task list
- [ ] Item 1