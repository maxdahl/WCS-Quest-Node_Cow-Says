const cowsay = require("cowsay");
const info = require("./information");

const cow = cowsay.think({
	text: `I'm ${info["name"]} from ${info["campus"]}!`,
	e: "kK",
	T: "V"
});

console.log(cow);
