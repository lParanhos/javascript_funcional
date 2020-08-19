const { Observable } = require('rxjs');

const obs = Observable.create(subscriber => {
    subscriber.next('RxJS');
    subscriber.next('é');
    subscriber.next('bem');
    subscriber.next('poderoso!');

    if(Math.random() > 0.5){
        subscriber.complete();
    } else {
        subscriber.error('Que problema?!?');
    }
});

/* obs.subscribe(
    valor => console.log(`Valor ${valor}`), //resultado
    erro => console.log(`Erro ${erro}`), //erro - Ao utilizar o noop, falamos que não desejamos realizar operações por exemplo não vamos tratar o erro
    () => console.log('Fim') // fim
); */

obs.subscribe({
    next(valor) {
        console.log(`Valor ${valor}`);
    },
    complete() {
        console.log('Fim');
    },
    error(erro) {
        console.log(`Erro ${erro}`);
    }
});