function transform() {
    el = document.getElementById("input")
    el2 = document.getElementById("select")
    return el.value + " " + el2.options[el2.selectedIndex].text
}

function add_row() {
    table = document.getElementById("output_table")
    if (table.style.display == "none") {
        table.style.display = "table"
    }
    row = table.insertRow(-1)
    cell1 = row.insertCell(0)
    cell2 = row.insertCell(1)
    cell1.innerHTML = document.getElementById("input").value
    cell2.innerHTML = transform()
}