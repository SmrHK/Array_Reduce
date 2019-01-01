
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


result = [ 
    {
        name : "dimensions", 
        values : ["dimention value 1", "dimention value 2", "dimention value 3"]
    }, 
    {
        name : "weights", 
        values : ["weight value 1", "weight value 2", "weight value 3"] 
    },
    {
        name : "colors", 
        values : ["weight value 1", "weight value 2", "weight value 3"] 
    }
]

// ----------------- *** ----------------- //

function hello(name){
    return `hello ${name}`;
}

let hello = (name) => `hello ${name}`; //  <---
                                       //      |
let hello = (name) => {                //     same
    return `hello ${name}`;            //      |
} 