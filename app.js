//                              QUESTION#01
// function power(a, b) {
//     console.log(a**b)
// } power(2, 9)
//                              QUESTION#02
// var year=prompt("enter year")
// function leapYear(year) {
//     var date = new Date(year,1,29).getDate()===29
//    if(date){
//     console.log("leap")}
//     else{console.log("no leap")}
// } leapYear(year)
//                              QUESTION#03
// var a,b,c,area,s
// function sForArea(a,b,c){
//     s=(a+b+c)/2
//     function forArea(){
// area=(s*(s-a)*(s-b)*(s-c))
//     }forArea()
// }sForArea(1,1,1)
// console.log(Math.ceil(area))
//                              QUESTION#04
// var st1, st2, st3, totalMarks, percentage, average
// function main(st1, st2, st3) {
//     totalMarks = st1 + st2 + st3
//     function average() {
//         average = totalMarks / 3
//         function percentage() {
//             percentage = average*100
//         } percentage()
//    console.log(totalMarks,average, percentage)
//  } average()
// } main(70, 80, 79)
//                              QUESTION#05
// function index(){
//     var str="abbas"
//     var a=str.indexOf("s")
// console.log(a)
// }index()
//                              QUESTION#06
// function rv(str) {
//     let b = str.replace(/[aeiou]/ig, '')
//     console.log(str, b)
// }rv("all eid in out yOUu")
//                              QUESTION#07
// function isVowel(ch) {
//     switch (ch) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//             return true
//         default:
//             return false
//     }
// }
// function vowelPairs(s, n) {
//     let cnt = 0
//     for (var i = 0; i < n - 1; i++) {
//         if (isVowel(s[i]) && isVowel(s [i+ 1]))
//            cnt= cnt+1
//     }
//     return cnt
// }
// let s = "Pleases read this application and give me gratuity"
// let n = s.length
// console.log(vowelPairs(s,n))
//                              QUESTION#08
// let a=+prompt("Enter the distance in Km")
// function distanceInMeters(a){
// var b=a/1000
// var c=a/3280.84
// var d=a/39370.1
// var e=a/100000.054
// console.log(b,c,d,e)}
// distanceInMeters(a)
//                              QUESTION#09
// var overTimePay=12
// var hoursWork=+prompt("How many hours of work you did")
// function payment(){
//     if(hoursWork>40){
//         var c=(hoursWork-40)*overTimePay
//     }else{
//         console.log("No need to give overtime")
//     }
//     console.log(c)
// }payment()
//                              QUESTION#10
// var a=+prompt("enter a number with Last number must be zero")
// function noteRequired(){
//     var b=Math.floor(a/100)
//     var c=Math.ceil((a/100)/50)
//     var d=Math.floor((a-((b*100)+(c*50)))/10)
// console.log(b,c,d)}noteRequired()













































