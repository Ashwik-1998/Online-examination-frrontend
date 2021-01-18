import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionsearch'
})
export class QuestionsearchPipe implements PipeTransform {

  transform(data:any,searchtermsubj:string,searchtermdesc:string): any[] {

    if(!data||!searchtermsubj||!searchtermdesc){
      return data;
    }
    else{
      
      data=data.filter(obj=>obj.subjectName.toLowerCase().indexOf(searchtermsubj.toLowerCase())!==-1)

      data=data.filter(obj=>obj.questionDesc.toLowerCase().indexOf(searchtermdesc.toLowerCase())!==-1)
  
      return data;   
    }

}
}