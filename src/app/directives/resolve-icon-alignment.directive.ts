import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appResolveIconAlignment]'
})
export class ResolveIconAlignmentDirective {
  @HostBinding('attr.style') attrStyle = 'vertical-align: middle; margin: 5px';
}
