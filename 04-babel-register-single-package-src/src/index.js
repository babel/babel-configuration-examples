import message from "./message";

const getMessage = () => message;

console.log(getMessage());

console.log("\n\nHas it been transpiled?\n" + getMessage);
