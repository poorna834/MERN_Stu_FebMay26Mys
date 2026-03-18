// Sequential Await Vs Parallel Promise execution

function taskA(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Task A Complete");
        },1000);
    });
}

function taskB(){
    return new Promise(function(resolve){
        setTimeout(function(){
             resolve("Task B Complete");
        },1000);
    });
}
async function runSequential() {
    console.time("Sequential");
    const a = await taskA();
    const b = await taskB();
    console.timeEnd("Sequential");
    console.log(a);
    console.log(b);
}
await runSequential();

async function runParallel(){
    console.time("Parallel");
    const results = await Promise.all([taskA(),taskB()]);
    console.timeEnd("Parallel");
    console.log(results[0]);
    console.log(results[1]);
}
await runParallel();