import { LightningElement, track } from 'lwc';
import getAccountData from '@salesforce/apex/ImperativeDemo.getAccountData'

export default class ImperativeDemo extends LightningElement {
    columns = [
    { label: 'Name', fieldName: 'Name'},
    { label: 'Record Id', fieldName: 'Id'},
    { label: 'Phone', fieldName: 'Phone', type: 'phone'}
];

    isDataRetrieved = false;
    @track data = [];

    handleClick(){
        getAccountData()
        .then(result =>{
            this.data = result;
            this.isDataRetrieved = true
        })
        .catch( error =>{
            console.log('Error Occured '+error);
        })
    }
    handleClearData(){
        this.data = [];
        this.isDataRetrieved = false;
    }
}