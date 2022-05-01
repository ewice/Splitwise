import { TestBed } from '@angular/core/testing';

import { PaymentService } from './payment.service';
import { createPaymentInterface } from '../../helpers/payment.interface.creator';
import { createUserInterface } from '../../helpers/user.interface.creator';

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
        const date = new Date();
        service.createPayment(createPaymentInterface(date));

        expect(service['payments'].length).toBeGreaterThanOrEqual(1);
        expect(service['payments'][0]).toEqual(createPaymentInterface(date, 1));
    });

    it('#getAllPaymentsByGroupId should return all payments of a group', () => {
        const date = new Date();
        const userServiceSpy = jasmine.createSpyObj('UserService', ['getUser']);
        const user = createUserInterface(1);

        userServiceSpy.getUser.and.returnValue(user);

        service = new PaymentService(userServiceSpy);
        service.createPayment(createPaymentInterface(date, 1));

        expect(service.getAllPaymentsByGroupId(1))
            .withContext('service returned stub value')
            .toEqual([createPaymentInterface(date, 1, user)]);
    });
});
