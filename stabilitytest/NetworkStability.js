var NetworkStability = function () {
var self = this;


this.NetworkStability = function (program) {
self.this(program);
};

this.destroy = function () {
};

this.this = function (program) {
self.this(program);
};

this.test = function () {
var port;
var server;
var thread;
var connection;
var s;
Console.writeLine("Checking network stability...");
port = 24243;
server = self.createServer(port);
thread = new ClientThread(self.program, port);
thread.start();
Console.writeLine("Accepting ClientSocket connection... ");
connection = server.acceptClient();
if (connection == null) {
self.program.fail("Failed to accept the client");
}
Console.writeLine("Sending String to ClientSocket... ");
if (!connection.out.write(self.received)) {
self.program.fail("Server unable to send data to client");
}
Console.writeLine("Waiting for String from ClientSocket... ");
s = connection.in.readString();
if (s.count != self.received.count || !s.equals(self.received)) {
self.program.fail("Server unable to receive correct message from client");
}
thread.join();
Console.write("Attempting to close ServerSocket connection... ");
if (!server.close()) {
self.program.fail("Unable to close server");
}
Console.writeLine("OK");
};

this.createServer = function (port) {
var server;
server = new ServerSocket();
Console.write(new String("Attempting to start ServerSocket on port ").concat(Int.toString(port).concat(new String("... "))));
if (!server.start(port)) {
self.program.fail(new String("Unable to start server on port ").concat(Int.toString(port)));
}
Console.writeLine("OK");
return server;
};

this.super = function () {
};


};

(function () {
self.received = "THIS IS THE STRING THAT SHOULD BE RECEIVEDTHIS IS THE STRING THAT SHOULD BE RECEIVEDTHIS IS THE STRING THAT SHOULD BE RECEIVEDTHIS IS THE STRING THAT SHOULD BE RECEIVEDTHIS IS THE STRING THAT SHOULD BE RECEIVEDTHIS IS THE STRING THAT SHOULD BE RECEIVEDTHIS IS THE STRING THAT SHOULD BE RECEIVED";
})();

