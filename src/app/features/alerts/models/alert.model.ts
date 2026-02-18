/**
 * AlertSeverity is an enum for the contact error severity.
 */
export type AlertSeverity = 'caution' | 'serious' | 'critical'

/**
 * The type for the satellite contacts.
 */
export interface Contact {
  id: string;
  contactName: number;
  contactBeginTimestamp: number;
  contactEndTimestamp: number;
  contactSatellite: string;
  contactDetail: string;
  alerts: Alert[];
}

/**
 * The type for each alert that is assigned to a contact.
 */
export interface Alert {
  errorId: string;
  errorMessage: string;
  errorSeverity: AlertSeverity;
  errorTime: number;
}
