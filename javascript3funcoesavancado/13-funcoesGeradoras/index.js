function* geradora() {
    yield 'valor 1'; // tipo return diferente

    yield 'valor 2';

    yield 'valor 3';
}

const g1 = geradora();
console.log(g1.next().value); // retorna objeto e pego o value 

function* geradora2() {
    let i = 0

    while(true) {
        yield i;
        i++;
    }
}
const g2 = geradora2();
console.log(g2.next().value); //0
console.log(g2.next().value); //1
console.log(g2.next().value); //2

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;

}

const g4 = geradora4();
for (let i of g4) {
    console.log(i);
}

function* geradora5() {
    yield function() {
        console.log('vim do y1');
    }

    yield function() {
        console.log('vim do y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();