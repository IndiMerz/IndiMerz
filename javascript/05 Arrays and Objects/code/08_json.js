const auth = {
    usrName: 'colt342',
    hash: '0dn3r4nsakjbvub4yjfewjbwfeqf',
    email: 'colt@login.com'
};

// convert to json
const data = JSON.stringify(auth);
console.log(data);

// {"usrName":"colt342","hash":"0dn3r4nsakjbvub4yjfewjbwfeqf","email":"colt@login.com"}


// parse json to object
const obj = JSON.parse(data);
console.log(obj);

/*
{
    usrName: 'colt342',
    hash: '0dn3r4nsakjbvub4yjfewjbwfeqf',
    email: 'colt@login.com'
  }
*/



const allAuth = [
    {
        usrName: 'colt342',
        hash: '0dn3r4nsakjbvub4yjfewjbwfeqf',
        email: 'colt@login.com'
    },
    {
        usrName: 'steve42',
        hash: 'jkwsb86gbKBeb3kcJLH2F3IO',
        email: 'steve@login.com'
    },
    {
        usrName: 'mike321',
        hash: 'klp82bjrkbfvwc2kkfogi2og',
        email: 'mike@login.com'
    },
    {
        usrName: 'anderw',
        hash: 'rfwkjhIkjefwheBJKfjekWHIUQhihwuif',
        email: 'abdrew@login.com'
    }
];

const allData = JSON.stringify(allAuth);
console.log(allData);

/* 
[{"usrName":"colt342","hash":"0dn3r4nsakjbvub4yjfewjbwfeqf","email":"colt@login.com"},{"usrName":"steve42","hash":"jkwsb86gbKBeb3kcJLH2F3IO","email":"steve@login.com"},{"usrName":"mike321","hash":"klp82bjrkbfvwc2kkfogi2og","email":"mike@login.com"},{"usrName":"anderw","hash":"rfwkjhIkjefwheBJKfjekWHIUQhihwuif","email":"abdrew@login.com"}]
*/