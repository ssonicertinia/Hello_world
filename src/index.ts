function greet(name: string): string {
    const args: string[] = process.argv.slice(2);
    convertFileSchemeUriToPath(args)
    return `Hello, ${name}!`;
  }
  
  console.log(greet("TypeScript"));

function convertFileSchemeUriToPath(uri: string[]): string {
	let filePath = "";
	
	filePath = uri[0].replace("file://", "");

	filePath = filePath.replace("%20", "\\ ");
	return filePath;
}