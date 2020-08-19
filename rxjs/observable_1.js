const { Observable, observable } = require('rxjs');

const promise = new Promise(resolve => {
    resolve('Promise é bem legal!');
});

promise.then(console.log);

const obs = new Observable(subscriber => {
    subscriber.next('Observer');
    subscriber.next('é');
    subscriber.next('bem');
    setTimeout(() => {
        subscriber.next('legal!');
        //indica que não tenho mais dados a serem enviados
        subscriber.complete();
    }, 1000);
});

obs.subscribe(console.log);
obs.subscribe(texto => console.log(texto.toUpperCase()));