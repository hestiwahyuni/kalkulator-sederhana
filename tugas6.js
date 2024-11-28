function hitung() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    const operator = document.getElementById("operator").value;
    let hasil;

    if (!angka1 && angka1 !== 0 || !angka2 && angka2 !== 0) {
        hasil = "Harap isi kedua angka!";
    } else {
        switch (operator) {
            case "+":
                hasil = angka1 + angka2;
                break;
            case "-":
                hasil = angka1 - angka2;
                break;
            case "*":
                hasil = angka1 * angka2;
                break;
            case "/":
                hasil = angka2 !== 0 ? angka1 / angka2 : "Tidak bisa bagi 0!";
                break;
            default:
                hasil = "Operator tidak valid!";
        }
    }

    document.getElementById("hasil").value = hasil;
}