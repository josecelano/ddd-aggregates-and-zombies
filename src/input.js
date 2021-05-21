function process_input_from_keyboard() {
  const { stdin } = process;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  // Begin reading from stdin so the process does not exit.
  stdin.resume();

  stdin.on("data", function (key) {
    // ctrl-c to exit
    if (key === "\u0003") {
      process.exit();
    }
    // write the key to stdout
    process.stdout.write(key);
  });
}

export default process_input_from_keyboard;
