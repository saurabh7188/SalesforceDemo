import { LightningElement, api } from 'lwc';
export default class ChildComponentForAPI extends LightningElement {
    @api itemName = 'Velovity Institute'
    @api handleCallFromParent(){
        this.itemName = 'Method invoked from Parent Component';
    }
}