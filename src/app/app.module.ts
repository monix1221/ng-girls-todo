import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoListService } from './todo-list/todo-list.service';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './item/item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {TodoListStorageService} from './todo-list-storage/todo-list-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ItemComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoListService, TodoListStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
