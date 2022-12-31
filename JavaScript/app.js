//import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
//create new function.
function buildTable(data){
    //clear out any existing data
    tbody.html("");

//add forEach function
data.forEach((dataRow) => {
    let row = tbody.append("tr");
    //add loop through datarow
Object.values(dataRow).forEach((val) => {
    //create a variable to append data to a table:
let cell = row.append("td");

// next line we'll add the values.
cell.text(val);
}
);

});
}



