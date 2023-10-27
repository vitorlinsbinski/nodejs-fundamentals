// Strams =>

// process.stdin.pipe(process.stdout);

import { Readable, Writable, Transform, Duplex } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    setTimeout(() => {
      const i = this.index++;

      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));
        this.push(buf);
      }
    }, 1000);
  }
}

class oppositeNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;

    callback(null, Buffer.from(String(transformed)));
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback();
    f;
  }
}

new OneToHundredStream()
  .pipe(new oppositeNumberStream())
  .pipe(new MultiplyByTenStream());
