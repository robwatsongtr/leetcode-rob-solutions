/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if(s.length != t.length) return false;
  
  let sCount = {};
  let tCount = {};
  
  for( let val of s ) { sCount[val] = ( sCount[val] || 0 ) + 1; } 
  for( let val of t ) { tCount[val] = ( tCount[val] || 0 ) + 1; }
  
  for( let key in sCount) {
      if( !(key in tCount) ) return false; 
      if( tCount[key] !== sCount[key] ) return false; 
  }
  return true; 
};


console.log( isAnagram('qwerty', 'qeywrt') ); // true 
console.log( isAnagram('aabbccdd', 'ddccaabb') ); // true
console.log( isAnagram('aabbccdd', 'ddccaabbb') ); // false