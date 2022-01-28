// Write a Function To Case-insensitively Match strings
    function findMatching(drivers, string) {
        return drivers.filter( driver =>
            driver.toLowerCase() === string.toLowerCase()
        )
    }
    // SOLUTION
    // function findMatching(source, sought) {
    //     return source.filter( possibleMatch =>
    //       possibleMatch.toLowerCase() === sought.toLowerCase()
    //     )
    //  }
    
// Write a Function To Partially Match Substrings
    function fuzzyMatch(drivers, string) {
        return drivers.filter( driver =>
            driver.split('')[0] === string.split('')[0]
        )
    }
    // SOLUTION
    // function fuzzyMatch(source, testString) {
    //     return source.filter( possibleMatch =>
    //       possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    //     )
    //   }

// Write a Function To Match object Values To a Provided string
    function matchName(drivers, string) {
        return drivers.filter( driver =>
            driver.name.toLowerCase() === string.toLowerCase()
        )
    }
