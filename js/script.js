
const grigliaElement = document.querySelector("#griglia");

for (let i = 1; i <= 100; i++) {

    const newElement = document.createElement("div");

    newElement.innerHTML = i;
    newElement.className = "square";

    if (i % 15 == 0) {
        newElement.innerHTML = `fizzbuzz`;
        newElement.className += " fizzbuzz";
        
    } else {

        if(i % 5 == 0) {
            newElement.innerHTML = `buzz`;
            newElement.className += " buzz";
        }

        if(i % 3 == 0) {
            newElement.innerHTML = `fizz`;
            newElement.className += " fizz";
        }
    }

    grigliaElement.append(newElement);

} 