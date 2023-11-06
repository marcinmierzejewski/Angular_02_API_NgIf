import { Component, Input } from "@angular/core";
import { CommonModule, NgFor } from "@angular/common";
import { Task } from "./Task";

@Component({
  selector: "app-tasks-list",
  standalone: true,
  imports: [NgFor],
  template: `
    <ul>
      <li *ngFor="let task of tasks">
        <button
          [class.line-through]="task.done"
          (click)="toggleDoneStatus(task)"
        >
          {{ task.name }}
        </button>
      </li>
    </ul>
  `,
  styles: [],
})
export class TasksListComponent {
  @Input({required: true}) tasks: Task[] = [];

  toggleDoneStatus(task: Task) {
    task.done = !task.done;
  }
}
