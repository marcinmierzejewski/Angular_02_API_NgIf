import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-submit-text",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <input
        #searchInput
        (keyup.enter)="submitText.emit(searchInput.value); searchInput.value = ''"
        class="border-b border-b-orange-400 outline-none"
      />
      <button
        (click)="submitText.emit(searchInput.value); searchInput.value = ''"
        class="border border-orange-400 ml-4 px-4"
      >
        Add
      </button>
    </div>
  `,
  styles: [
    `
      input:focus + button {
        @apply text-orange-400;
      }
    `,
  ],
})
export class SubmitTextComponent {
  @Output() submitText = new EventEmitter<string>();
}
