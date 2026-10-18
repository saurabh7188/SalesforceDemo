import { LightningElement } from 'lwc';
export default class ParentComponentForAPI extends LightningElement {
    handleClick(){
        this.template.querySelector("c-child-component-for-a-p-i").handleCallFromParent();
    }

}