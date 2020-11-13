// Import Modules
import { covertOpsActor } from "./actor/actor.js";
import { covertOpsActorSheet } from "./actor/actor-sheet.js";
import { covertOpsItem } from "./item/item.js";
import { covertOpsItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.covertops = {
    covertOpsActor,
    covertOpsItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = covertOpsActor;
  CONFIG.Item.entityClass = covertOpsItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("covertops", covertOpsActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("covertops", covertOpsItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});