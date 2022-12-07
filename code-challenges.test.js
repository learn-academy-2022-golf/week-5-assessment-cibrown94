// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

describe("deck", () => {
it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'. A full house is exactly one pair and one three of a kind.", () => {
  const hand1 = [5, 5, 5, 3, 3]
  const hand1Result1 = true
  const hand2 = [5, 5, 3, 3, 4]
  const hand1Result2 = false
  const hand3 = [5, 5, 5, 5, 4]
  const hand1Result3 = false
  const hand4 = [7, 2, 7, 2, 7]
  const hand1Result4 = true
  // expect(deck(hand1)).toEqual(true)
  // expect(deck(hand2)).toEqual(false)
  // expect(deck(hand3)).toEqual(false)
  // expect(deck(hand4)).toEqual(true)
  expect(deck(hand1)).toEqual(expect(hand1Result1))
  expect(deck(hand2)).toEqual(expect(hand1Result2))
  expect(deck(hand3)).toEqual(expect(hand1Result3))
  expect(deck(hand4)).toEqual(expect(hand1Result4))
})
})



// b) Create the function that makes the test pass.

// PSEUDO CODE:

const deck = (array) => {
  for(let i = 0; i < array.length; i++){
if ((array[0] == array[1]) && (array[1] == array[2]
				&& (array[3] == array[4]) && // Two of a Kind
		(array[2] != array[3])// make sure they are of different values
				// or two of a kind and a three of a kind
				|| (array[0] == array[1])&& // Two of a Kind
						// Three of a kind
						((array[2] == array[3]) && (array[3] == array[4]))
				// make sure they are of different values
				&& (array[1] != array[2])))
        {
        return true;
      } else {
        return false;
      }
      }
}


// This is the error Message i keep getting. It will keep stating that my expects statements are wrong. Unless i use my false positive one. 

● deck › takes in an array of 5 numbers and determines whether or not the array is a 'full house'. A full house is exactly one pair and one three of a kind.

expect(received).toEqual(expected) // deep equality

