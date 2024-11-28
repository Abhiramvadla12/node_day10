let http = require("http");
let fs = require("fs");
let path = require("path");

let server = http.createServer((req, res) => {
    let directory = path.join(__dirname, "task"); // Corrected path to the "task" directory

    try {
        // Check if the "task" directory exists
        if (fs.existsSync(directory)) {
            // Get all files and folders in the directory
            let files = fs.readdirSync(directory);

            // Iterate over the files and delete them
            for (let file of files) {
                let filePath = path.join(directory, file);

                if (fs.lstatSync(filePath).isDirectory()) {
                    // Delete folder recursively
                    fs.rmSync(filePath, { recursive: true, force: true });
                } else {
                    // Delete file
                    fs.unlinkSync(filePath);
                }
            }
        } else {
            console.log("Directory 'task' does not exist.");
        }
    } catch (error) {
        console.error("Error occurred while deleting files:", error);
    }

    res.end("Cleanup completed successfully!");
});

let port = 3003;
server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
//checking git in vs code
