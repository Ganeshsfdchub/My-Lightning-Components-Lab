import { LightningElement,track,api } from 'lwc';

export default class LightningRecordViewFormFetchRecord extends LightningElement 
{
     @api recordId;
     @api objectApiName;
}