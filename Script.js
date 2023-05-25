const outputL = document.getElementById("output-luas");
const hitungL = document.getElementById("hitung-luas");
const outputK = document.getElementById("output-keliling");
const hitungK = document.getElementById("hitung-keliling");


    function hitungLuas(e) {
        const sisiLuas = document.getElementById("sisi_luas").value;
        let s = sisiLuas;
        let l = s * s;
        console.log(e)
        outputL.innerHTML = `Luas Persegi dari sisi ${s} cm adalah ${l} cm²`;
    }

    function resetAwal(){
        document.getElementById("sisi_luas").value = "";
        outputL.innerHTML = `Luas Persegi ??`
        
    }

    function hitungKeliling() {
        const sisikeliling = document.getElementById("sisi_keliling").value;
        let s = sisikeliling;
         let l = 4 * s;
         
        outputK.innerHTML = `Keliling Persegi dari sisi ${s} cm adalah ${l} cm²`;
    }
    
    function resetAwal2(){
        document.getElementById("sisi_keliling").value = "";
        outputK.innerHTML = `Keliling Persegi ??`
    }
