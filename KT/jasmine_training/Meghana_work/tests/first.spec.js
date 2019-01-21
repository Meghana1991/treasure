xdescribe("First Test Suite", function () {
    it("First Test Case", function () {
        expect(true).toBe(true)
    })
})

//Fails as it checks for TYPE and VALUE
xdescribe("Basic Matches Suite", function () {
    xit("toBe Case", function () {
        expect("10").toBe(10)
    });

    //array check
    xit("toEqual case", function () {
        expect([10, 20]).toEqual([10, 20])
    });

    //object key value check
    xit("toEqual 2nd case", () => {
        expect({ name: 'Some', age: 20 }).toEqual({ name: 'Some' })
    })

    //`i` stands for ignore case
    xit("toMatch second check case", () => {
        expect('Happy New Year').toMatch(/happy/i);
    })

    it("toBeDefined case", () => {
        var obj = {};
        expect(obj).toBeDefined();
        expect(obj).not.toBeDefined();
        expect(obj.name).toBeDefined();
    })
}) 
//Custom function 
xdescribe("Using Custom Matchers", () => {
    it("toBeOfType test", () => {
        expect(10).custom_toBeOfTypeFn('string','Type Mismatch')
    })
})