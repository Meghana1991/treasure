describe("Spy Test", () => {

    beforeEach(() => {
        this.increment = (x) => {
            console.log('Increment')
            return x + 1;
        }

        spyOn(this, 'increment')
    })

    xit("First Scenario", () => {
        //Notice that console.log is NOT called
        var val = this.increment(20)
        expect(this.increment).toHaveBeenCalled()
        expect(val).toBeDefined()
    })

    /**
     * The above doesn't actually call the function
     * Hence follow the below approach
     */

    xit("Second Scenario - callthrough", () => {
        //Notice that console.log is called
        this.increment.and.callThrough();
        var val = this.increment(20)
        expect(this.increment).toHaveBeenCalledWith(20)
        expect(val).toBeDefined();
    })

    it("Third Scenario - callfake", () => {
        this.increment.and.callFake((val) => {
            return val * 2;
        })
        //Notice that console.log is NOT called
        var val = this.increment(20);
        expect(this.increment).toHaveBeenCalled()
        expect(val).toBe(40)
    })
    
})