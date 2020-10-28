//input HHHPPSDAAA
//OUTPUT 3H2P1S1D3A
var inp = "HHHPPSDAAA"
var inarr = [];
for (char of inp) {
    inarr.push(char)
}
var out = [];

for (char1 of inarr) {
    var cout = 0;
    for (char2 of inarr) {
        if (char1 == char2) {
            cout += 1;
        }
    }
    out.push(cout+char1);
    for(i=1;i<cout;i++){
        inarr.shift()
    }
}console.log(out)