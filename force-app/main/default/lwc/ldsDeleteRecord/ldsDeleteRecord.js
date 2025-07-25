import { LightningElement,api } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';
export default class LdsDeleteRecord extends LightningElement 
{

    @api objectApiName;
    @api recordId;

    delfun()
    {
      
        deleteRecord(this.recordId)
        .then(result=>{
                         const delmsg = new ShowToastEvent({
                                                              title:'Delete record',
                                                              variant:'success',
                                                              mode:'disimisible',
                                                              message:'Record Has beeen deleted Successfully'

                                                           })
                                                           this.dispatchEvent(delmsg);       

                      })

        .catch(error=>{

            const delerrormsg = new ShowToastEvent({
                                                      title:'Delete record',
                                                      variant:'success',
                                                      mode:'disimisible',
                                                      message:'Record Has beeen deleted Successfully'

                                                   })
                                                  this.dispatchEvent(delerrormsg);

            })

             // Redirect the User to the Default Home Page..
             this[NavigationMixin.Navigate]({

                type: 'standard__objectPage',
                attributes: {
                              
                                objectApiName :this.objectApiName,
                                actionName : 'list'
                            },
                    state:{
                              filterName:'00B5j00000g6BV2EAM'
                          }                          
                                            });

    }

}


 