// First Bad Version LC 278

// Pattern used: Binary Search


var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let beginningPtr = 0;
      let endingPtr = n;
      let middlePtr; 
      
      // the classic condition of binary search: 
      // the start and end pointers can meet but never 'cross over'
      while( beginningPtr <= endingPtr) {

        middlePtr = Math.floor( (beginningPtr + endingPtr) / 2 );

        // if the bad version is at the mid point, the first bad version
        // is to the left 
        if( isBadVersion(middlePtr) ) {
          endingPtr = middlePtr - 1;
        } else {
          // if the bad version is after the mid point the first bad version
          // is on the right 
          beginningPtr = middlePtr + 1; 
        }
      }

      return beginningPtr; 
      
  };
};