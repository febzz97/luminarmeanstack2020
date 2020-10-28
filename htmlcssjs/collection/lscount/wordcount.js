//word count
var data = "hello hai hello hai hii hello hii hai hai hai hai"
//spliting data with space  
var words = data.split(" ")
console.log(words)
var obj = {}
for (word of words) {
    if (word in obj) {
        obj[word] += 1;
    } else {
        obj[word] = 1;
    }
} console.log(obj)

var arr = []
for (key in obj) {
    var num = obj[key]
    arr.push(num)
}
var srt = arr.sort((a, b) => b - a)

var elem = srt[0]
for (key in obj) {
    if (elem == obj[key]) {
        console.log(key)
    }
}