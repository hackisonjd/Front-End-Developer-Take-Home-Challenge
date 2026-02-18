// Enum for Severity of alerts, since they can only be specific values
export type AlertSeverity = 'caution' | 'serious' | 'critical'

export interface Contact {
  id: string;
  contactName: number;
  contactBeginTimestamp: number;
  contactEndTimestamp: number;
  contactSatellite: string;
  contactDetail: string;
  alerts: Alert[];
}

export interface Alert {
  errorId: string;
  errorMessage: string;
  errorSeverity: AlertSeverity;
  errorTime: number;
}
