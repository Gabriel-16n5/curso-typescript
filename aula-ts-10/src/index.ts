type Generic<TYPE> = {
    value: TYPE
}



function identity<TYPE> (value:TYPE) {
    return value;
}

console.log(identity<boolean>(true))
console.log(identity<number>(42));
console.log(identity<string>("Hello"));
console.log(identity<number[]>([1,2,3]));
console.log(identity<undefined>(null));
console.log(identity<null>(undefined));