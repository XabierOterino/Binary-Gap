/**
 * Suppose a positive integer N is given. Determine the ninary representation of N, and
 * find the longest sibsequence of form 10*1 in this representation, where 0* stands for any number
 * of zeros in in the sequence. Examples: 11, 101, 1001, 10001 etc. Return the number of 
 * zeros in the longest sequence you found. If you didnt find such a sequence, return zero
 */

const getBinaryGap = (n) =>{
    // Transform to binary string and spread characters in an array
    let characters = [...n.toString(2)]
    //last zero count
    let last = 0;
    //current zero count
    let current = 0;

    // loop trough the characters
    for(char of characters){
        // if zero start to count
        if(char==0) current++;
        //if one compare current zero count with latest, and if current is bigger set last to current
        if(char==1){
            last = Math.max(last, current)
            current = 0;
        }
        
    }
    // repeat comparation after finishing so if it end in 0 will make the comparison too
    last = Math.max(last, current)
    //return biggest count found
    return last
}

console.log(getBinaryGap(73289794))
