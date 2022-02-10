// copright reman sunuwar github = https://www.github.com/remansunuwarofficial/
//add btn element
const addBtn = document.getElementById("addBtn");
// listen to click event
addBtn.addEventListener('click', () => {
    // get note title and description
    let notetitle = document.getElementById("notetitle");
    let notedescription = document.getElementById("notedescription");

    // get notes from localStorage
    let notes = localStorage.getItem("notes");

    // creating note array for notes storing
    let noteArray;
    // check if notes is null or not
    if (notes === null) {
        // if null then blank array
        noteArray = [];
    } else {
        // else parse that array 
        noteArray = JSON.parse(notes);
    }

    //creating note object
    // create object of notes for storing that array values at an object
    let noteObj = {
        notetitle: notetitle.value,
        notedescription: notedescription.value,
        // date and time
        time: new Date().toLocaleTimeString().toString(),
        date: new Date().toLocaleDateString().toString(),
        impNote: false
    }

    noteArray.push(noteObj);

    localStorage.setItem("notes", JSON.stringify(noteArray));
    // console.log(noteArray);

    // when all works are done than title and description value will blank😍
    notetitle.value = "";
    notedescription.value = "";
    // calling shownotes function here that will show all the notes from localStorage
    showingnotes();
});
// calling shownotes function here that will show all the notes from localStorage
showingnotes();
// making showingnotes function for showing all notes
function showingnotes() {

    let notes = localStorage.getItem("notes");

    if (notes === null) {
        noteArray = [];
    } else {
        noteArray = JSON.parse(notes);
    }

    let htmluistring = "";

    for (let i = 0; i < noteArray.length; i++) {
        htmluistring += `<div class="noteCard card mx-2 my-2 uniqueClass" style="width: 18rem; border: 1px solid black;">
        <div class="card-body">
          <h5 class="card-title searchTitle gettitle">${noteArray[i].notetitle}</h5>
          <p class="card-text searchDescription getdescription">${noteArray[i].notedescription}</p>
          <p class="card-text">At ${noteArray[i].time} |&| On ${noteArray[i].date}</p>
          <button class="btn btn-primary" id="${i}" onclick="deleteNote(this.id);">delete</button>
          <button class="btn btn-primary update" id="${i}" onclick="updateNote(this.id)">update</button>
        
        </div>
      </div>`;

    }

    let yournotes = document.getElementById("yournotes");
    yournotes.innerHTML = htmluistring;

    if (noteArray.length !== 0) {
        yournotes.innerHTML = htmluistring;
    } else {
        yournotes.innerHTML = "<p id=\"NothingNullNote\">Nothing to show! Use \"Add a Note\" section above to add notes.</p>";
    }

}



function deleteNote(index) {
    // console.log(index);

    let notes = localStorage.getItem("notes")
    if (notes === null) {
        noteArray = [];
    } else {
        noteArray = JSON.parse(notes);
    }

    noteArray.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(noteArray));
    showingnotes();
}
/*

const update = document.getElementsByClassName("update");
Array.from(update).forEach((element) => {
    element.addEventListener("click", () => {
        let getParentElement = element.parentElement;
        // console.log(getParentElement);
        let getTitle = getParentElement.getElementsByClassName("card-title")[0].innerText;
        let getDescription = getParentElement.getElementsByClassName("card-text")[0].innerText;
        console.log(getDescription);
        console.log(getTitle);

        let title = document.getElementById("notetitle");
        let description = document.getElementById("notedescription");
        title.value = getTitle;
        description.value = getDescription;

    });

});


function updateNote(index) {

    let updateButton = document.createElement("button");
    updateButton.className = "btn btn-danger";
    updateButton.id = "updateNoteButton";
    let textNodeUpdate = document.createTextNode("Update");
    updateButton.appendChild(textNodeUpdate);
    // console.log(updateButton);

    addBtn.replaceWith(updateButton);

    let updateNoteButton = document.getElementById("updateNoteButton");

    updateNoteButton.addEventListener("click", () => {
       
        updateNoteButton.replaceWith(addBtn);
let notetitle = document.getElementById("notetitle");
let notedescription = document.getElementById("notedescription");
let noteObj = {
    notetitle: notetitle.value,
    notedescription: notedescription.value
}


noteArray.splice(index, 1, noteObj);


localStorage.setItem("notes", JSON.stringify(noteArray));
showingnotes();

    // notetitle.value = "";

//   notedescription.value = "";

// window.location.reload();

    });






}*/


