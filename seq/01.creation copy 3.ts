import { seq } from 'doddle';

const example = seq(function*() {
    yield 1
    yield 2
    yield 3
})

for (const x of example) {
    console.log(x)
}

