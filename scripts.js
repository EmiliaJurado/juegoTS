var Personaje = /** @class */ (function () {
    function Personaje(nombre) {
        this.ki = 100;
        this.semillas = 100;
        this.nombre = "";
        this.mana = 30;
        this.sayayin = 25;
        this.ataques = 10;
        this.nombre = nombre;
    }
    Personaje.prototype.ataque = function (jugadorObjetivo) {
        jugadorObjetivo.vida -= this.ataques;
        this.status(jugadorObjetivo);
    };
    Personaje.prototype.curar = function (jugadorObjetivo) {
        if (this.ki >= 100) {
            console.log('No se puede usar esta habilidad');
        }
        else {
            jugadorObjetivo.vida += 20;
            this.semillas -= 20;
        }
        this.status(jugadorObjetivo);
    };
    Personaje.prototype.habilidadn = function (jugadorObjetivo) {
        if (this.semillas >= 30) {
            jugadorObjetivo.vida -= 45;
            this.semillas -= this.mana;
        }
        else {
            console.log('No hay chakra suficiente');
        }
        this.status(jugadorObjetivo);
    };
    Personaje.prototype.habilidad = function (jugadorObjetivo) {
        if (this.semillas >= 25) {
            jugadorObjetivo.vida -= 40;
            this.semillas -= this.sayayin;
        }
        else {
            console.log('No hay chakra suficiente');
        }
        this.status(jugadorObjetivo);
    };
    Personaje.prototype.revivir = function (jugadorObjetivo) {
        if (this.ki <= 0) {
            jugadorObjetivo.vida += 30;
        }
        else {
            console.log('No se puede usar esta habilidad');
        }
        this.status(jugadorObjetivo);
    };
    Personaje.prototype.recuperarChakra = function (jugadorObjetivo) {
        if (this.semillas >= 100) {
            console.log('No se puede usar esta habilidad');
        }
        else {
            jugadorObjetivo.chakra += 20;
        }
        this.status(jugadorObjetivo);
    };
    Personaje.prototype.status = function (jugadorObjetivo) {
        console.log(jugadorObjetivo);
        console.log(this);
    };
    return Personaje;
}());
var naruto = new Personaje('naruto');
var sasuke = new Personaje('sasuke');
console.log(naruto);
console.log(sasuke);
