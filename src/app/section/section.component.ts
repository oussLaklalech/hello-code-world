import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../classes/section';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input('section')
  section: Section;

  constructor() { }

  ngOnInit() {
  }

}
