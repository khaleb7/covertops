/**
 * Extend the base Actor entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class covertOpsActor extends Actor {

  /**
   * Augment the basic actor data with additional dynamic data.
   */
  prepareData() {
    super.prepareData();

    const actorData = this.data;
    const data = actorData.data;
    const flags = actorData.flags;

    // Make separate methods for each Actor type (character, npc, etc.) to keep
    // things organized.
    if (actorData.type === 'character') this._prepareCharacterData(actorData);
  }

  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(actorData) {
    const data = actorData.data;

    // Make modifications to data here. For example:

    // Loop through ability scores, and add their modifiers to our sheet output.
    for (let [key, ability] of Object.entries(data.abilities)) {
      // Calculate the modifier using d20 rules.
      ability.mod = Math.floor((ability.value - 10) / 2);
    }
    // set base skill values
    if (data.skills.academic.primSec == "P") {
      data.skills.academic.base = Math.ceil(Number(data.abilities.log.value) / 2) + 20;
    } else if (data.skills.academic.primSec == "S") {
      data.skills.academic.base = Math.ceil(Number(data.abilities.log.value) / 2) + 10;
    } else {
      data.skills.academic.base = Math.ceil(Number(data.abilities.log.value) / 2);
    }
    data.skills.academic.value = Number(data.skills.academic.base) + Number(10 * data.skills.academic.level);


    if (data.skills.investigator.primSec == "P") {
      data.skills.investigator.base = Math.ceil(Number(data.abilities.log.value) / 2) + 20;
    } else if (data.skills.investigator.primSec == "S") {
      data.skills.investigator.base = Math.ceil(Number(data.abilities.log.value) / 2) + 10;
    } else {
      data.skills.investigator.base = Math.ceil(Number(data.abilities.log.value) / 2);
    }
    data.skills.investigator.value = Number(data.skills.investigator.base) + Number(10 * data.skills.investigator.level);

    if (data.skills.leader.primSec == "P") {
      data.skills.leader.base = Math.ceil(Number(data.abilities.wil.value) / 2) + 20;
    } else if (data.skills.leader.primSec == "S") {
      data.skills.leader.base = Math.ceil(Number(data.abilities.wil.value) / 2) + 10;
    } else {
      data.skills.leader.base = Math.ceil(Number(data.abilities.wil.value) / 2);
    }

    if (data.skills.leader.level > 0) {
      data.skills.leader.value = Number(data.skills.leader.base) + Number(10 * data.skills.leader.level);
    }


    if (data.skills.jedi.primSec == "P") {
      data.skills.jedi.base = Math.ceil(Number(data.abilities.wil.value) / 2) + 20;
    } else if (data.skills.jedi.primSec == "S") {
      data.skills.jedi.base = Math.ceil(Number(data.abilities.wil.value) / 2) + 10;
    } else {
      data.skills.jedi.base = Math.ceil(Number(data.abilities.wil.value) / 2);
    }

    if (data.skills.jedi.level > 0) {
      data.skills.jedi.value = Number(data.skills.jedi.base) + Number(10 * data.skills.jedi.level);
    }

    if (data.skills.sith.primSec == "P") {
      data.skills.sith.base = Math.ceil(Number(data.abilities.wil.value) / 2) + 20;
    } else if (data.skills.sith.primSec == "S") {
      data.skills.sith.base = Math.ceil(Number(data.abilities.wil.value) / 2) + 10;
    } else {
      data.skills.sith.base = Math.ceil(Number(data.abilities.wil.value) / 2)
    };
    if (data.skills.sith.level > 0) {
      data.skills.sith.value = Number(data.skills.sith.base) + Number(10 * data.skills.sith.level);
    }


    if (data.skills.medic.primSec == "P") {
      data.skills.medic.base = Math.ceil(Number(data.abilities.log.value) / 2) + 20;
    } else if (data.skills.medic.primSec == "S") {
      data.skills.medic.base = Math.ceil(Number(data.abilities.log.value) / 2) + 10;
    } else {
      data.skills.medic.base = Math.ceil(Number(data.abilities.log.value) / 2);
    }

    if (data.skills.medic.level > 0) {
      data.skills.medic.value = Number(data.skills.medic.base) + Number(10 * data.skills.medic.level);
    }


    if (data.skills.scout.primSec == "P") {
      data.skills.scout.base = Math.ceil(Number(data.abilities.log.value) / 2) + 20;
    } else if (data.skills.scout.primSec == "S") {
      data.skills.scout.base = Math.ceil(Number(data.abilities.log.value) / 2) + 10;
    } else {
      data.skills.scout.base = Math.ceil(Number(data.abilities.log.value) / 2);
    }
    data.skills.scout.value = Number(data.skills.scout.base) + Number(10 * data.skills.scout.level);

    if (data.skills.soldier.primSec == "P") {
      data.skills.soldier.base = Math.ceil(Number(data.abilities.dex.value) / 2) + 20;
    } else if (data.skills.soldier.primSec == "S") {
      data.skills.soldier.base = Math.ceil(Number(data.abilities.dex.value) / 2) + 10;
    } else {
      data.skills.soldier.base = Math.ceil(Number(data.abilities.dex.value) / 2);
    }
    data.skills.soldier.value = Number(data.skills.soldier.base) + Number(10 * data.skills.soldier.level);

    if (data.skills.warrior.primSec == "P") {
      data.skills.warrior.base = Math.ceil(Number(data.abilities.str.value) / 2) + 20;
    } else if (data.skills.warrior.primSec == "S") {
      data.skills.warrior.base = Math.ceil(Number(data.abilities.str.value) / 2) + 10;
    } else {
      data.skills.warrior.base = Math.ceil(Number(data.abilities.str.value) / 2);
    }

    data.skills.warrior.value = Number(data.skills.warrior.base) + Number(10 * data.skills.warrior.level);

    if (data.skills.technician.primSec == "P") {
      data.skills.technician.base = Math.ceil(Number(data.abilities.log.value) / 2) + 20;
    } else if (data.skills.technician.primSec == "S") {
      data.skills.technician.base = Math.ceil(Number(data.abilities.log.value) / 2) + 10;
    } else {
      data.skills.technician.base = Math.ceil(Number(data.abilities.log.value) / 2);
    }

    data.skills.technician.value = Number(data.skills.technician.base) + Number(10 * data.skills.technician.level);

    if (data.skills.thief.primSec == "P") {
      data.skills.thief.base = Math.ceil(Number(data.abilities.log.value) / 2) + 20;
    } else if (data.skills.thief.primSec == "S") {
      data.skills.thief.base = Math.ceil(Number(data.abilities.log.value) / 2) + 10;
    } else {
      data.skills.thief.base = Math.ceil(Number(data.abilities.log.value) / 2);
    }

    data.skills.thief.value = Number(data.skills.thief.base) + Number(10 * data.skills.thief.level);

  }
}