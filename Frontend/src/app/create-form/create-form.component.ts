import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  public myForm: FormGroup;




  constructor(private _fb: FormBuilder) {
  }



  ngOnInit() {
    this.myForm = this._fb.group({
        name: ['', [Validators.required, Validators.required]],
        questions: this._fb.array([
            this.initQuestion(),
        ])
    });
  }

    initQuestion() {
        // initialize our question
        return this._fb.group({
            questionText: ['', Validators.required],
            type: ['', Validators.required],
            options: ['']
        });
    }

    addAddress() {
        // add question to the list
        const control = <FormArray>this.myForm.controls['questions'];
        control.push(this.initQuestion());
    }

    removeAddress(i: number) {
        // remove address from the list
        const control = <FormArray>this.myForm.controls['questions'];
        control.removeAt(i);
    }





  save(model: any) {
    // call API to save customer
    console.log(model);
}

}
