var customMatchers = {
    custom_toBeOfTypeFn: (util, customEqualityTesters) => {
        return {
            compare: (actual, expected, message) => {
                var retVal = {}
                if (expected == 'number') {
                    retVal.pass = util.equals(typeof actual, expected, customEqualityTesters)
                    if (retVal.pass) {
                        retVal.message = "Expecteddddd " + typeof actual + " to be " + expected + " " + message
                    } else {
                        retVal.message = "Expecteddddd " + typeof actual + " to not be " + expected + " " + message
                    }
                }
                return retVal;
            }
        }
    }
}

beforeEach(() => {
    jasmine.addMatchers(customMatchers)
})