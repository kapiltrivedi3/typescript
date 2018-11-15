import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import * as Collections from 'typescript-collections';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  abc:any;
  xyz:any;
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
      a:[''],
       b:[''],
        c:[''],
         d:[''],
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
   
  });

  get aliases() {
    this.xyz =new Collections.Queue<any>();
    this.abc =new Collections.Set<any>();
    this.abc.add(this.profileForm);
    this.xyz.enqueue(this.abc);
    return this.xyz.dequeue('aliases') as FormArray;

  }

  constructor(private fb: FormBuilder) { }


  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
  
    console.warn(this.profileForm.value);
  }
}

