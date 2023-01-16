const textNode = document.getElementById('text');
const prog = "Язык golang";

let idx = 1;

setInterval(() => {
    textNode.innerText = prog.slice(0, idx);
    idx++;
    if(idx > prog.length) {
        idx=1;
    }
}, 100)