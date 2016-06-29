
let _types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");

let class2type = {},
    toString = class2type.toString;

// Populate the class2type map
_types.map(function(name) {
    class2type[ "[object " + name + "]" ] = name.toLowerCase()
})

function type(obj) {
    return obj == null ? String(obj) :
      class2type[toString.call(obj)] || "object"
}

function isWindow(obj) { 
    return obj != null && obj == obj.window;
}
function isDocument(obj) { 
    return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
}
function isObject(obj) { 
    return type(obj) == "object";
}
function isPlainObject(obj) {
    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
}

module.exports = (...obj)=>{

    let result = {};

    (function __recursion(...collection){
        collection.map(function(item){
            if(Array.isArray(item)){
                __recursion(...item);
            }else if(isPlainObject(item)){
                for(let prop in item){
                    result[prop] = item[prop];
                }
            }
        });
    })(obj);

    return result;
}
