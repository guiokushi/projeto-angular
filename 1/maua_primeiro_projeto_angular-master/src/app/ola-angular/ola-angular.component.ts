import { Component } from '@angular/core';

@Component({
    selector: 'ola-angular',
    //template: "<p>Olá, Angular.</p>"
    templateUrl: './ola-angular.component.html',
    styleUrls: ['./ola-angular.component.css']
})
export class OlaAngularComponent {
    framework = "Angular";
}
