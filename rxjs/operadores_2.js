const { XMLHttpRequest } = require('xmlhttprequest');
const { ajax } = require('rxjs/ajax');

const { map, concatAll } = require('rxjs/operators');


ajax({
    createXHR: () => new XMLHttpRequest(),
    url: 'https://api.github.com/users/lParanhos/repos'
})
    .pipe(
        map(resp => JSON.parse(resp.xhr.responseText)),
        concatAll(),  // passa os dados e não um array
        map(repo => repo.full_name)
    )
    .subscribe(console.log)