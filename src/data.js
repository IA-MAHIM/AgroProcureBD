import heroFarm from './assets/hero-farm.svg'
import marketImage from './assets/market.svg'
import procurementImage from './assets/procurement.svg'
import registerImage from './assets/register.svg'
import dashboardImage from './assets/dashboard.svg'
import idUploadImage from './assets/id-upload.svg'

export const images = {
  heroFarm,
  marketImage,
  procurementImage,
  registerImage,
  dashboardImage,
  idUploadImage,
}

export const sampleProducts = [
  { id: 1, name: 'Rice', bnName: 'চাল', farmer: 'Rahim Farmer', district: 'Rajshahi', price: 62, unit: 'kg', quantity: 1200, category: 'Grain', status: 'Available' },
  { id: 2, name: 'Potato', bnName: 'আলু', farmer: 'Karim Farmer', district: 'Bogura', price: 35, unit: 'kg', quantity: 700, category: 'Vegetable', status: 'Available' },
  { id: 3, name: 'Onion', bnName: 'পেঁয়াজ', farmer: 'Sufia Farmer', district: 'Pabna', price: 85, unit: 'kg', quantity: 400, category: 'Vegetable', status: 'Available' },
  { id: 4, name: 'Mango', bnName: 'আম', farmer: 'Amin Farmer', district: 'Chapainawabganj', price: 95, unit: 'kg', quantity: 300, category: 'Fruit', status: 'Available' },
]

export const procurementRequests = [
  { id: 'PR-001', product: 'Rice', bnProduct: 'চাল', quantity: '2000 kg', district: 'Dhaka', budget: '৳ 130,000', deadline: '7 days', status: 'Open' },
  { id: 'PR-002', product: 'Potato', bnProduct: 'আলু', quantity: '1000 kg', district: 'Gazipur', budget: '৳ 38,000', deadline: '5 days', status: 'Open' },
  { id: 'PR-003', product: 'Onion', bnProduct: 'পেঁয়াজ', quantity: '800 kg', district: 'Narayanganj', budget: '৳ 70,000', deadline: '6 days', status: 'Open' },
]

export const officerRequests = [
  { id: 1, name: 'Md. Rahim Uddin', department: 'Agriculture Office', employeeId: 'AG-2045', district: 'Dhaka', status: 'Pending' },
  { id: 2, name: 'Nusrat Jahan', department: 'Food Program Office', employeeId: 'FO-1189', district: 'Gazipur', status: 'Pending' },
]

export const orders = [
  { id: 'ORD-101', product: 'Potato', bnProduct: 'আলু', quantity: '50 kg', amount: '৳ 1,750', status: 'Pending' },
  { id: 'ORD-102', product: 'Rice', bnProduct: 'চাল', quantity: '100 kg', amount: '৳ 6,200', status: 'Accepted' },
]

export const bids = [
  { id: 'BID-501', request: 'PR-001', product: 'Rice', price: '৳ 60/kg', quantity: '2000 kg', status: 'Submitted' },
  { id: 'BID-502', request: 'PR-002', product: 'Potato', price: '৳ 34/kg', quantity: '1000 kg', status: 'Submitted' },
]
