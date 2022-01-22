const intervalId = setInterval(() => { // 1
  console.log('James');
}, 10);

setTimeout(() => { // 2
  const promise = new Promise((resolve) => {
    console.log('Richard');
    resolve('Robert'); // 3
  });

  promise
      .then((value) => { // 4
        console.log(value);

        setTimeout(() => { // 5
          console.log('Michael');

          clearInterval(intervalId);
        }, 10);
      });

  console.log('John');
}, 10);