Expected: {"lastCalledWith": [Function throwingMatcher], "lastReturnedWith": [Function throwingMatcher], "not": {"lastCalledWith": [Function throwingMatcher], "lastReturnedWith": [Function throwingMatcher], "nthCalledWith": [Function throwingMatcher], "nthReturnedWith": [Function throwingMatcher], "toBe": [Function throwingMatcher], "toBeCalled": [Function throwingMatcher], "toBeCalledTimes": [Function throwingMatcher], "toBeCalledWith": [Function throwingMatcher], "toBeCloseTo": [Function throwingMatcher], "toBeDefined": [Function throwingMatcher], "toBeFalsy": [Function throwingMatcher], "toBeGreaterThan": [Function throwingMatcher], "toBeGreaterThanOrEqual": [Function throwingMatcher], "toBeInstanceOf": [Function throwingMatcher], "toBeLessThan": [Function throwingMatcher], "toBeLessThanOrEqual": [Function throwingMatcher], "toBeNaN": [Function throwingMatcher], "toBeNull": [Function throwingMatcher], "toBeTruthy": [Function throwingMatcher], "toBeUndefined": [Function throwingMatcher], "toContain": [Function throwingMatcher], "toContainEqual": [Function throwingMatcher], "toEqual": [Function throwingMatcher], "toHaveBeenCalled": [Function throwingMatcher], "toHaveBeenCalledTimes": [Function throwingMatcher], "toHaveBeenCalledWith": [Function throwingMatcher], "toHaveBeenLastCalledWith": [Function throwingMatcher], "toHaveBeenNthCalledWith": [Function throwingMatcher], "toHaveLastReturnedWith": [Function throwingMatcher], "toHaveLength": [Function throwingMatcher], "toHaveNthReturnedWith": [Function throwingMatcher], "toHaveProperty": [Function throwingMatcher], "toHaveReturned": [Function throwingMatcher], "toHaveReturnedTimes": [Function throwingMatcher], "toHaveReturnedWith": [Function throwingMatcher], "toMatch": [Function throwingMatcher], "toMatchInlineSnapshot": [Function throwingMatcher], "toMatchObject": [Function throwingMatcher], "toMatchSnapshot": [Function throwingMatcher], "toReturn": [Function throwingMatcher], "toReturnTimes": [Function throwingMatcher], "toReturnWith": [Function throwingMatcher], "toStrictEqual": [Function throwingMatcher], "toThrow": [Function throwingMatcher], "toThrowError": [Function throwingMatcher], "toThrowErrorMatchingInlineSnapshot": [Function throwingMatcher], "toThrowErrorMatchingSnapshot": [Function throwingMatcher]}, "nthCalledWith": [Function throwingMatcher], "nthReturnedWith": [Function throwingMatcher], "rejects": {"lastCalledWith": [Function anonymous], "lastReturnedWith": [Function anonymous], "not": [Object], "nthCalledWith": [Function anonymous], "nthReturnedWith": [Function anonymous], "toBe": [Function anonymous], "toBeCalled": [Function anonymous], "toBeCalledTimes": [Function anonymous], "toBeCalledWith": [Function anonymous], "toBeCloseTo": [Function anonymous], "toBeDefined": [Function anonymous], "toBeFalsy": [Function anonymous], "toBeGreaterThan": [Function anonymous], "toBeGreaterThanOrEqual": [Function anonymous], "toBeInstanceOf": [Function anonymous], "toBeLessThan": [Function anonymous], "toBeLessThanOrEqual": [Function anonymous], "toBeNaN": [Function anonymous], "toBeNull": [Function anonymous], "toBeTruthy": [Function anonymous], "toBeUndefined": [Function anonymous], "toContain": [Function anonymous], "toContainEqual": [Function anonymous], "toEqual": [Function anonymous], "toHaveBeenCalled": [Function anonymous], "toHaveBeenCalledTimes": [Function anonymous], "toHaveBeenCalledWith": [Function anonymous], "toHaveBeenLastCalledWith": [Function anonymous], "toHaveBeenNthCalledWith": [Function anonymous], "toHaveLastReturnedWith": [Function anonymous], "toHaveLength": [Function anonymous], "toHaveNthReturnedWith": [Function anonymous], "toHaveProperty": [Function anonymous], "toHaveReturned": [Function anonymous], "toHaveReturnedTimes": [Function anonymous], "toHaveReturnedWith": [Function anonymous], "toMatch": [Function anonymous], "toMatchInlineSnapshot": [Function anonymous], "toMatchObject": [Function anonymous], "toMatchSnapshot": [Function anonymous], "toReturn": [Function anonymous], "toReturnTimes": [Function anonymous], "toReturnWith": [Function anonymous], "toStrictEqual": [Function anonymous], "toThrow": [Function anonymous], "toThrowError": [Function anonymous], "toThrowErrorMatchingInlineSnapshot": [Function anonymous], "toThrowErrorMatchingSnapshot": [Function anonymous]}, "resolves": {"lastCalledWith": [Function anonymous], "lastReturnedWith": [Function anonymous], "not": [Object], "nthCalledWith": [Function anonymous], "nthReturnedWith": [Function anonymous], "toBe": [Function anonymous], "toBeCalled": [Function anonymous], "toBeCalledTimes": [Function anonymous], "toBeCalledWith": [Function anonymous], "toBeCloseTo": [Function anonymous], "toBeDefined": [Function anonymous], "toBeFalsy": [Function anonymous], "toBeGreaterThan": [Function anonymous], "toBeGreaterThanOrEqual": [Function anonymous], "toBeInstanceOf": [Function anonymous], "toBeLessThan": [Function anonymous], "toBeLessThanOrEqual": [Function anonymous], "toBeNaN": [Function anonymous], "toBeNull": [Function anonymous], "toBeTruthy": [Function anonymous], "toBeUndefined": [Function anonymous], "toContain": [Function anonymous], "toContainEqual": [Function anonymous], "toEqual": [Function anonymous], "toHaveBeenCalled": [Function anonymous], "toHaveBeenCalledTimes": [Function anonymous], "toHaveBeenCalledWith": [Function anonymous], "toHaveBeenLastCalledWith": [Function anonymous], "toHaveBeenNthCalledWith": [Function anonymous], "toHaveLastReturnedWith": [Function anonymous], "toHaveLength": [Function anonymous], "toHaveNthReturnedWith": [Function anonymous], "toHaveProperty": [Function anonymous], "toHaveReturned": [Function anonymous], "toHaveReturnedTimes": [Function anonymous], "toHaveReturnedWith": [Function anonymous], "toMatch": [Function anonymous], "toMatchInlineSnapshot": [Function anonymous], "toMatchObject": [Function anonymous], "toMatchSnapshot": [Function anonymous], "toReturn": [Function anonymous], "toReturnTimes": [Function anonymous], "toReturnWith": [Function anonymous], "toStrictEqual": [Function anonymous], "toThrow": [Function anonymous], "toThrowError": [Function anonymous], "toThrowErrorMatchingInlineSnapshot": [Function anonymous], "toThrowErrorMatchingSnapshot": [Function anonymous]}, "toBe": [Function throwingMatcher], "toBeCalled": [Function throwingMatcher], "toBeCalledTimes": [Function throwingMatcher], "toBeCalledWith": [Function throwingMatcher], "toBeCloseTo": [Function throwingMatcher], "toBeDefined": [Function throwingMatcher], "toBeFalsy": [Function throwingMatcher], "toBeGreaterThan": [Function throwingMatcher], "toBeGreaterThanOrEqual": [Function throwingMatcher], "toBeInstanceOf": [Function throwingMatcher], "toBeLessThan": [Function throwingMatcher], "toBeLessThanOrEqual": [Function throwingMatcher], "toBeNaN": [Function throwingMatcher], "toBeNull": [Function throwingMatcher], "toBeTruthy": [Function throwingMatcher], "toBeUndefined": [Function throwingMatcher], "toContain": [Function throwingMatcher], "toContainEqual": [Function throwingMatcher], "toEqual": [Function throwingMatcher], "toHaveBeenCalled": [Function throwingMatcher], "toHaveBeenCalledTimes": [Function throwingMatcher], "toHaveBeenCalledWith": [Function throwingMatcher], "toHaveBeenLastCalledWith": [Function throwingMatcher], "toHaveBeenNthCalledWith": [Function throwingMatcher], "toHaveLastReturnedWith": [Function throwingMatcher], "toHaveLength": [Function throwingMatcher], "toHaveNthReturnedWith": [Function throwingMatcher], "toHaveProperty": [Function throwingMatcher], "toHaveReturned": [Function throwingMatcher], "toHaveReturnedTimes": [Function throwingMatcher], "toHaveReturnedWith": [Function throwingMatcher], "toMatch": [Function throwingMatcher], "toMatchInlineSnapshot": [Function throwingMatcher], "toMatchObject": [Function throwingMatcher], "toMatchSnapshot": [Function throwingMatcher], "toReturn": [Function throwingMatcher], "toReturnTimes": [Function throwingMatcher], "toReturnWith": [Function throwingMatcher], "toStrictEqual": [Function throwingMatcher], "toThrow": [Function throwingMatcher], "toThrowError": [Function throwingMatcher], "toThrowErrorMatchingInlineSnapshot": [Function throwingMatcher], "toThrowErrorMatchingSnapshot": [Function throwingMatcher]}
Received: true

  26 |   // expect(deck(hand3)).toEqual(false)
  27 |   // expect(deck(hand4)).toEqual(true)
> 28 |   expect(deck(hand1)).toEqual(expect(hand1Result1))
     |                       ^
  29 |   expect(deck(hand2)).toEqual(expect(hand1Result2))
  30 |   expect(deck(hand3)).toEqual(expect(hand1Result3))
  31 |   expect(deck(hand4)).toEqual(expect(hand1Result4))

  at Object.toEqual (code-challenges.test.js:28:23)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.58 s, estimated 1 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.




-------------------------------------------------
THIS IS THE FALSE POSITIVE TEST PASS 

//   PASS  ./code-challenges.test.js
//   deck
//     ✓ takes in an array of 5 numbers and determines whether or not the array is a 'full house'. A full house is exactly one pair and one three of a kind. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.395 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.17s.

const deck = (array) =>{
  for(i=0; i<5; i++)
{
  for(j=i+1; j<5; j++)
  {
    if(deck[i] == deck[j])
      return true;
  }
 }
  }
Doing this code with the jest test at the top, passed the code. I feel like something is wrong. Than i fixed my expect statements to be sense of it all. I got the right expect statements, than the function was wrong. 

-------------------------------------------------