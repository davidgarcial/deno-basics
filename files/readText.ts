// deno run .\files\readText.ts files\text.txt
// deno run --allow-read .\files\readText.ts files\text.txt

let args = Deno.args || [];

for (let i = 0; i < args.length; i++) {
    let filename = args[i];
    let file = await Deno.open(filename);
    await Deno.copy(file, Deno.stdout);
    file.close();
}