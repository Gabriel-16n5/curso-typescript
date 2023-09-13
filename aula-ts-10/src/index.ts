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

//exemplo do professor:
type Collection<TIPO> = {
    content: TIPO[]
}

type Card = {
    title: string;
}

const collection: Collection<Card> = {
    content: [{
        title: "card1"
    }, {
        title: "card2"
}]
}

const collection2: Collection<string> = {
    content: ["card1", "card2"]
}

console.log(collection)
console.log(collection2)