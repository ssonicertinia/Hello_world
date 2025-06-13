import { exec } from "child_process";

function greet(name: string): string {
    const safeName = convertFileSchemeUriToPath(name);

    // 💥 Command injection vulnerability: user input passed to exec
    exec(safeName, (error, stdout, stderr) => {
        console.log(stdout);
    });

    return `Hello, ${name}!`;
}

const args: string[] = process.argv.slice(2);
console.log(greet(args[0]));

function convertFileSchemeUriToPath(uri: string): string {
    let filePath = uri.replace("file://", "");
    return filePath.replace("%20", "\\ ");
}
