
import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronaut: Astronaut[] = [];
    
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
 
 
    sumMass(items: Payload[]): number {
        let sum: number = 0;
        for (let i = 0; i < items.length; i++) {
            sum = sum + items[i].massKg;
        }
        return sum;
     }

     currentMassKg(): number {
         return this.sumMass(this.astronaut) + this.sumMass(this.cargoItems)
     }

    canAdd(item: Payload): boolean {
        // console.log(this.currentMassKg());
        // console.log(item.massKg)
        // console.log(this.totalCapacityKg)
        if (this.currentMassKg() + item.massKg < this.totalCapacityKg) {
            return true;
        } else {
             return false
        }
        
    }

    addCargo(cargo: Cargo) {
         if (this.canAdd(cargo)) {
             this.cargoItems.push(cargo);
             return true
            } else {
                return false
            } 
    }

    addAstronaut(astronaut: Astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronaut.push(astronaut);
            return true
        } else {
            return false 
        }
    }
}

 