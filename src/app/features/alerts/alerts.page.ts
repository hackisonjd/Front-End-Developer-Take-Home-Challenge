import { Component, ChangeDetectionStrategy, OnInit, inject } from "@angular/core";
import { AlertsStore } from "./alerts.store";
import { AlertDataService } from "./services/alert-data.service";
import { Alert } from "./models/alert.model";
import { SeverityFilterComponent } from "./components/severity-filter.component";

@Component({
  selector: 'app-alerts-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'alerts.page.html',
  imports: [SeverityFilterComponent]
})
export class AlertsPage implements OnInit {
  protected store = inject(AlertsStore);
  private alertService = inject(AlertDataService);

  ngOnInit(): void {
    this.loadAlerts();
  }

  private loadAlerts(): void {
    this.alertService.loadAlerts().subscribe({
      next: (alerts: Alert[]) => this.store.setAlerts(alerts),
      error: (err) => console.error('Something broke!', err)
    })
  }

}
