import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({

    selector: 'app-main',
    templateUrl: 'app-main.component.html',
    styleUrls: ['app-main.component.scss']
})
export class AppMainComponent {
  editorModel:string='';
  editorModelChanged(event){
    console.log(event);

  }
  modules={
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote'],

    //  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
     // [{ 'list': 'ordered'}, { 'list': 'bullet' }],
     // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
     // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
     // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

    //  ['clean'],                                         // remove formatting button

     // ['link', 'image', 'video']                         // link and image, video
    ]
  };
}
