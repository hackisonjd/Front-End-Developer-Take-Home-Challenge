export interface Contact {
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
  errorSeverity: string;
  errorTime: number;
}
