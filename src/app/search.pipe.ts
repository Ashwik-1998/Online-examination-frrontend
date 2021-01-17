import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data:any,searchtermsubj:string,searchtermstate:string,searchtermcity:string,searchname:string): any[] {

    if(!data||!searchtermsubj||!searchtermstate||!searchtermcity||!searchname){
      return data;
    }
    else{
      
      data=data.filter(obj=>obj.testSubjectName.toLowerCase().indexOf(searchtermsubj.toLowerCase())!==-1)
     //data=data.filter(obj=>obj.testLevel.toLowerCase().indexOf(searchtestlevel.toLowerCase())!==-1)
      data=data.filter(obj=>obj.registeredUser["state"].toLowerCase().indexOf(searchtermstate.toLowerCase())!==-1)
      data=data.filter(obj=>obj.registeredUser["city"].toLowerCase().indexOf(searchtermcity.toLowerCase())!==-1)
      data=data.filter(obj=>obj.registeredUser["fullName"].toLowerCase().indexOf(searchname.toLowerCase())!==-1)
      return data;   
    }
    
   
  }

}