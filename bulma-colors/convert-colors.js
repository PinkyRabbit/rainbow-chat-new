const hexToHsl = require("hex-to-hsl");
const fs = require("fs");

const regex = /#[0-9a-f]+/gim;

fs.readFile("./agila-dracula-vscode.colors", "utf8", (err, data) => {
  if (err) throw err;
  const found = data.match(regex);
  found
    .sort((a, b) => b.length - a.length)
    .forEach((hexColor) => {
      const hslArray = hexToHsl(hexColor);
      const hslColor = `hsl(${hslArray[0]},${hslArray[1]}%,${hslArray[2]}%)`;
      const replace = new RegExp(hexColor, "gm");
      data = data.replace(replace, hslColor);
    });

  fs.writeFile("./agila-dracula-vscode.tmTheme", data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});
