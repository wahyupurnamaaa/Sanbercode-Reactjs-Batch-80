console.log("Soal Looping");

const loopingGanjil = (number) => {
    for (let i = 1; i <= number; i += 2) {
        console.log(i);
    }
};

loopingGanjil(13);
// Output
// 1
// 3
// 5
// 7
// 9
// 11
// 13

loopingGanjil(20);
// Output
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19
