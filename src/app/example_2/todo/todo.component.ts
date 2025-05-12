import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  template: `
    <input [(ngModel)]="newTask" />
    <button (click)="add()">Ajouter</button>
    <ul><li *ngFor="let t of tasks">{{ t }}</li></ul>
  `
})
export class TodoComponent {
  tasks: string[] = [];
  newTask = '';

  add() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }
}