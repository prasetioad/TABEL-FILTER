//Saya Nyontek di w3 schooll, udah nyoba seharian sampe pusing mas 

function myFunction() {

    var ketikan = document.getElementById("ketikan");
    var filter = ketikan.value.toUpperCase();
    var table = document.getElementById("myTable");
    var tr = table.getElementsByTagName("tr")
    var i
    var td
    var txtValue

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}