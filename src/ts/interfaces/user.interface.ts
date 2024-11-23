export interface IUser {
  createdAt?: string;
  name: string;
  avatar: string;
  email: string;
  mobileNumber: string;
  currency: string;
  isActive: boolean;
  totalUnpaidBooking: string;
  availableLimit: number;
  id: string;
  companyId: string;
}
