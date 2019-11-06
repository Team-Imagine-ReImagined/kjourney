import { Pipe, PipeTransform } from '@angular/core'
import { DataService } from './data.service'
import { JobFamily } from 'src/models/jobFamily'

@Pipe({
  name: 'asJobFamily'
})
export class AsJobFamilyPipe implements PipeTransform {

  constructor(private data: DataService) { }

  async transform(value: number): Promise<JobFamily> {
    return this.data.getJobFamily(value)
  }

}
