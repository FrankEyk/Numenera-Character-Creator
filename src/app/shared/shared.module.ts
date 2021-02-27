import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeComponent } from './components/attribute/attribute.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AttributeComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [AttributeComponent],
})
export class SharedModule {}
