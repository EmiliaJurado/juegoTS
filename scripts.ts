
class Personaje {
    ki : number = 100;
    semillas : number = 100;
    nombre : string = "";
    mana : number = 30;
    sayayin : number = 25;
    ataques : number = 10;
    
    constructor(nombre : string){
        this.nombre = nombre;
    }
    



    ataque(jugadorObjetivo : any){
        jugadorObjetivo.vida -= this.ataques;
        this.status(jugadorObjetivo);
    }

    curar(jugadorObjetivo :  any){
        if (this.ki >= 100) {
            console.log('Esta  habilidad no esta enn uso');
        } else {
            jugadorObjetivo.vida += 20;
            this.semillas -= 20;
        }
        this.status(jugadorObjetivo);
    }

    habilida(jugadorObjetivo : any){
        if (this.semillas >= 30) {
            jugadorObjetivo.vida -= 45;
            this.semillas -= this.mana;
        }else{
            console.log('No hay semillas')
        }
        this.status(jugadorObjetivo);
    }

    habilidad(jugadorObjetivo : any ){
        if (this.semillas >= 25) {
            jugadorObjetivo.vida -= 40;
            this.semillas -= this.sayayin;
        } else {
            console.log('Mana activida')
        }
        this.status(jugadorObjetivo);
    }

    revivir(jugadorObjetivo : any){
        if (this.ki <= 0) {
            jugadorObjetivo.vida += 30;
        }else{
            console.log('No se puede usar esta habilidad');
        }
        this.status(jugadorObjetivo);
    }

    semillass(jugadorObjetivo : any){
        if (this.semillas >= 100) {
            console.log('No se puede usar esta habilidad');
        } else {
            jugadorObjetivo.chakra += 20;
        }
        this.status(jugadorObjetivo);
    }

    status(jugadorObjetivo : number){
        console.log(jugadorObjetivo);
        console.log(this);
    }

}

const personaje1 = new Personaje('VEGUETA');
const personaje2 = new Personaje('GOKU');

console.log(personaje1);
console.log(personaje2);