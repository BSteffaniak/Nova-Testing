var ServerDemo = function () {
var self = this;


this.ServerDemo = function () {
self.this();
};

this.destroy = function () {
};

this.main = function (args) {
var connections;
var socket;
var port;
connections = new Array();
socket = new ServerSocket();
port = 25560;
if (!socket.start(port)) {
Console.writeLine("Failed to start server");
} else {
var request;
Console.writeLine(new String("Started server on port ").concat(Int.toString(port)));
Console.writeLine("Waiting on client...");
request = socket.acceptClient();
if (request == null) {
Console.writeLine("Failed to accept client");
}
while (request != null){
var thread;
var othread;
connections.add(request);
thread = new ConnectionThread(request);
thread.start();
othread = new OutputThread(socket, request);
othread.start();
Console.writeLine("Waiting on anoter");
request = socket.acceptClient();
}
Console.writeLine("Exiting");
}
Console.waitForEnter();
};

this.this = function () {
};

this.super = function () {
};


};


