var input = document.getElementById("input");
var btn = document.getElementById("btn");
var titleBtn = document.getElementById("titleBtn");

var moodTitle = "Add";
var updataIndex ;
var allText ;


if ( localStorage.getItem("ourToDo") == null ) {
    allText = "" ;
} 
else {
    allText = JSON.parse( localStorage.getItem("ourToDo") )
}

function addText() {

    var inputValue = {
        text : input.value
    };

    if (moodTitle === "Add") {
        allText.push(inputValue)
    }
    else{
        allText[updataIndex] = inputValue ;
        titleBtn.innerHTML = "Add" ;
        moodTitle = "Add" ;
    }
    
    localStorage.setItem("ourToDo", JSON.stringify(allText))

    displayTable()
    clearInputs()
}

function displayTable(){
    var textList = ""
    for (let i = 0; i < allText.length; i++) {
        textList += `
        <tr>
        <td>${i+1}</td>
        <td><p>${allText[i].text}</p></td>
        <td><button onclick="delRow(${i})" class="ui red button">Delete</button></td>
        <td><button onclick="updata(${i})" class="ui yellow button">Edit</button></td>
        </tr>
        `
    }
    document.getElementById("tbody").innerHTML = textList;
}

function clearInputs(){
    input.value = ""
}

function delRow(i){
    allText.splice(i,1)
    displayTable()
}

function deleteAll (){
    allText.splice(0)
    localStorage.setItem("ourToDo", JSON.stringify(allText))
    displayTable()
}

function updata(i) {
    input.value = allText[i].text ;
    titleBtn.innerHTML = "updata" ;
    moodTitle = "updata" ;
    updataIndex = i ;
}