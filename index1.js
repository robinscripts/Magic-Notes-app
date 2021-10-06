
//  Adding a note

shownote();

let addbtn=document.getElementById('addbtn');

addbtn.addEventListener('click',function (e) {
    let addtxt=document.getElementById('addtxt');
    let addtitle=document.getElementById('title');
    let notes=localStorage.getItem("notes");
    let title=localStorage.getItem("title");
    
    if (notes == null) {
      notesobj=[];
      titleobj=[];
    }
    else {
        notesobj=JSON.parse(notes);
        titleobj=JSON.parse(title);
    }

    notesobj.push(addtxt.value);
    titleobj.push(addtitle.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    localStorage.setItem("title", JSON.stringify(titleobj));
    addtxt.value="";
    addtitle.value="";

    shownote();

})

// function to show note

function shownote() {
    let notes=localStorage.getItem("notes");
    let title=localStorage.getItem("title");
    
    if (notes == null) {
      notesobj=[];
      titleobj=[];
    }
    else {
        notesobj=JSON.parse(notes);
        titleobj=JSON.parse(title);
    }
    

    let html="";
    notesobj.forEach(function (element,index) {
        html+=`
        
        <div class="my-3 mx-3 card notecard" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">${titleobj[index]}</h5>
            <p class="card-text">${element}</p>
            <a id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</a>
          </div>
        </div>
        
        `
    });

    let noteselm = document.getElementById("notes");
    if (notesobj.length != 0) {
      noteselm.innerHTML = html;
    } else {
      noteselm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}

// deletenote

function deletenote(index) {
    let notes=localStorage.getItem("notes");
    let title=localStorage.getItem("title");
    
    if (notes == null) {
      notesobj=[];
      titleobj=[];
    }
    else {
        notesobj=JSON.parse(notes);
        titleobj=JSON.parse(title);
    }
    notesobj.splice(index,1);
    titleobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));    
    localStorage.setItem("title", JSON.stringify(titleobj));    
    shownote();
}

// Search

let search = document.getElementById('inpt');

search.addEventListener('input',function () {
    let inputval=search.value.toLowerCase();
    let notecards= document.getElementsByClassName('notecard');

    Array.from(notecards).forEach(function (element) {
        let cardtxt=element.getElementsByTagName('h5')[0].innerText;
        if(cardtxt.includes(inputval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })








})