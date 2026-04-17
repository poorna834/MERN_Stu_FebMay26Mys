// File Upload using multer : with file type, file size restriction.

const express = require("express");
const multer = require("multer");

async function main() {
    try{
        const app = express();

        // mimetype: Format Of File
        const fileFilter = (req,file,callback) => {
            if(file.mimetype === "image/png" || file.mimetype === "image/jpeg"){
                callback(null,true);
            }
            else{
                callback(new Error("Only PNG and JPEG images are allowed"),false);
            }
        };

        // Approach 1: Using Dest:
        const uploadWithDest = multer({
            dest: "uploads/",
            limits: {fileSize: 1024 * 1024 * 2},
            fileFilter
        });

        app.post("/upload-dest", uploadWithDest.single("file"), (req,res) => {
            res.send({
                message: "Uploaded Using Dest Approach",
                note: "Filename is random, no extension preserved",
                file:req.file
            });
        });

        // // Approach 2: Using DiskStorage:
        // const storage = multer.diskStorage({
        //     // Where To Store The File
        //     destination: (req,res,callback) => {
        //         callback(null,"uploads/");
        //     },
        //     // How To Name The File
        //     filename: (req,file,callback) => {
        //         callback(null,Date.now() + "-" + file.originalname);
        //     }
        // });
        // const uploadWithDisk = multer({
        //     storage,
        //     limits: {fileSize: 1024 * 1024 * 2},
        //     fileFilter
        // });

        // app.post("/upload-disk", uploadWithDisk.single("file"), (req,res) => {
        //     res.send({
        //         message: "Uploaded Using Disk Approach",
        //         note: "Filename is Controlled and extension is preserved",
        //         file:req.file
        //     });
        // });


        app.listen(3000, () => {
            console.log("Server Started On Port http://localhost:3000");
            console.log("POST /upload-dest");
        });
    }
    catch(error) {
        console.log("Error : ",error.message);
    }
}
main();