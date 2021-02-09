const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  let x = 50;
  setTimeout(() => {
    process.stdout.write(sentence[i])}, x*i)
  };