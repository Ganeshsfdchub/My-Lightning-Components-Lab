import { LightningElement, track} from 'lwc';
import imparatingmethod from '@salesforce/apex/Accountimparativemehod.imparatingmethod';
export default class ImparativeLtngCard extends LightningElement 
{

    
      @track resultcollection;
      @track numberofRecords;

     handlefun()
     {
         (imparatingmethod)({})
         .then(result=>{
                          this.resultcollection = result;
                          this.numberofRecords= result.length;
                       })

         .catch(error=>{
                          console.log('error occured'+error);
                          this.resultcollection = result;
                       })
     }
     


}