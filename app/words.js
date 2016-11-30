module.exports = function (Counts){
 var expectedCounts = {};
 var words = Counts.replace(/[\n\t]/gi,' ')
                .replace(/ {2,}/g," ").split(' '); 
 words.forEach (function (word){
   if (Object.hasOwnProperty.call(expectedCounts, word)){
     expectedCounts[word]+=1;
   }
   else {
     expectedCounts[word] = 1;
   }
 });

 return expectedCounts;
}

