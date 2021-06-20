var employee1 = {'firstname':"Agnik", 'lastname':"Saha"};
var employee2 = {'firstname':"Ayan", 'lastname':"Malakar"};

function greeting(greeting1 , greeting2){
    console.log(greeting1+" "+this.firstname+" "+this.lastname+ " "+greeting2);
}

greeting.call(employee1,"hi","gentleman");

//Apply: Invokes the function with a given this value and allows you to pass in
// arguments as an array
greeting.apply(employee2,["hello","good evening"]);

// bind: returns a new function, allowing you to pass any number of arguments
var inviteEmployee1 = greeting.bind(employee1);
var inviteEmployee2 = greeting.bind(employee2);
inviteEmployee1('Hello', 'How are you?'); // Hello John Rodson, How are you?
inviteEmployee2('Hello', 'How are you?');