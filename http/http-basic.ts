// deno run --allow-net .\http\http-basic.ts
// deno run --allow-net .\http\http-basic.ts https://example.com

const url = Deno.args[0] || 'https://example.com';
const res = await fetch(url);
const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);