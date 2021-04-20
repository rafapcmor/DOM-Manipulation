function somar() {

    var sn1 = window.document.getElementById('txtn1');

    var sn2 = window.document.querySelector('input#txtn2');

    var result = window.document.getElementById('result');

    var n1 = Number(sn1.value);
    var n2 = Number(sn2.value);
    var soma = n1 + n2;

    result.innerHTML = `${n1} + ${n2} = ${soma}`;
}