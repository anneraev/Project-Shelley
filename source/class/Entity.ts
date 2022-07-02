import Condition from "./entityCondition";

/**
 * Represents a collection of properties and conditions derrived from component objects to conceptualize a single ingame entity and
 * its children.
 * @param {P} props The object which contains the properties derrived from component objects.
 */
export default class Entity<P> {
   constructor (props: P) {
      this.props = props
      this.type = typeof props
   }

   /**
   * The properties of the entity, which all connected objects can access through the global getProps function.
   */
   props: P
   /**
   * Represents collection of factors used to determine the context.
   */
   conditions: Condition[]
   /**
  * Represents the type of entity, determined by the name of the Props object.
  */
   type: string;
   /**
  * The entity's current parent entity.
  */
   private parent: Entity<unknown>

   /**
  * Represents the current overall state or condition of the entity. Meant to be interpreted by various component objects.
  */
   context?: string;

   /**
    * 
    * @param entries the entries derrived from the properties of the component calling this update.
    */
   update(entries: [string, string | number | [string, any]][]) {
      const propEntries = Object.entries(this.props)
      const parentEntries = Object.entries(this.parent.props)
      //for each entry
      entries.forEach(e => {
         let found = false
         
         //for each prop entry, find a match to current entry.
         for (let i = 0; i = propEntries.length; i++){
            if (propEntries[i][0] === e[0]) {
               //confirm found
               found = true
               //update prop entry to match new entry
               const typeProp = typeof propEntries[i][1]
               const typeEntry = typeof e[1]
               if (typeProp === typeEntry){
                  propEntries[i][1] = e[1]
               } else {
                  throw new Error (`Type of entry ${e[0]} does not match type of the corresponding property in entity ${this.type}. Types must match`)
               }
               
               // for each parent entry, find a match to current prop entryTy
               for (let ia = 0; ia = parentEntries.length; ia++){
                  if (parentEntries[ia][0] === propEntries[i][0]) {
                     const typeParent = typeof parentEntries[ia][1]
                     if (typeParent !== typeProp){
                        throw new Error (`Property entry ${propEntries[i][0]} of entity type ${this.type} does not match the type of its parent, entity ${this.parent.type}'s corresponding property entry. Types must match.`);
                     }
                     //determine type of property entry to determnine how property entry affects parent
                     if (typeProp === 'number'){
                        //subtract prop number from parent prop
                           parentEntries[ia][1] = parentEntries[ia][1] - propEntries[i][1]
                     } else if (typeProp === 'string'){
                        //update parent string prop to match prop string.
                        parentEntries[ia][1] = propEntries[i][1]
                     } else {

                        //entry must be a an ordered pair array containing a string and a value. Find a matching string key and update, or else append the new key/value pair to the array.
                        const parentArray = parentEntries[ia][1] as [string, any][]
                        const propArray = propEntries[i][1] as [string, any]
                        let propArrayFound = false
                        if (parentArray.length > 0) {
                           for (let ib = 0; ib = parentArray.length; ib ++ ) {
                              if (parentArray[ib][0] === propArray[0]){
                                 parentArray[ib][1] = propArray[1]
                                 propArrayFound = true;
                                 break
                              }
                           }   
                        }
                        if (propArrayFound === false) {
                           parentArray.push(propArray);
                        }

                     }
                     //break parent entry search if found
                     break
                  }
               }
               //break prop search if found
               break
            }
         }

         if (!found) {
            throw new Error (`Property ${e[0]} of component not found in Entity ${this.type}. Please be sure property names in the component and entity match.`)
         }
      })
   }
}