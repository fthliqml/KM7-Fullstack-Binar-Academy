const fs = require("fs");
// reading file
const readFile = fs.readFileSync("./index.txt", "utf-8");

// processing file that has been reading
console.log(readFile);

// override previous content with new content if file is exist
// create new file if file doesnt exist
const content = "aku juga sayang FSW-2";
fs.writeFileSync("./balasan.txt", content);

// async file/write, callback is must (last param)
fs.readFile("./balasan.txt", "utf-8", (err, data) => {
  console.log(data);
});
