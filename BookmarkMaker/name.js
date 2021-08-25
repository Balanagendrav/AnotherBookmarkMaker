let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
}, ];

let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let submitBtnEl = document.getElementById("submitBtn");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let bookmarksListEl = document.getElementById("bookmarksList");
let bookmarkCount = 1;

function addBookmark(event) {
    event.preventDefault();
    let siteNameInputValue = siteNameInputEl.value;
    let siteUrlInputValue = siteUrlInputEl.value;
    if (siteNameInputValue === "" && siteUrlInputValue === "") {
        siteNameErrMsgEl.textContent = "*Required";
        siteUrlErrMsgEl.textContent = "*Required";
    } else if (siteNameInputValue === "") {
        siteNameErrMsgEl.textContent = "*Required";
        siteUrlErrMsgEl.textContent = "";
    } else if (siteUrlInputValue === "") {
        siteUrlErrMsgEl.textContent = "*Required";
        siteNameErrMsgEl.textContent = "";
    } else {
        siteNameErrMsgEl.textContent = "";
        siteUrlErrMsgEl.textContent = "";
        bookmarkCount = bookmarkCount + 1;
        bookmarkid = "bookmark" + bookmarkCount;
        bookmarks.push({
            "bookmarkId": bookmarkid,
            "name": siteNameInputValue,
            "url": siteUrlInputValue
        });
        let listItem = document.createElement("li");
        listItem.classList.add("input-details-container", "mt-4", "d-flex", "flex-row", "justify-content-between");
        bookmarksListEl.appendChild(listItem);

        let bookmarkTitle = document.createElement("h1");
        bookmarkTitle.classList.add("bookmark-title");
        bookmarkTitle.textContent = siteNameInputValue;
        listItem.appendChild(bookmarkTitle);

        let navigateItem = document.createElement("a");
        navigateItem.classList.add("btn", "btn-primary");
        navigateItem.textContent = "Visit";
        navigateItem.setAttribute("href", siteUrlInputValue);
        navigateItem.setAttribute("target", "_blank");
        listItem.appendChild(navigateItem);
    }
}

bookmarkFormEl.addEventListener("submit", addBookmark);
siteUrlInputEl.addEventListener("change", addBookmark);
siteNameInputEl.addEventListener("change", addBookmark);