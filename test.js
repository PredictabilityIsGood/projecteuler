const solutions = [
    require("./naive/problem-1.js"),
    require("./naive/problem-2.js"),
    require("./naive/problem-3.js"),
    require("./naive/problem-4.js"),
    require("./naive/problem-5.js"),
    require("./naive/problem-6.js"),
    // require("./naive/problem-7.js") incomplete
];
solutions.forEach((answer,index)=>{
    console.log(`Problem ${index+1} answer: `,answer);
})