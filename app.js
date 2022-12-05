const toggleSideBar = () => {
    const sideBar = document.querySelector(".side-bar");
    if (sideBar.classList.contains("hidden")) {
        sideBar.classList.remove("hidden");
    } else {
        sideBar.classList.add("hidden");
    }
}

function sortNames() {
    let i, switching, listItems, shouldSwitch, dir, switchCount = 0;
    switching = true;
    dir = "asc";

    while (switching) {
        switching = false;
        listItems = document.querySelectorAll(".list-item");
        for (i = 0; i < (listItems.length - 1); i++) {
            shouldSwitch = false;
            if (dir === "asc" && listItems[i].innerHTML.toLowerCase() > listItems[i + 1].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            } else if (dir === "desc" && listItems[i].innerHTML.toLowerCase() < listItems[i + 1].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            listItems[i].parentNode.insertBefore(listItems[i + 1], listItems[i]);
            switching = true;
            switchCount++;
        } else if (switchCount === 0 && dir === "asc") {
            dir = "desc";
            switching = true;
        }
    }
}

const clearIcon = document.querySelector(".clear-icon");
const searchBar = document.querySelector(".search");

searchBar.addEventListener("keyup", () => {
    if (searchBar.value && clearIcon.style.visibility !== "visible") {
        clearIcon.style.visibility = "visible";
    } else if (!searchBar.value) {
        clearIcon.style.visibility = "hidden";
    }
});

searchBar.addEventListener("input", searchActivist);

clearIcon.addEventListener("click", () => {
    searchBar.value = "";
    clearIcon.style.visibility = "hidden";
});

function searchActivist(e) {
    const li = [...document.querySelectorAll(".name")];
    // console.log(li.filter(item => item.innerText.toLowerCase().includes(e.currentTarget.value.innerText)));
    li.filter(item => item.innerText.toLowerCase().includes(e.target.value.toLowerCase()));
    console.log(li.filter(item => item.innerText.toLowerCase().includes(e.target.value.toLowerCase())))
}