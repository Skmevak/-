function dig(obj, target)
/*给定任意一个对象作为函数的第一个参数，函数的第二个参数为该对象中的某个键名，
通过这个键名可以直接输出对应的键值，不管对象里面的层级有多深。*/
{
    for(var name in obj){
        if(name == target)console.log(obj[name]);
        else{
            for(var key in name){
                if(key == target)console.log(name[key]);
                else dig(key,target);
            }
        }
    }
}