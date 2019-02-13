import module1 from "fake-module-1";
import module2 from "fake-module-2";

const src = () => "src";

console.log("\n\nHas src been transpiled?\n" + src);
console.log("\n\nHas fake-module-1 been transpiled?\n" + module1);
console.log("\n\nHas fake-module-2 been transpiled?\n" + module2);
