import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DemoOfFuntion extends LightningElement {
    mydata = 'This is the demo of Function';
    handleClick(){
        this.showToastEvent();
    }

    showToastEvent(){
        const event = new ShowToastEvent({
            title: 'Show Toast Demo',
            message: 'Want to display toast example',
            variant: 'error'
        })
        
        this.dispatchEvent(event);
    }
}