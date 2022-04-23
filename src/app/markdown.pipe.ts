import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (value && value.length > 0) {
      return marked(value);
    }
    return value;
  }

}

