import { LightningElement, api,track,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
export default class LdsGetRecordThroughProperty extends LightningElement 
{
  @api recordId;
  @track wireproty;

  @wire(getRecord,{recordId:'$recordId',fields:['Account.Name', 'Account.Rating', 'Account.Industry', 'Account.AnnualRevenue']})wireproty;
  
}