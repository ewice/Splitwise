import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { createUserInterface } from '../../helpers/user.interface.creator';

describe('UserService', () => {
    let service: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserService);
        service['users'] = [];
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('#createUser should create a user', () => {
        service.createUser(createUserInterface());

        expect(service['users'].length).toBeGreaterThanOrEqual(1);
        expect(service['users'][0]).toEqual(createUserInterface(1));
    });

    it('#getAllUsers should return all users', () => {
        service.createUser(createUserInterface());
        service.createUser(createUserInterface());

        expect(service.getAllUsers().length).toBeGreaterThanOrEqual(2);
        expect(service.getAllUsers()).toEqual([createUserInterface(1), createUserInterface(2)]);
    });

    it('#getUser should return an user by id', () => {
        service.createUser(createUserInterface());

        expect(service.getUser(1)).toEqual(createUserInterface(1));
    });

    it('#getUser should not return an user by an unknown id', () => {
        service.createUser(createUserInterface());

        expect(service.getUser(42)).toBe(undefined);
    });

    it('#getAllUsersByIds should return all users by ids', () => {
        service.createUser(createUserInterface());
        service.createUser(createUserInterface());
        service.createUser(createUserInterface());

        expect(service.getAllUsersByIds([1, 2, 3])).toEqual([
            createUserInterface(1),
            createUserInterface(2),
            createUserInterface(3)
        ]);
    });

    it('#getAllUsersByIds should return empty array of unknown ids', () => {
        service.createUser(createUserInterface());
        service.createUser(createUserInterface());

        expect(service.getAllUsersByIds([3]).length).toBe(0);
    });
});
