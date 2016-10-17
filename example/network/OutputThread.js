var OutputThread = function () {
var self = this;

this.serverSocket = nova_null;
this.socket = nova_null;

this.OutputThread = function (serverSocket, socket) {
self.this(serverSocket, socket);
};

this.destroy = function () {
};

this.this = function (serverSocket, socket) {
self = serverSocket;
self = socket;
};

this.run = function () {
while (self.socket.connected){
var message;
message = Console.readLine();
if (message.equals("q")) {
self.serverSocket.close();
break;
}
if (!self.socket.connected) {
break;
}
self.socket.out.write(message);
}
};

this.super = function () {
};


};


