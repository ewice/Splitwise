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
        const users = [createUserInterface(1)];

        service.createGroup(createGroupInterface(users));

        expect(service['groups'].length).toBeGreaterThanOrEqual(1);
        expect(service['groups'][0]).toEqual(createGroupInterface(users, 1));
    });

    it('#getAllGroupsByUserId should return all groups of an user', () => {
        const users = [createUserInterface(1)];
        const group = createGroupInterface(users, 1);
        service['groups'] = [group];

        expect(service.getAllGroupsByUserId(1)).toEqual([group]);
    });
});
