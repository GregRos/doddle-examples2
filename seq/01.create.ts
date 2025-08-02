import { seq } from 'doddle';
import { printDictionary } from '../common';

// Ways to create sequences:

// Passing a bunch of items:
const fromItems = seq.of(
    1, 
    2,
    3
)


// Passing a generator function:
const fromGeneratorFunction = seq(function*() {
    yield 1
    yield 2
    yield 3
})

// Passing an iterable, like an array:
const fromArray = seq([1, 2, 3])

// Passing an array-like object (works for NodeList):
const fromArrayLike = seq({
    0: 1,
    1: 1,
    2: 2,
    length: 1
})

// Also works for typed arrays:
const fromTypedArray = seq(new Uint32Array([1, 2, 3]))

try {
    // @ts-expect-error You can't create a Seq from a string!
    const notFromString = seq("abc")
} catch (e) {
    console.warn("You can't use a string!")
}

console.log(printDictionary({
    fromArray,
    fromArrayLike,
    fromGeneratorFunction,
    fromItems,
    fromTypedArray
}))