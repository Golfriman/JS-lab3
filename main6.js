function findVowels(str)
{
    //regex
    return str.match(/[aeiou]/gi).length;
}

console.log(findVowels("Hello"));
console.log(findVowels("why"));
