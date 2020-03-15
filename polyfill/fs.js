export const lstatSync = Deno.lstatSync;
export const mkdirSync = Deno.mkdirSync;

export function readFile(path, options, callback) {
  if (callback === undefined) {
    callback = options;
    options = undefined;
  }

  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function. Received", callback);
  }

  let err, data;
  Deno.readFile(path)
    .then(result => (data = result))
    .catch(error => (err = error));

  if (err) {
    callback(err);
    return;
  }

  if (options && options.encoding) {
    const decoder = new TextDecoder(options.encoding);
    callback(null, decoder.decode(data));
  }
}

// TODO: support options
export function readdirSync(path) {
  return Deno.readdirSync(path).map(fileInfo => fileInfo.name);
}

// TODO: support options properly
export function writeFile(file, data, options, callback) {
  if (callback === undefined) {
    callback = options;
    options = undefined;
  }

  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function. Received", callback);
  }

  if (typeof data === "string") {
    data = new TextEncoder().encode(data);
  }

  let err;
  Deno.writeFile(file, data, options).catch(error => (err = error));

  if (err) {
    callback(err);
  } else {
    callback(null);
  }
}
