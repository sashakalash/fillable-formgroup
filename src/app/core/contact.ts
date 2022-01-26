import { StatusEnum } from '../components/status-control/status-control.component';

export class Contact {
  constructor(public code: string, public phone: string, public status: StatusEnum) {}
}
