var ConnectionThread = function () {
var self = this;

this.socket = nova_null;

this.ConnectionThread = function (socket) {
self.this(socket);
};

this.destroy = function () {
};

this.this = function (socket) {
self = socket;
};

this.run = function () {
while (true){
var message;
if (!self.socket.validateConnection()) {
Console.writeLine("Disconnected.");
break;
}
message = self.socket.in.readString();
Console.writeLine(new String("HE SAYS: ").concat(message));
}
};

this.super = function () {
};


};


