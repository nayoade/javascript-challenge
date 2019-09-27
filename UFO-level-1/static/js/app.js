 
// UFO Sightings - Level one 

// Identify  need variable 
let tbody = d3.select("tbody");
// From data.js
var tableData = data;

// Setup the "Function" to Build the table
function buildTable(data){
    // Start By Clearing Existing Data
    tbody.html("");
    // Loop Through `data` 
    data.forEach((dataRow) => {
        // Append Table Row `tr` to the Table Body `tbody`
        let row = tbody.append("tr");
        // `Object.values` & `forEach` to Iterate Through Values
        Object.values(dataRow).forEach((val) => {
            // Append a Cell to the Row for Each Value
            let cell = row.append("td");
            cell.text(val);
        });
    })
}
// Setup Click Function  the ButEvent that Triggers a Function When the Button is Clicked
function handleClick(){
    // Retain page so it does not refreshing during looping 
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    let date = d3.select("#datetime").property("value");
    let SortRecord = tableData;

    // Check if a Date was Entered & Filter Data Using that Date;
    if(date) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        SortRecord = SortRecord.filter((row) => row.datetime === date);
    }
    // Build Table with Filtered Data
    buildTable(SortRecord);
}
// `on` Function to attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click", handleClick);
// Build Table with data.js 
buildTable(tableData);
