
import { Component, Input , OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {


  @Input('group')
  public questionForm: FormGroup;
  selectedType: string = '';

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedType = event.target.value;
    console.log(this.selectedType);
  }

  constructor() {

  }

  ngOnInit() {
  }

}
