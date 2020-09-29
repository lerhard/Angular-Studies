import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _blogname: string;

  set blogname( name: string)
  {
    this._blogname = name;
  }

  get blogname( )
  {
    if(this._blogname == null)
    {
      return "blogspot";
    }
    else
    {
      return this._blogname;
    }
  }
  get dataV(): any {
    return localStorage.getItem('blog');
  }

  delete()
  {
    localStorage.removeItem('blog');
  }

  get()
  {
    localStorage.setItem('blog', 'thericpost.com');
  }
}
