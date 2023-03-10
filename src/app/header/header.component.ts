import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent {
    public  collapsed:boolean = true;
    @Output() feautureSelected = new EventEmitter<string>;

    onSelect( feature: string){
        this.feautureSelected.emit(feature);
    }
}