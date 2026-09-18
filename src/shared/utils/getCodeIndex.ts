export function getCodeIndex(){
    const allFirstElements = document.querySelectorAll("#root > main > *");

    allFirstElements.forEach((elem, index) => {
        if(elem.querySelector(".index")) return;

        const newIndexElem = document.createElement("i");

        newIndexElem.classList.add("index");
        newIndexElem.textContent = `${index + 1}.`;

        elem.prepend(newIndexElem);
    })
}