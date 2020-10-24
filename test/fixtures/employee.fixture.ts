import * as Factory from 'factory.ts';
import {Employee} from '../../src/types/Employee';

export const employeeFactory = Factory.Sync.makeFactory<Employee>({
    firstName: 'Jan',
    lastName: 'Kowalski',
    jobTitle: 'Frontend Developer',
    canWorkRemotely: false,
    hoursAWeek: 40,
});
