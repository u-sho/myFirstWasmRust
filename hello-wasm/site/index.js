const js = import("./node_modules/@u-sho/hello-wasm/hello_wasm.js");
js.then((js) => {
  js.greet("WebAssembly");
});
