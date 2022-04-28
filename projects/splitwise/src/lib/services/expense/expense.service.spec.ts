import { TestBed } from '@angular/core/testing';

import { ExpenseService } from './expense.service';
import { createExpenseInterface } from '../../helpers/expense.interface.creator';
import { createUserInterface } from '../../helpers/user.interface.creator';

describe('ExpenseService', () => {
    let service: ExpenseService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ExpenseService]
        });
        service = TestBed.inject(ExpenseService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('#createExpense should create a expense', () => {
        service.createExpense(createExpenseInterface());
        expect(service['expenses'].length).toBeGreaterThanOrEqual(1);
        expect(service['expenses'][0]).toEqual(createExpenseInterface(1));
    });

    it('#getAllExpensesByGroupId should return all expenses of a group', () => {
        const userServiceSpy = jasmine.createSpyObj('UserService', ['getUser']);
        const user = createUserInterface(1);

        userServiceSpy.getUser.and.returnValue(user);

        service = new ExpenseService(userServiceSpy);
        service.createExpense(createExpenseInterface(1));

        expect(service.getAllExpensesByGroupId(1))
            .withContext('service returned stub value')
            .toEqual([createExpenseInterface(1, user)]);
    });
});
