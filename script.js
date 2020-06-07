var table = document.getElementById("myTable")

var dataTable = [{
    nama: "Zufar",
    kelas: 9,
    umur: 15
}, {
    nama: "pacar",
    kelas: 9,
    umur: 15
}, {
    nama: "mantan",
    kelas: 9,
    umur: 15
}, {
    nama: "gebetan",
    kelas: 10,
    umur: 16
}, {
    nama: "temen doang",
    kelas: 9,
    umur: 15
}, {
    nama: "masih temen",
    kelas: 9,
    umur: 15
}]

function createTable(arr) {
    var row = ''
    for (let i = 0; i < arr.length; i++) {
        row += `
            <tr>
              <td>${arr[i].nama}</td>
              <td>${arr[i].kelas}</td>
              <td>${arr[i].umur}</td>
            </tr>
          `
    }
    table.innerHTML = row
}

createTable(dataTable)

function filter() {
    var input, filter, table, tr, i, td, txtValue;
    input = document.getElementById("inputSearchData");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        namerow = tr[i].getElementsByTagName("td")[0];
        agerow = tr[i].getElementsByTagName("td")[1];
        nameTxt = namerow.textContent || namerow.innerText;
        ageTxt = agerow.textContent || agerow.innerText;
        if (nameTxt.toUpperCase().indexOf(filter) > -1 || ageTxt.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
    document.getElementById("inputSearchData").value = " "
}