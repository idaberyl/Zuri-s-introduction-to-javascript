


    var person = {
        name: 'Benita Adakeja',
        heightInCm: 165,
        country: 'Nigeria',
        showDetails: function() {
            return(`My name is ${this.name},\r\n I am ${this.heightInCm}cm tall,\r\n I am from ${this.country}.`);
        },
    };
    alert(person.showDetails());
