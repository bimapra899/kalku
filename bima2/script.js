// Fungsi untuk menampilkan angka atau operator ke layar
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Fungsi untuk membersihkan layar
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Fungsi untuk menghapus satu karakter terakhir
function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

// Fungsi untuk menghitung hasil operasi
function calculateResult() {
    let display = document.getElementById('display').value;
    
    // Mengganti sin, cos, tan, log, dan ln dengan fungsi Math
    display = display.replace(/sin\(/g, 'Math.sin(');
    display = display.replace(/cos\(/g, 'Math.cos(');
    display = display.replace(/tan\(/g, 'Math.tan(');
    display = display.replace(/log\(/g, 'Math.log10(');
    display = display.replace(/ln\(/g, 'Math.log(');

    // Evaluasi ekspresi matematika
    try {
        let result = eval(display);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Fungsi untuk menghitung negasi (ubah tanda + ke - atau sebaliknya)
function negate() {
    let display = document.getElementById('display').value;
    if (display.startsWith('-')) {
        document.getElementById('display').value = display.slice(1);
    } else {
        document.getElementById('display').value = '-' + display;
    }
}

// Fungsi untuk menghitung faktorial
function factorial() {
    let display = document.getElementById('display').value;
    let number = parseInt(display);
    if (isNaN(number) || number < 0) {
        document.getElementById('display').value = 'Error';
        return;
    }
    let fact = 1;
    for (let i = 2; i <= number; i++) {
        fact *= i;
    }
    document.getElementById('display').value = fact;
}


