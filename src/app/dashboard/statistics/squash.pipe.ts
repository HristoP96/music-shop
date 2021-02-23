import { Pipe, PipeTransform } from '@angular/core';

interface IInvoice {
  Date?: string,
  Value:number,
  Product:string
}

@Pipe({
  name: 'squash'
})
export class SquashPipe implements PipeTransform {

  transform(invoices: IInvoice[]):IInvoice[] {
    if(!invoices.length){
      return [];
    }
    let arrCopy = [...invoices];
    let res:IInvoice[] = []

    arrCopy.forEach(i => {
      let index = res.findIndex(e => e.Product === i.Product);
      if (index !== -1){
        res[index].Value += i.Value
      } else {
        res.push(i)
      }
    })


    return res;
  }

}
