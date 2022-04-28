import { TestBed } from '@angular/core/testing';

import { PaymentService } from './payment.service';
import { createPaymentInterface } from '../../helpers/payment.interface.creator';

describe('PaymentService', () => {
    let service: PaymentService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PaymentService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('#createPayment should create a payment', () => {
        service.createPayment(createPaymentInterface());

        expect(service['payments'].length).toBeGreaterThanOrEqual(1);
        expect(service['payments'][0]).toEqual(createPaymentInterface(1));
    });

    // it('#getAllPaymentsByGroupId should return all payment for a specific group id', () => {});
});
