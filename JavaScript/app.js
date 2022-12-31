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
// create new function for button click
function handleClick(){
    //grab datetime value from filter
    let date=ds.select("#datetime").property("value");
    let filterData=tableData;
    //if statment We’re applying a filter to our data based on a date value.
    if(date){
       filterData=filterData.filter(row=>row.datetime===date);
    };
    //call buildTable function with filtered data
    buildTable(filteredData);
}
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//build the table when page loads
buildTable(tableData);


