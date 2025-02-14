import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirtualAssistantComponent } from './virtual-assistant.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [VirtualAssistantComponent],
  exports: [VirtualAssistantComponent]
})
export class VirtualAssistanceComponentModule {}
