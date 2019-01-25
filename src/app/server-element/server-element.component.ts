import { 
  Component, 
  OnInit, 
  Input, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild} 
  from '@angular/core';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { 
    console.log( "Constructor Called" );
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges Called');
    console.log(changes);
  }

  ngOnInit() {
    console.log( "ngOnit Called" );
    console.log('Header Text is' + this.header.nativeElement.textContent);
    console.log('Paragraph Text is' + this.paragraph.nativeElement.textContent);
  }
  ngDoCheck() {
    console.log( "ngDoCheck Called" );
  }
  ngAfterContentInit() {
    console.log( "ngAfterContentInit Called" );
    console.log('Paragraph Text is' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked() {
    console.log( "ngAfterContentChecked Called" );
  }
  ngAfterViewInit() {
    console.log( "ngAfterViewInit Called" );
    console.log('Header Text is ' + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log( "ngAfterViewChecked Called" );
  }
  ngOnDestroy() {
    console.log( "ngOnDestroy Called");
  }

}
