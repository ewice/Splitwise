import { TestBed } from '@angular/core/testing';

import { GroupService } from './group.service';
import { createGroupInterface } from '../../helpers/group.interface.creator';
import { createUserInterface } from '../../helpers/user.interface.creator';

describe('GroupService', () => {
    let service: GroupService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GroupService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('#createGroup should create a group', () => {
        service.createGroup(createGroupInterface([1]));

        expect(service['groups'].length).toBeGreaterThanOrEqual(1);
        expect(service['groups'][0]).toEqual(createGroupInterface([1], undefined, 1));
    });

    it('#getAllGroups should return all groups', () => {
        const users = [createUserInterface(1)];
        const userServiceSpy = jasmine.createSpyObj('UserService', ['getAllUsersByIds']);
        const user = createUserInterface(1);

        userServiceSpy.getAllUsersByIds.and.returnValue([user]);

        service = new GroupService(userServiceSpy);
        service.createGroup(createGroupInterface([1]));

        expect(service.getAllGroups())
            .withContext('service returned stub value')
            .toEqual([createGroupInterface([1], users, 1)]);
    });

    it('#getGroupById should return group with id', () => {
        const users = [createUserInterface(1)];
        const userServiceSpy = jasmine.createSpyObj('UserService', ['getAllUsersByIds']);
        const user = createUserInterface(1);

        userServiceSpy.getAllUsersByIds.and.returnValue([user]);

        service = new GroupService(userServiceSpy);
        service.createGroup(createGroupInterface([1]));

        expect(service.getGroupById(1))
            .withContext('service returned stub value')
            .toEqual(createGroupInterface([1], users, 1));
    });

    it('#getGroupById should not return group with unknown groupId', () => {
        const userServiceSpy = jasmine.createSpyObj('UserService', ['getAllUsersByIds']);
        const user = createUserInterface(1);

        userServiceSpy.getAllUsersByIds.and.returnValue([user]);

        service = new GroupService(userServiceSpy);
        service.createGroup(createGroupInterface([1]));

        expect(service.getGroupById(2)).withContext('service returned stub value').toBe(undefined);
    });
});
