function clearoutput() {
    document.getElementById("output").value = "";
}

function runcode() {
    var code = getcode();
    var output = run(code);
    document.getElementById("output").value = output;
}

function getcode() {
    var code = document.getElementById("code").value;
    return code;
}

function run(code) {
    let codePnt = 0;
    let memPnt = 0;
    let output = '';
    let mem_len = 30000;
    let mem = new Array(mem_len).fill(0);

    while (codePnt < code.length) {
    switch (code[codePnt]) {
        case '>':
        if (memPnt < mem.length) {
            memPnt++;
        } else {
            console.warn('Out of bounds');
        }
        break;
        case '<':
        if (memPnt > 0) {
            memPnt--;
        } else {
            console.warn('Out of bounds');
        }
        break;
        case '+':
        mem[memPnt]++;
        break;
        case '-':
        mem[memPnt]--;
        break;
        case '.':
        output += String.fromCharCode(mem[memPnt]);
        break;
        case ',':
        var input = prompt();
        mem[memPnt] = input.charCodeAt(0);
        break;
        case '[':
        if (mem[memPnt] === 0){
            while (code[codePnt] !== ']') {
                codePnt++;
            }
        }
        break;
        case ']':
        if (mem[memPnt] !== 0){
            while (code[codePnt] !== '[') {
                codePnt--;
            }
        }
        break;
    }
    codePnt++;
    }
    return output;
}
