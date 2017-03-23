'use strict';

 class Item {
  constructor(name) {
    this.name = name;
  }
}

 class Weapon extends Item {
  constructor(name, damage){
    super(name);
    this.damage = damage;
  }
 }


 class Food extends Item {
  constructor(name, energy){
    super(name);
    this.energy = energy;
  }
 }


class Player {
  constructor(name, health, strength, speed){
    this._pack = [];
    this._maxHealth = health;
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.isAlive = true;
    this.equipped = false;
  }

    getPack(){
      return this._pack;
    }

    getMaxHealth(){
      return this._maxHealth;
    }

    checkPack(){
      console.log(this._pack);
    }

    takeItem(item){
      if(this._pack.length < 3){
        this._pack.push(item);
        console.log(this.name + "has " + this._pack.length + " items in their pack.")
        return true;
      } else{
        console.log("The pack is full");
        return false;
      }
    }

    discardItem(item){
      if(this._pack.indexOf(item) === -1){
        console.log("You do not have this item in your pack");
        return false;
      } else{
        var removed = this._pack.splice(this._pack.indexOf(item), 1);
        console.log(this.name
          + " now has "
          + this._pack.length
          + "items in their pack. "
          + removed
          + " was removed from the pack.");

          return true;
      }
    }

    equip(itemToEquip){
      if(this.equipped !== false){
        this._pack[this._pack.indexOf(itemToEquip)] = this.equipped;
        this.equipped = itemToEquip;
      }else if(this._pack.indexOf(itemToEquip) === -1 || itemToEquip instanceof Weapon === false){
        return false;
      }else {
        this.equipped = itemToEquip;
        this.discardItem(itemToEquip);
      }
    }

    eat(itemToEat){
      if(this._pack.indexOf(itemToEat) === -1 || itemToEat instanceof Food === false){
        return false;
      }else if(this.getMaxHealth() - this.health <= itemToEat.energy){
        this.health = this.getMaxHealth();
      }else{
        this.health += itemToEat.energy;
      }
      this.discardItem(itemToEat);
    }

    useItem(item){
      if(item instanceof Weapon === true){
        this.equip(item);
      }
      if(item instanceof Food === true){
        this.eat(item);
      }
    }

    equippedWith(){
      if(this.equipped !== false){
        console.log(this.name + " has equipped: " + this.equipped.name);
        return this.equipped.name;
      }else{
        console.log("Nothing is equipped.");
        return false;
      }
    }
}

class Zombie{
  constructor(health, strength, speed){
    this._maxHealth = health;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.isAlive = true;
  }
}

class FastZombie extends Zombie{
  constructor(health, strength, speed){
    super(health, strength, speed);
  }
}

class StrongZombie extends Zombie{
  constructor(health, strength, speed){
    super(health, strength, speed);
  }
}

class RangedZombie extends Zombie{
  constructor(health, strength, speed){
    super(health, strength, speed);
  }
}

class ExplodingZombie extends Zombie{
  constructor(health, strength, speed){
    super(health, strength, speed);
  }
}

function runGame() {

}
