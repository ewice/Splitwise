import { Injectable } from '@angular/core';
import { format } from 'date-fns';

@Injectable({
    providedIn: 'root'
})
export class DateService {
    constructor() {}

    formatDate(date?: Date): string | undefined {
        return date ? format(date, 'dd MMM') : undefined;
    }
}
