const json = {
    a: { b: { c: 1 } },
    d: [1, 2],
};

const dfs = (n, path) => {
    // console.log(n, path);
    Object.keys(n).forEach(k => {
        console.log(n[k])
        dfs(n[k], path.concat(k));
    });
};

const deepCopy=(obj)=>{
    let a =  {};
    for (const key in obj) {
        if(typeof obj[key]=='object'){
            a[key] = deepCopy(obj[key])
        }else{
            a[key] = obj[key]
        }
    }
    return a;
}
let a = {b:1,c:2,d:{ e:1,f:{g:1} }}
let b = deepCopy(a)
a.d.f.g=22
console.log(b)


// dfs(json, []);
