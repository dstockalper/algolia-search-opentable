/*
###################################################################################################################################################
USER INSTRUCTIONS
- Install NodeJS @ https://nodejs.org/en/download/
- Create a new directory to house restaurants_list.json and restaurants_info.csv
- From the command line, run the following from inside the directory to 1) initialize a node project, 2) fetch csv parsing module, 3) run the file:
	1) >> npm init
	2) >> npm install csv --save
	3) >> node import_json.js

##################################################################################################################################################
*/

// Dependencies
const path  = require('path');
const fs    = require('fs');
const parse = require('csv-parse/lib/sync');

// File path of csv and json files to process
var csv_path           = path.join(__dirname, 'restaurants_info.csv');
var json_path          = path.join(__dirname, 'restaurants_list.json');
var combined_json_path = path.join(__dirname, 'restaurants_combined_data.json');

// Get json file contents and parse into array of objects
var json_contents = fs.readFileSync(json_path, "utf8");
var json          = JSON.parse(json_contents);

// Get csv file contents and parse into array of objects
var csv_contents = fs.readFileSync(csv_path, "utf8");
var csv          = parse(csv_contents, {columns: true, delimiter: ";"});

// Add properties from csv file objects to corresponding json file objects
for(var i = 0; i < csv.length; i++) {
    for(var j = 0; j < json.length; j++) {

        // Use double equals only to enable type conversion; compare csv string to json integer
        if(csv[i].objectID == json[j].objectID) {
            json[j].food_type     = csv[i].food_type;
            json[j].stars_count   = parseFloat(csv[i].stars_count);
            json[j].reviews_count = parseFloat(csv[i].reviews_count);
            json[j].neighborhood  = csv[i].neighborhood;
            json[j].phone_number  = csv[i].phone_number;
            json[j].price_range   = csv[i].price_range;
            json[j].dining_style  = csv[i].dining_style;
            break; // Break loop once corresponding ID found
        }

    }
}

// Convert objects to JSON
var stringJSON = JSON.stringify(json);

// Write file of combined data to same directory
fs.writeFile(combined_json_path, stringJSON, 'utf8', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("New file created.");
    }
});
