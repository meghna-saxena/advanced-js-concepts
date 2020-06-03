# Big O complexity:

| Type             | Notation  | Meaning                                                                                                                                                         |
| ---------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Constant Time    | 1         | No matter how many elements we're working with, the algorithm/operation will always take the same amount of time.                                               |
| Logarithmic Time | log(n)    | You have this if doubling the number of elements you are iterating over doesn't double the amount of work. `Always assume that searching operations are log(n)` |
| Linear Time      | n         | Iterating through all elements in a collection of data. If you see a for loop spanning from '0' to 'array.length', you probably have 'n', or linear runtime.    |
| Quasilinear Time | n\*log(n) | You have this if doubling the number of elements you are iterating doesn't double the amount of work. `Always assume that sorting operations are n*log(n)`      |
| Quadratic Time   | n^2       | Every element in a collection has to be compared to every other element. 'The handshake problem'.                                                               |
| Exponential Time | 2^n       | If you add a `single` element to a collection, the processing power doubles.                                                                                    |
