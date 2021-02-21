const fs = require("fs");

const source = "./src/assets/tokens/";
const dest = "./src/assets/tokens.json";
const tokens = {};

fs.readdir(source, (err, files) => {
  if (err) {
    console.log(err);
  }
  files.forEach((file) => {
    if (file.includes(".tokens.")) {
      fs.readFile(source + file, (error, tokenData) => {
        if (error) {
          console.log(error);
        }
        tokens[file.substring(0, file.indexOf("."))] = JSON.parse(tokenData);
        fs.writeFile(dest, JSON.stringify(tokens), "utf-8", (err) => {
          if (err) {
            console.log(err);
          }
        });
      });
    }
  });
});
