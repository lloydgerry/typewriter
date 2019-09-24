//string to use
const sentence = "hello there from lighthouse labs\n";


for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    return process.stdout.write(sentence[i]);
    setTimeout
  }, i * 1000);
}

