// Directory (folder) operations: mkdir, readdir and rmdir/rm

const fs = require("fs");
const path = require("path");

const demoDir = path.join(__dirname,"demo-folder");

// create folder.
fs.mkdirSync(demoDir, {recursive:true});

fs.writeFileSync(path.join(demoDir,"File1.txt"),"File1 Content");
fs.writeFileSync(path.join(demoDir,"File2.txt"),"File2 Content");

// To check folder contents.
const entries = fs.readdirSync(demoDir);
console.log("Directory Contents: ",entries);

// Delete Folder,
fs.rmSync(demoDir,{recursive:true, force:true});
console.log("Directory exists?",fs.existsSync(demoDir));