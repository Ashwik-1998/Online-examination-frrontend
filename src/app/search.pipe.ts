import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data:any,searchtermsubj:string,searchtermstate:string,searchtermcity:string): any[] {

    if(!data||!searchtermsubj||!searchtermstate||!searchtermcity){
      return data;
    }
    else{
      console.log('hai')
      data=data.filter(obj=>obj.testSubjectName.toLowerCase().indexOf(searchtermsubj.toLowerCase())!==-1)
     // data=data.filter(obj=>obj.testLevel.match(searchtestlevel))
      data=data.filter(obj=>obj.registeredUser["state"].toLowerCase().indexOf(searchtermstate.toLowerCase())!==-1)
      data=data.filter(obj=>obj.registeredUser["city"].toLowerCase().indexOf(searchtermcity.toLowerCase())!==-1)
      return data;   
    }
    
   
  }

}