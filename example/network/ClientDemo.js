var ClientDemo = function () {
var self = this;


this.ClientDemo = function () {
self.this();
};

this.destroy = function () {
};

this.main = function (args) {
var socket;
var ip;
var port;
var connected;
socket = new ClientSocket();
ip = "127.0.0.1";
port = 5675;
Console.writeLine(new String("Attempting to connect to ").concat(ip.concat(new String(":").concat(Int.toString(port)))));
connected = socket.connect(ip, port);
if (connected) {
var thread;
thread = new ConnectionThread(socket.connection);
thread.start();
Console.writeLine("Connected!");
while (socket.connection.connected){
var message;
message = Console.readLine();
if (message.equals("q")) {
socket.close();
break;
}
socket.connection.out.write(message);
}
socket.close();
} else {
Console.writeLine("Failed to connect");
Console.waitForEnter();
}
};

this.this = function () {
};

this.super = function () {
};


};


