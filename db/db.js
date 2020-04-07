// Require or import the dependencies
const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();

const db_template_destination = `${__dirname}/database.template.sqlite`;
const db_destination = `${__dirname}/../database.sqlite`;


try {
    fs.unlinkSync(db_template_destination)
    //file removed
  } catch(err) {
    console.error(err)
  }

// Setup the database connection
let db = new sqlite3.Database(db_template_destination, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the in-memory SQLite database.");
});

function prepareFileAndRun(filename) {
  let request = 0;
  // Read the SQL file
  let dataSql = fs.readFileSync(filename, "utf8");


  dataSql = dataSql.replace(/(--.*)/g, "");
  dataSql = dataSql.replace(/\r?\n|\r/g, "");

  // Convert the SQL string to array so that you can run them one at a time.
  // You can split the strings using the query delimiter i.e. `;` in // my case I used `);` because some data in the queries had `;`.
  let dataArr = dataSql.toString().split(");");

  // db.serialize ensures that your queries are one after the other depending on which one came first in your `dataArr`
  db.serialize(() => {
    // db.run runs your SQL query against the DB
    db.run("PRAGMA foreign_keys=OFF;");
    db.run("BEGIN TRANSACTION;");
    // Loop through the `dataArr` and db.run each query
    for (query of dataArr) {
      if (query) {
        // Add the delimiter back to each query before you run them
        // In my case the it was `);`
        query += ");";
        request++;
        console.log(`request ${request} body ${query}`);
        db.run(query, (err) => {
          if (err) throw err;
        });
      }
    }
    db.run("COMMIT;");
  });
}

prepareFileAndRun(`${__dirname}/database.sql`);
prepareFileAndRun(`${__dirname}/test_data.sql`);

// Close the DB connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Closed the database connection.");
});

