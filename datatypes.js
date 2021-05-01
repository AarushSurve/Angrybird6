var name="aarush"
document.write(name+ " " +typeof(name)+"<br>")
var name="11"
document.write(name+ " " +typeof(name)+"<br>")
var op=11
document.write(op+ " " +typeof(op)+"<br>")
var op1
document.write(op1+ " " +typeof(op1)+"<br>")
var a=[10,30,40]
document.write(a)
document.write("<br>the elements are<br>")
document.write(a[0])
document.write(a[2])
document.write(a[1])
document.write("<br>the elements are<br>")
a.push(50)
a.push(60)
document.write(a)
document.write("<br>the elements are<br>")
a.pop()
document.write(a)
document.write("<br>length="+a.length)
for(var i=0;i<a.length;i++){
    document.write("<br>"+a[i])
}
var a=[[10,20], [30,40], [50,60]]
document.write("<br>length="+a.length)
document.write("<br>")
document.write(a[0][0])
document.write("<br>")
document.write(a[1][0])
