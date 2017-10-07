const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/examples');


const personaSchema = mongoose.Schema({
    name: String,
    dni: Number,
    lastname: String,
    nationality: String
});

personaSchema.methods.getFullName = function () {
    return this.name + ' ' + this.lastname;
};

const Persona = mongoose.model('Persona', personaSchema);

/*let juancito = new Persona({
    name: 'Juan',
    lastname: 'Rojas',
    dni: 34123123,
    nationality: 'Argentina'
});

// console.log(juancito);

//juancito.save();*/


/*let  pedridto = new Persona({
    name: 'Pedro',
    lastname: 'Rodriguiz',
    dni: 3000001,
    nationality: 'Uruguaya'
});

pedridto.save();*/

/*Persona
    .find({ })
    .then(function (personas) {
        //personas.forEach( p => console.log(p.name));

        console.log(personas);

        let pedro = personas[0];

        pedro.dni = 2;

        return pedro.save()
    })
    .then(r => console.log('Salve a pedro'));*/

//Persona.remove({ dni: 3000001} ).then( r => console.log('Borrado!'));

// users/:userId
Persona.findById('59d6cd187d79f62710519bd3')
    .then( function(p) {
        console.log('resultado:');
        console.log(p);
        console.log(p.getFullName());

    })
    .catch(function (e) {
        console.log('explotteeeeeeeeeee!!!');
    });//*/

/*Persona.findOneAndUpdate({ name: 'Pedro'}, { nationality: 'Argentina'})
.then(function (result) {
    console.log('Lo actualize!')
    console.log(result);

    result.lastname = 'EEEEE!!!'
    result.save();
})
.catch(function (error) {
    console.log('Algo fallo!')
});*/