function updateNote(index) {
    let notes = localStorage.getItem("notes")
    if (notes === null) {
        noteArray = [];
    } else {
        noteArray = JSON.parse(notes);
    }

    let getTitle = document.getElementsByClassName("gettitle");
    getTitle = getTitle[index].innerText;

    let getdescription = document.getElementsByClassName("getdescription");
    getdescription = getdescription[index].innerText;
    // console.log(getTitle);
    // console.log(getdescription);
    let notetitle = document.getElementById("notetitle");
    let notedescription = document.getElementById("notedescription");

    notetitle.value = getTitle;
    notedescription.value = getdescription;


    let updateButton = document.createElement("button");

    updateButton.className = "btn btn-danger";

    updateButton.id = "updateButton";

    let updateButtonText = document.createTextNode("update");
    updateButton.appendChild((updateButtonText));
    addBtn.replaceWith(updateButton);

    let update = document.getElementById("updateButton");
    update.addEventListener("click", () => {

        let notetitle = document.getElementById("notetitle");
        let notedescription = document.getElementById("notedescription");

        let noteObj = {
            notetitle: notetitle.value,
            notedescription: notedescription.value,
            time: new Date().toLocaleTimeString().toString(),
            date: new Date().toLocaleDateString().toString(),
            impNote: false
        }

        update.replaceWith(addBtn);
        noteArray.splice(index, 1, noteObj);

        localStorage.setItem("notes", JSON.stringify(noteArray));
        showingnotes();
        notetitle.value = "";
        notedescription.value = "";
    });

}

let searchbyTit = document.getElementById("searchbyTit");

searchbyTit.addEventListener("input", function () {
    let searchbyTitValue = searchbyTit.value.toUpperCase();

    let noteCards = document.getElementsByClassName("noteCard");

    Array.from(noteCards).forEach((element) => {
        let title = element.getElementsByClassName("searchTitle")[0].innerText.toUpperCase();
        // console.log(title);
        // console.log(description)
        // console.log(title.includes("h"))

        if (title.includes(searchbyTitValue)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });

});



let searchbyDesc = document.getElementById("searchbyDesc");

searchbyDesc.addEventListener("input", function () {
    let searchbyDescValue = searchbyDesc.value.toUpperCase();

    let noteCards = document.getElementsByClassName("noteCard");

    Array.from(noteCards).forEach((element) => {
        let description = element.getElementsByClassName("searchDescription")[0].innerText.toUpperCase();
        // console.log(title);
        // console.log(description)
        // console.log(title.includes("h"))
        // console.log(description)

        if (description.includes(searchbyDescValue)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });

});





const clearNote = document.getElementById("clearNote");

clearNote.addEventListener("click", () => {
    let askQA = confirm("Do you surely want to delete all notes");

    if (askQA === true) {
        localStorage.removeItem("notes");
        window.location.reload();
    } else {
        return;
    }
});




let themeIcon = document.getElementById("themeIcon");

themeIcon.addEventListener("click", () => {

    if (themeIcon.getAttribute("src").includes("img/moon-line.svg")) {


        themeIcon.src = "img/sun-warm.svg";
        localStorage.setItem("theme", "light");

    }

    else {

        themeIcon.src = "img/moon-line.svg";

        localStorage.setItem("theme", "dark");

    }

    if (localStorage.getItem("theme") === "light") {

        // let NothingNullNote = document.getElementById("NothingNullNote");
        // NothingNullNote.style.color = "#fff";
        document.body.style.backgroundColor = "#212529";

        // document.body.style.color = "white";
        let h1 = document.getElementsByTagName("h1");
        Array.from(h1).forEach((e) => {
            e.style.color = "white"

        });


        let label = document.getElementsByTagName("label");

        Array.from(label).forEach((e) => {
            e.style.color = "white";
        });

        let themeIcon = document.getElementById("themeIcon");
        themeIcon.src = "img/sun-warm.svg";


    } else if (localStorage.getItem("theme") === "dark") {

        // let NothingNullNote = document.getElementById("NothingNullNote");
        // NothingNullNote.style.color = "#000";

        document.body.style.backgroundColor = "white";
        let h1 = document.getElementsByTagName("h1");
        Array.from(h1).forEach((e) => {
            e.style.color = "black";

        });


        let label = document.getElementsByTagName("label");
        Array.from(label).forEach((e) => {
            e.style.color = "black";
        });


        let themeIcon = document.getElementById("themeIcon");
        themeIcon.src = "img/moon-line.svg";
    } 

});




if (localStorage.getItem("theme") === "light") {
    // let NothingNullNote = document.getElementById("NothingNullNote");
    // NothingNullNote.style.color = "#fff";
    document.body.style.backgroundColor = "#212529";
    // document.body.style.color = "white";
    let h1 = document.getElementsByTagName("h1");

    Array.from(h1).forEach((e) => {
        e.style.color = "white"

    });

    let label = document.getElementsByTagName("label");

    Array.from(label).forEach((e) => {
        e.style.color = "white";
    });

    let themeIcon = document.getElementById("themeIcon");
    themeIcon.src = "img/sun-warm.svg";


} else if (localStorage.getItem("theme") === "dark") {

    // let NothingNullNote = document.getElementById("NothingNullNote");
    // NothingNullNote.style.color = "#000";


    document.body.style.backgroundColor = "white";
    let h1 = document.getElementsByTagName("h1");
    Array.from(h1).forEach((e) => {
        e.style.color = "black";

    });
    let label = document.getElementsByTagName("label");
    Array.from(label).forEach((e) => {
        e.style.color = "black";
    });


    let themeIcon = document.getElementById("themeIcon");
    themeIcon.src = "img/moon-line.svg";

} 

// copright reman sunuwar github = https://www.github.com/remansunuwarofficial/