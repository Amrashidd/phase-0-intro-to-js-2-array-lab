// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];




  function destructivelyAppendCat() { cats.push("Ralph")};

  function destructivelyPrependCat()  { cats.unshift("Bob")};

function destructivelyRemoveLastCat() {cats.pop()};
function destructivelyRemoveFirstCat() {cats.shift()};


function appendCat (){
    appendCat = [...cats, "Broom"]
    return appendCat;
}

function prependCat () {
    prependCat = ["Arnold", ...cats]
    return prependCat;
}
    
function removeLastCat() {
    removeLastCat = [...cats]
    removeLastCat.splice (-1);
    return removeLastCat;
    }


    function removeFirstCat() {
        removeFirstCat = [...cats]
        removeFirstCat.splice (0,1);
        return removeFirstCat;
        }

