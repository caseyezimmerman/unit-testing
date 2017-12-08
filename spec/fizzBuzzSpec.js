// FizBuzz
// -print the numbers 1-100
// -if the number is divisible by 3 print fizz insted of number
// -if the number is divisible by 5 print buzz insted of number
// -if the number is divisible by 3 and 5 print fizz and buzz insted of number

describe("FizzBuzz Unit Test", ()=>{
	// here is where we start writing the tests for THIS suite
	// we write a tst by starting with 'it'
	// it takes 2 args...
	// 1. name of the test
	// 2. the function to run (which is the test)
	it("FizzBuzz must be defined", ()=>{
		// expect takes 1 arg.... something to evaluate
		expect(fizzBuzz()).toBeDefined();
	})
})