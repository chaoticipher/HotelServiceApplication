import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '92545635-c4de-4912-b63c-4239b603f26c',
};

export const sampleWithPartialData: IAuthority = {
  name: 'a105bf8d-484a-4ffd-a4ac-20b4b1bef599',
};

export const sampleWithFullData: IAuthority = {
  name: 'e9d24c32-3d35-401f-97e2-69593d06c7ee',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
