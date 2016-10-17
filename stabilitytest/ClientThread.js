var ClientThread = function () {
var self = this;

this.port = 0;
this.program = nova_null;

this.ClientThread = function (program, port) {
self.this(program, port);
};

this.destroy = function () {
};

this.this = function (program, port) {
self = program;
self = port;
};

this.run = function () {
var client;
var ip;
var s;
client = new ClientSocket();
ip = "127.0.0.1";
Console.write(new String("ClientSocket attempting to connect to ").concat((ip).concat(new String(":").concat(Int.toString((self.port)).concat(new String("... "))))));
if (!client.connect(ip, self.port)) {
self.program.fail("Failed to connect to localhost server");
}
Console.writeLine("OK");
Console.writeLine("Waiting for String from ServerSocket... ");
s = client.connection.in.readString();
if (s.count != NetworkStability.received.count || !s.equals(NetworkStability.received)) {
self.program.fail("Client unable to receive the correct message from server");
}
Console.write("Attempting to send String to ServerSocket... ");
client.connection.out.write(NetworkStability.received);
Console.writeLine("OK");
Console.write("Attempting to close ClientSocket... ");
if (!client.close()) {
self.program.fail("Unable to close Client connection");
}
Console.writeLine("OK");
};

this.super = function () {
};


};


