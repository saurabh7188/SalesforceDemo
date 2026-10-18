import { LightningElement } from 'lwc';
export default class ChildComponentForDemo extends LightningElement {
    handleSubtract(){
        const subtractCustomEvent = new CustomEvent('subtract')
        this.dispatchEvent( subtractCustomEvent );
    }
    handleAdd(){
        this.dispatchEvent(new CustomEvent('add') );
    }
    handleMultiply(event){
        console.log('AS value '+event.target.value);
        const valueForMultiply = event.target.value;
         console.log('AS value '+valueForMultiply);
        this.dispatchEvent( new CustomEvent('multiply' ,{
            detail : valueForMultiply
        }))
    }
}