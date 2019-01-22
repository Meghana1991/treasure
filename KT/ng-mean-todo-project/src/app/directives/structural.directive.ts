import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructural]'
})
export class StructuralDirective {
  /** Here the above line is transformed to  
      <div [appStructural]="choice">
      inside the ng-template
      Hence it is important that the appStructural should be same name in the @Input tag if used
  **/
  @Input() set appStructural(condition: boolean) {
    /**
     * `set` is used because on any @Input receival or change, I need to trigger a function
     * Any structural directive will be transformed to <ng-template> syntax in reality when we use *
     */
    if (condition) {
      /**
       * Creates a view with the template sent as the param
       */
      this.vcRef.createEmbeddedView(this.templateRef)
    } else {
      this.vcRef.clear()
    }
  }
  /**
   * We can get access to the ng-template and to the place we want to place the ng-template can be injected
   */
  constructor(
    private templateRef: TemplateRef<any>, // To get access to template or <ng-template>
    private vcRef: ViewContainerRef //Where to place the template in DOM can be achieved by viewcontainerref
  ) { }

}