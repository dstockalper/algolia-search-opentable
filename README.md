# algolia-search-opentable

This project is a ReactJS app that uses Algolia's search-as-you-type JS Helper on OpenTable data.

1) To view the app, clone this repo, run npm install, npm start, then open http://localhost:3000/

2) A data manipulation and import script is found at data_clean_script >> import_json.js.  This file can be run with node and will combine restaurants_info.csv and restaurants_list.json into restaurants_combined_data.json.  This combined file can be dropped into the Algolia dashboard to index the restaurant data. 

3) Algolia client questions are found in algolia-client-questions.txt
