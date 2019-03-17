declare var Ext: any;
import { Component, VERSION } from '@angular/core'
import { Router } from '@angular/router'
import { data } from './Data'

Ext.require([
  'Ext.layout.*',
//  'Ext.MessageBox',
//  'Ext.Toast',
//  'Ext.panel.Collapser',
  'Ext.data.TreeStore'
])

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styles: [``]
})
export class AppComponent {
  isPhone = Ext.platformTags.phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null
  title = 'Bou7mid Demo : Sencha ExtAngular 6.7 Boilerplate - Angular v' + VERSION.full

  constructor(private router: Router) {}

  showAppMenu: boolean = false;
  toggleAppMenu = () => {
    this.showAppMenu = !this.showAppMenu
  }

  onHideAppMenu = () => {
    this.showAppMenu = false
  }

  navigate = (event) => {
    var record = event.record;
    this.router.navigate([record.data.id])
  }

  store = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: data
  });

  responsiveConfig = {
    medium: {
      micro: true,
      width: 48
    },
    large: {
      micro: false,
      width: 200
    }
  }
  nav = true;
  micro = false;
  
  toggleMicro = function(event) {
    this.micro = event.value;
    this.nav = this.micro || this.nav;
    this.width = this.micro ? 56 : undefined; 
  }

}
