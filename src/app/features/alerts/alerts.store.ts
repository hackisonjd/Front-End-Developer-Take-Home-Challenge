import { computed, Injectable, signal } from '@angular/core';
import { Alert, AlertSeverity } from './models/alert.model';

@Injectable({ providedIn: 'root' })
export class AlertsStore {
  private alerts = signal<Alert[]>([]);
  private severityFilter = signal<AlertSeverity | 'ALL'>('ALL');

  sortedAlerts = computed(() => [...this.alerts()].sort((a, b) => b.errorTime - a.errorTime));

  filteredAlerts = computed(() => {
    const severity = this.severityFilter();
    if (severity == 'ALL') return this.sortedAlerts();
    return this.sortedAlerts().filter(a => a.errorSeverity === severity);
  })
}
