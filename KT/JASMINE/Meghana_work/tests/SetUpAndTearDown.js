
/**
 * The order of execution is >
 * beforeAll
 * 
 * beforeEach
 * Running test 1
 * afterEach
 * 
 * beforeEach
 * Running test 2
 * afterEach
 * 
 * afterAll 
 * beforeAll and afterAll executes only once
 **/
xdescribe("Setup Teardown", () => {
    var obj;
    beforeEach(() => {
       obj = [10,20];
        console.log('beforeEach')
    })

    beforeAll(() => {
        console.log('beforeAll')
    })

    afterEach(() => {
        console.log('afterEach')
    })

    afterAll(() => {
        console.log('afterAll')
    })

    it("First case", () => {
        console.log('Running test 1')
        expect(10).toBe(10)
    });

    it("First case", () => {
        console.log('Running test 2')
        expect(obj).toContain(10)
    });
    
})