import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 'e8b18a34-9c73-4b6b-a0c9-ed0708a26ec9',
  login: 'hC',
};

export const sampleWithPartialData: IUser = {
  id: 'c9dfd802-a95e-40f9-8de1-224f98b23ded',
  login: 'dgRr',
};

export const sampleWithFullData: IUser = {
  id: 'a807aead-9617-49e7-86a3-27c13f2114e1',
  login: 'Tm9Y',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
