// Isomorphic strings
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true


function isIsomorphic(s: string, t: string): boolean {

    const sMap = new Map();
    const tMap = new Map();
    for(let i = 0; i < s.length; i++) {
        if(sMap.has(s[i]) && sMap.get(s[i]) !== t[i]) {
            return false;
        }
        if(tMap.has(t[i]) && tMap.get(t[i]) !== s[i]) {
            return false;
        }
        sMap.set(s[i], t[i]);
        tMap.set(t[i], s[i]);
    }
    console.log(sMap)
    console.log(tMap)
    return true;
};

console.log(isIsomorphic("egg", "add")) 
console.log(isIsomorphic("foo", "bar"))
console.log(isIsomorphic("paper", "title"))
