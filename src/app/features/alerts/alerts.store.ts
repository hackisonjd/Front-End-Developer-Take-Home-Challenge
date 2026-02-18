import { computed, Injectable, signal } from '@angular/core';
import { Alert, AlertSeverity } from './models/alert.model';

@Injectable({ providedIn: 'root' })
export class AlertsStore {
  private alerts = signal<Alert[]>([]);
  severityFilter = signal<AlertSeverity | 'ALL'>('ALL');

  readonly sortedAlerts = computed(() => [...this.alerts()].sort((a, b) => b.errorTime - a.errorTime));

  readonly filteredAlerts = computed(() => {
    const severity = this.severityFilter();
    if (severity == 'ALL') return this.sortedAlerts();
    return this.sortedAlerts().filter(a => a.errorSeverity === severity);
  })

  setAlerts(alerts: Alert[]): void {
    this.alerts.set(alerts);
  }

  setSeverity(severity: AlertSeverity | 'ALL'): void {
    this.severityFilter.set(severity)
  }

  acknowledgeAlert(errorId: string): void {
    this.alerts.update(alerts =>
      alerts.map(alert =>
        alert.errorId === errorId && !alert.acknowledged
        ? { ...alert, acknowledged: true}
        : alert
      )
    )
  }
}
