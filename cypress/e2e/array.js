let a=[1,2,5,10]
var largest=0
for (let i = 0; i < a.length; i++) {
        if (a[i] > largest) {
        var largest=a[i];       
    }
}
console.log(largest)
