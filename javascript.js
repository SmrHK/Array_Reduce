input = [ 
    { name: "dimensions", value: "dimensions value 1" },
    { name: "weight",     value: "weight value 1" },
    { name: "dimensions", value: "dimensions value 2" },
    { name: "weight",     value: "weight value 3" },
    { name: "dimensions", value: "dimensions value 3" },
    { name: "weight",     value: "weight value 3" },
    { name: "color", value: "color value 1" },
    { name: "color",     value: "color value 2" },
    { name: "color", value: "color value 3" },
]

var result = [];
var val = [];

result = input.reduce((prev,cur) => {
    

    if (cur.name == "dimensions")
        {   
            if(result[0]== null){
                result = [...result , { name : "dimensions"}];
            };
            val = [...val , cur.value];
            result[0].values = val;
        }
    else if(cur.name == "weight"){
        if(result[1]== null){
            result = [...result , { name : "weights"}];
            val = [];
        };
        val = [...val , cur.value];
        result[1].values = val;
    }
    else if (cur.name == "color"){
        if(result[2]== null){
            result = [...result , { name : "colors"}];
            val = [];
        };
        val = [...val , cur.value];
        result[2].values = val;
    }
    
        
    return result;
}, 0);

console.log(result);


// Object.keys(result[0]).length
// console.log(Object.keys(result[0]).length);


// var p = new Set();
// for (item of input){
//     p.add(item.name);
// };
// console.log(p);
