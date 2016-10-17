var DatabaseDemo = function () {
var self = this;


this.DatabaseDemo = function () {
self.this();
};

this.destroy = function () {
};

this.main = function (args) {
var connection;
var result;
var id;
var row;
connection = self.connect();
result = connection.query("select * from market");
row = 0;
for (; row < result.accessor_numRows(); row++) {
var col;
Console.write(new String("Found (").concat(Int.toString((row)).concat(new String("): ").concat((result.rows.get(row).get(0)).toString().concat(new String(""))))));
col = 1;
for (; col < result.numCols; col++) {
Console.write(new String(", ").concat(result.rows.get(row).get(col).toString()));
}
Console.writeLine("");
}
id = Int.parseInt(result.rows.get(result.accessor_numRows() - 1).get(0)) + 1;
connection.query(new String("insert into market values(").concat(Int.toString((id)).concat(new String(", 6, 634, 3);"))));
self.close(connection);
Console.waitForEnter();
};

this.connect = function () {
var connection;
var error;
Console.writeLine("Connecting...");
connection = new DBConnector();
connection.connect("localhost", "root", "server", "test");
error = connection.error;
if (error.count > 0) {
Console.writeLine(new String("Error: ").concat(error));
} else {
Console.writeLine("Connected.");
}
return connection;
};

this.close = function (connection) {
Console.writeLine("Closing...");
connection.close();
Console.writeLine("Closed");
};

this.this = function () {
};

this.super = function () {
};


};


