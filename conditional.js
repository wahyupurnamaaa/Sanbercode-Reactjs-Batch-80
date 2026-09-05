console.log("Soal 1");

// if, else if, else
const predikatNilai = (nilai) => {
    if (nilai >= 80) {
        return "A (Sangat Baik)";
    } else if (nilai >= 70) {
        return "B (Baik)";
    } else if (nilai >= 60) {
        return "C (Cukup)";
    } else if (nilai >= 50) {
        return "D (Kurang)";
    } else {
        return "E (Error)";
    }
};

console.log(predikatNilai(94)); // A (Sangat Baik)
console.log(predikatNilai(77)); // B (Baik)
console.log(predikatNilai(63)); // C (Cukup)
console.log(predikatNilai(54)); // D (Kurang)
console.log(predikatNilai(30)); // E (Error)

console.log("Soal 2");

// Switch Case
const trafficLight = (string) => {
    switch (string) {
        case "red":
            console.log("berhenti");
            break;
        case "yellow":
            console.log("hati-hati");
            break;
        case "green":
            console.log("berjalan");
            break;
        default:
            console.log("tidak diketahui");
    }
};

trafficLight("red");    // berhenti
trafficLight("yellow"); // hati-hati
trafficLight("green");  // berjalan

console.log("Soal 3");

// conditional tipe ternary operator
let angka = 2;

console.log(angka === 2 ? "angka nya 2" : "bukan angka 2");
