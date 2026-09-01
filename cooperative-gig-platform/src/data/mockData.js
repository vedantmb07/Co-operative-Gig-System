export const services = [
  { id: 1, name: 'Electrician', icon: 'Zap', category: 'Home Repair', basePrice: 500, description: 'Licensed electricians for wiring, fixtures, and repairs.' },
  { id: 2, name: 'Plumber', icon: 'Wrench', category: 'Home Repair', basePrice: 450, description: 'Expert plumbers for leaks, installations, and drainage.' },
  { id: 3, name: 'Carpenter', icon: 'Hammer', category: 'Construction', basePrice: 600, description: 'Skilled carpenters for furniture, fittings, and woodwork.' },
  { id: 4, name: 'Painter', icon: 'Paintbrush', category: 'Home Improvement', basePrice: 350, description: 'Professional painters for interior and exterior walls.' },
  { id: 5, name: 'Domestic Helper', icon: 'Sparkles', category: 'Housekeeping', basePrice: 300, description: 'Trained helpers for cleaning, organizing, and home management.' },
  { id: 6, name: 'Caregiver', icon: 'Heart', category: 'Healthcare', basePrice: 400, description: 'Certified caregivers for elderly and special needs support.' },
  { id: 7, name: 'Driver', icon: 'Car', category: 'Transport', basePrice: 250, description: 'Verified drivers for daily commute and long-distance travel.' },
  { id: 8, name: 'Gardener', icon: 'Flower2', category: 'Maintenance', basePrice: 300, description: 'Gardeners for landscaping, pruning, and lawn care.' },
  { id: 9, name: 'Cleaner', icon: 'Droplets', category: 'Housekeeping', basePrice: 250, description: 'Deep cleaning specialists for homes and offices.' },
  { id: 10, name: 'Technician', icon: 'Cpu', category: 'Electronics', basePrice: 400, description: 'Technicians for AC, fridge, washing machine, and electronics repair.' },
]

export const workers = [
  { id: 1, name: 'Ramesh Kumar', skill: 'Electrician', experience: 8, rating: 4.8, jobs: 124, location: 'Sector 12, Noida', available: true, verified: true, cooperative: 'Noida Workers Co-op', image: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Suresh Patel', skill: 'Plumber', experience: 12, rating: 4.9, jobs: 210, location: 'Indirapuram, Ghaziabad', available: true, verified: true, cooperative: 'UP Labour Federation', image: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Anita Devi', skill: 'Domestic Helper', experience: 5, rating: 4.7, jobs: 89, location: 'DLF Phase 2, Gurgaon', available: false, verified: true, cooperative: 'Women Workers Co-op', image: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'Mohan Singh', skill: 'Driver', experience: 10, rating: 4.6, jobs: 156, location: 'Connaught Place, Delhi', available: true, verified: true, cooperative: 'Delhi Transport Co-op', image: 'https://i.pravatar.cc/150?u=4' },
  { id: 5, name: 'Priya Sharma', skill: 'Caregiver', experience: 6, rating: 4.9, jobs: 67, location: 'Vasant Kunj, Delhi', available: true, verified: true, cooperative: 'Care Workers Federation', image: 'https://i.pravatar.cc/150?u=5' },
  { id: 6, name: 'Vijay Thakur', skill: 'Carpenter', experience: 15, rating: 4.5, jobs: 312, location: 'Old Delhi', available: true, verified: true, cooperative: 'Noida Workers Co-op', image: 'https://i.pravatar.cc/150?u=6' },
]

export const initialBookings = [
  { id: 101, workerId: 1, customer: 'Amit Verma', service: 'Electrician', date: '2026-08-29', time: '10:00 AM', status: 'confirmed', address: 'A-45, Sector 15, Noida' },
  { id: 102, workerId: 2, customer: 'Neha Gupta', service: 'Plumber', date: '2026-08-29', time: '02:00 PM', status: 'pending', address: 'B-12, Indirapuram' },
  { id: 103, workerId: 4, customer: 'Rahul Joshi', service: 'Driver', date: '2026-08-30', time: '08:00 AM', status: 'confirmed', address: 'IGI Airport, Delhi' },
  { id: 104, workerId: 5, customer: 'Sunita Rao', service: 'Caregiver', date: '2026-08-30', time: '09:00 AM', status: 'completed', address: 'Vasant Kunj, Delhi' },
]

export const ratings = [
  { id: 1, workerId: 1, customer: 'Amit Verma', rating: 5, comment: 'Excellent work, very punctual.', date: '2026-08-28' },
  { id: 2, workerId: 1, customer: 'Kavita Singh', rating: 4, comment: 'Good service, arrived on time.', date: '2026-08-25' },
  { id: 3, workerId: 2, customer: 'Neha Gupta', rating: 5, comment: 'Fixed the leak in minutes. Highly recommended!', date: '2026-08-27' },
  { id: 4, workerId: 5, customer: 'Sunita Rao', rating: 5, comment: 'Very caring and professional.', date: '2026-08-26' },
]

export const demandForecast = [
  { day: 'Mon', electricians: 12, plumbers: 8, cleaners: 15 },
  { day: 'Tue', electricians: 10, plumbers: 6, cleaners: 12 },
  { day: 'Wed', electricians: 14, plumbers: 9, cleaners: 18 },
  { day: 'Thu', electricians: 11, plumbers: 7, cleaners: 14 },
  { day: 'Fri', electricians: 13, plumbers: 10, cleaners: 16 },
  { day: 'Sat', electricians: 18, plumbers: 12, cleaners: 22 },
  { day: 'Sun', electricians: 15, plumbers: 9, cleaners: 20 },
]
