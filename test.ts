async function test() {
  const path = await import("node:path");
  const os = await import("node:os");
  const fs = await import("node:fs");

  const tmpDir = path.resolve(os.tmpdir(), "pi-talk");
  const logFile = path.resolve(tmpDir, "pi-talk-events.log");

  fs.mkdirSync(tmpDir, { recursive: true });

  fs.appendFileSync(logFile, "test");
}

test();
