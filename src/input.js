function waitUntilKeyPressed(exitGameKeyCode) {
  const { stdin } = process;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  // Begin reading from stdin so the process does not exit.
  stdin.resume();

  stdin.on("data", function (key) {
    if (key === exitGameKeyCode) {
      process.exit();
    }
    // write the key to stdout
    process.stdout.write(key);
  });
}

export default waitUntilKeyPressed;
