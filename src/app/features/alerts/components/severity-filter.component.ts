import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { AlertSeverity } from "../models/alert.model";
import { RuxSelect, RuxOption } from '@astrouxds/angular'

@Component({
  selector: 'app-severity-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'severity-filter.component.html',
  imports: [RuxSelect, RuxOption]
})
export class SeverityFilterComponent {
  readonly value = input.required<AlertSeverity | 'ALL'>();
  readonly valueChange = output<AlertSeverity | 'ALL'>();

  onChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.valueChange.emit(select.value as AlertSeverity | 'ALL');
  }
}
