const tableData = MyArray1;
var tbody = d3.select('tbody');

function buildTable(data) {
  tbody.html('');

  data.forEach((dataRow) => {
    let row = tbody.append('tr');
    Object.values(dataRow).forEach((val) => {
      let cell = row.append('td');
      cell.text(val);
    });
  });
}
buildTable(tableData);

function updateFilters() {

  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");
  let filteredData = tableData;

  if (date) {

    filteredData = filteredData.filter(row => row.datetime === date);
  }
  if (city) {
    filteredData = filteredData.filter(row => row.city === city);
  }
  if (state) {
    filteredData = filteredData.filter(row => row.state === state);
  }
  if (country) {
    filteredData = filteredData.filter(row => row.country === country);
  }
  if (shape) {
    filteredData = filteredData.filter(row => row.shape === shape);
  }

  buildTable(filteredData);
}

d3.selectAll("#list-group-item").on("keyup", updateFilters);

buildTable(tableData);

// buildTable(tableData);

// function handleClick() {

//   let date = d3.select("#datetime").property("value");
//   let city = d3.select("#city").property("value");
//   let state = d3.select("#state").property("value");
//   let country = d3.select("#country").property("value");
//   let shape = d3.select("#shape").property("value");
//   let filteredData = tableData;

//   if (date) {

//     filteredData = filteredData.filter(row => row.datetime === date);
//   }
//   if (city) {
//     filteredData = filteredData.filter(row => row.city === city);
//   }
//   if (state) {
//     filteredData = filteredData.filter(row => row.state === state);
//   }
//   if (country) {
//     filteredData = filteredData.filter(row => row.country === country);
//   }
//   if (shape) {
//     filteredData = filteredData.filter(row => row.shape === shape);
//   }

//   buildTable(filteredData);
// }

// d3.selectAll("#filter-btn").on("click", handleClick);

// buildTable(tableData);
