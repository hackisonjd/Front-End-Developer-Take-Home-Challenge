import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { map } from 'rxjs';
import { Alert, Contact } from '../models/alert.model'

@Injectable({providedIn: 'root'})
export class AlertDataService {
  private http = inject(HttpClient);

  loadAlerts() {
    return this.http.get<Contact>('assets/data.json').pipe(
      map(data => this.transform(data))
    );
  }

  private transform(data: unknown): Alert[] {
    // TODO: Fix this to be typesafe
    const contacts = data as any[];

    return contacts.flatMap(contact =>
      contact.alerts.map((alert: any) => ({
        errorId: alert.errorId,
        errorMessage: alert.errorMessage,
        errorSeverity: alert.errorSeverity,
        errorTime: alert.errorTime,
        acknowledged: false,
        contactName: contact.contactName,
        contactBeginTimestamp: contact.contactBeginTimestamp,
        contactEndTimestamp: contact.contactEndTimestamp,
        contactSatellite: contact.contactSatellite,
        contactDetail: contact.contactDetail
      }))
    )
  }


}
