import fs from "fs";

const readPJSON = async () => {
  const pjsonPath = new URL("./package.json", import.meta.url).pathname;
  console.log(JSON.parse(await fs.readFile(pjsonPath, "utf-8")));
};

readPJSON();
