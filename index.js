
const christmasTree = (n) => {
    // Imprimir el asterisco en la parte superior
    let topStar = " ".repeat(n - 1) + "*";
    console.log(topStar);
    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = 1; j <= n - i; j++) {
            str += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            str += "0";
        }
        console.log(str);
    }
};
christmasTree(10);