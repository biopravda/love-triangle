/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var size =preferences.length;
  var i;var j; var acc=0;
  for (i=1; i<=size; i++ ){
    for (j=i+1; j<=size; j++ ){
      if(preferences[j-1]==i){
        for(var k=i+1; k<=size; k++){
          if(preferences[k-1]==j && preferences[i-1] == k) 
        
          acc++;
        };
      };
    };
  };
  return acc;
};
