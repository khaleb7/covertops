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
    } else { data.skills.academic.base = Math.ceil(Number(data.abilities.log.value) / 2)};
    data.skills.academic.value = Number(data.skills.academic.base) + Number( 10 * data.skills.academic.level); ;



  }



}