export const productCategories = [
  "Rice",
  "Vegetables",
  "Fruits",
  "Fish",
  "Milk",
  "Egg",
  "Spices",
  "Pulses"
];

export const products = [
  {
    id: 1,
    name: "Premium Miniket Rice",
    category: "Rice",
    farmer: "Rahman Agro Farm",
    district: "Naogaon",
    price: 68,
    unit: "kg",
    quantity: 2500,
    image: "/images/marketplace.svg",
    description: "Clean and fresh Miniket rice supplied directly from verified farmers."
  },
  {
    id: 2,
    name: "Fresh Potato",
    category: "Vegetables",
    farmer: "Bogura Green Field",
    district: "Bogura",
    price: 36,
    unit: "kg",
    quantity: 900,
    image: "/images/farmer-dashboard.svg",
    description: "Fresh potato suitable for retail shops, restaurants and institutional buyers."
  },
  {
    id: 3,
    name: "Seasonal Mango",
    category: "Fruits",
    farmer: "Rajshahi Mango Garden",
    district: "Rajshahi",
    price: 95,
    unit: "kg",
    quantity: 650,
    image: "/images/hero-farm.svg",
    description: "Seasonal mango from Rajshahi with bulk order availability."
  },
  {
    id: 4,
    name: "Farm Fresh Egg",
    category: "Egg",
    farmer: "Narsingdi Poultry",
    district: "Narsingdi",
    price: 12,
    unit: "piece",
    quantity: 5000,
    image: "/images/buyer-dashboard.svg",
    description: "Bulk egg supply for hostels, restaurants and institutional procurement."
  }
];

export const procurementRequests = [
  {
    id: "GOV-2026-001",
    product: "Rice",
    quantity: 5000,
    unit: "kg",
    district: "Dhaka",
    maxBudget: 350000,
    deadline: "2026-09-12",
    status: "Open",
    officer: "Md. Rahim Uddin",
    department: "Department of Agricultural Marketing"
  },
  {
    id: "GOV-2026-002",
    product: "Potato",
    quantity: 2000,
    unit: "kg",
    district: "Gazipur",
    maxBudget: 85000,
    deadline: "2026-09-18",
    status: "Open",
    officer: "Sadia Akter",
    department: "Local Food Supply Office"
  },
  {
    id: "GOV-2026-003",
    product: "Egg",
    quantity: 10000,
    unit: "piece",
    district: "Dhaka",
    maxBudget: 130000,
    deadline: "2026-09-20",
    status: "Reviewing",
    officer: "Aminul Islam",
    department: "Government Hostel Supply"
  }
];

export const bids = [
  {
    id: "BID-101",
    procurementId: "GOV-2026-001",
    farmer: "Rahman Agro Farm",
    offeredPrice: 64,
    quantity: 5000,
    deliveryDate: "2026-09-10",
    status: "Submitted"
  },
  {
    id: "BID-102",
    procurementId: "GOV-2026-002",
    farmer: "Bogura Green Field",
    offeredPrice: 34,
    quantity: 2000,
    deliveryDate: "2026-09-15",
    status: "Shortlisted"
  }
];

export const orders = [
  {
    id: "ORD-5001",
    buyer: "Green Kitchen Restaurant",
    product: "Fresh Potato",
    quantity: 120,
    total: 4320,
    status: "Pending",
    payment: "Not connected yet"
  },
  {
    id: "ORD-5002",
    buyer: "Uttara Grocery Shop",
    product: "Premium Miniket Rice",
    quantity: 300,
    total: 20400,
    status: "Accepted",
    payment: "Not connected yet"
  }
];

export const officerRequests = [
  {
    id: "OFF-301",
    name: "Md. Rahim Uddin",
    employeeId: "AG-29384",
    department: "Department of Agricultural Marketing",
    district: "Dhaka",
    status: "Pending Verification",
    idCard: "Uploaded",
    submittedAt: "2026-08-18"
  },
  {
    id: "OFF-302",
    name: "Sadia Akter",
    employeeId: "LFS-1209",
    department: "Local Food Supply Office",
    district: "Gazipur",
    status: "Pending Verification",
    idCard: "Uploaded",
    submittedAt: "2026-08-18"
  }
];

export const stats = [
  { label: "Registered Farmers", value: "1,250" },
  { label: "Active Products", value: "3,420" },
  { label: "Buyer Orders", value: "850" },
  { label: "Govt. Requests", value: "42" }
];
