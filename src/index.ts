import { exec } from "child_process";

function greet(name: string): string {
    
    convertFileSchemeUriToPath(name)
    exec(name,(error, stdout, stderr)=>{
        console.log(stdout)
    })
    return `Hello, ${name}!`;
}
const args: string[] = process.argv.slice(2);
  
  console.log(greet(args[0]));

function convertFileSchemeUriToPath(uri: string[]): string {
	let filePath = "";
	
	filePath = uri[0].replace("file://", "");

	filePath = filePath.replace("%20", "\\ ");
	return filePath;
}