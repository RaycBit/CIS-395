window.onload = function(){
    var btn1 = document.getElementById("staffBtn");
    btn1.addEventListener("click",loadStaff);
}
function loadStaff(){
    console.log("loadStaff function loading.....");
    var tblRow=" ";
    for(var i = 0; i < staff.length; i++){
        tblRow += "<tr>";
        tblRow += "<td>" + staff[i].name + "</td>";
        tblRow += "<td>" + staff[i].title + "</td>";
        tblRow += "<td>" + staff[i].room + "</td>";
        tblRow += "<td>" + staff[i].phone + "</td>";
        tblRow += "<td>" + staff[i].email + "</td>";
        tblRow += "</tr>"
    }
    document.getElementById("staffTbl").innerHTML = tblRow;
}
    var staff = [
       {
        name:"Abdul Aziz",
        title:"Adjunct Lecturer",
        room:"",
        phone:"",
        email:"aaziz@bmcc.cuny.edu"
       },
       {
        name:"Ahmet Mete Kok",
        title:"Professor",
        room:"F-930S",
        phone:"(212) 220-1492",
        email:"amkok@bmcc.cuny.edu"
       }, 
       {
        name:"Alan P. Ramlal",
        title:"Adjunct Lecturer",
        room:"",
        phone:"",
        email:"aramlal@bmcc.cuny.edu"
       },
       {
        name:"Albert G. Delacruz",
        title:"Adjunct Lecturer",
        room:"",
        phone:"",
        email:" aldelacruz@bmcc.cuny.edu"
       },
       {
        name:"Albert H. Errera",
        title:"Professor",
        room:"F-930Q",
        phone:"(212) 220-1483",
        email:"aerrera@bmcc.cuny.edu"
       }

    ]
