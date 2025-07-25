import { LightningElement } from 'lwc';
import{NavigationMixin} from 'lightning/navigation';
export default class LtngNavigationPages extends NavigationMixin(LightningElement) 
{


    tabfun()
    {
          this[NavigationMixin.Navigate]({

            type: 'standard__navItemPage',
            attributes:{
                           apiName:'My_Salesforce_Page'
                       }
          });
    }
    bojctfun()
    {
         this[NavigationMixin.Navigate]({

            type : 'standard__objectPage',
            attributes:{
                          objectApiName:'Account'
                       }
         });
    }
    Homefun()
    {
        
        this[NavigationMixin.Navigate]({

            type : 'standard__objectPage',
            attributes:{
                          objectApiName:'Account',
                          actionName:'home'
                       }
         });
        
    }
    alllstfun()
    {
        this[NavigationMixin.Navigate]({

            type : 'standard__objectPage',
            attributes:{
                          objectApiName:'Account',
                          actionName:'list'
                       },
            state:{
                       filterName:'00B5j00000g6BV2EAM',
                  }
         });
    }
    Recentfun()
    {
        this[NavigationMixin.Navigate]({

            type : 'standard__objectPage',
            attributes:{
                          objectApiName:'Account',
                          actionName:'list'
                       },
            state:{
                       filterName:'Recent'
                  }
         });
    }
    Recordfun()
    {
        this[NavigationMixin.Navigate]({

            type : 'standard__recordPage',
            attributes:{
                          recordId:'0015j00001bDCgvAAG',
                          objectApiName:'Account',
                          actionName:'edit'          //view
                       }
          
         });
    }
    newrecordfun()
    {
        this[NavigationMixin.Navigate]({

            type : 'standard__objectPage',
            attributes:{
                          
                          objectApiName:'Account',
                          actionName:'new'
                       }
          
         });
    }
    webpagefun()
    {
        
        this[NavigationMixin.Navigate]({

            type : 'standard__webPage',
            attributes:{
                          url:'https://www.youtube.com/watch?v=eOGZfvhRtHk'
                       }
          
         });
    }
   

}