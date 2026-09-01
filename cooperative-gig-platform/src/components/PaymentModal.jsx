import { useState } from 'react'
import { X, CheckCircle } from 'lucide-react'

export default function PaymentModal({ isOpen, onClose, amount, onSuccess }) {
  const [processing, setProcessing] = useState(false)
  const [paid, setPaid] = useState(false)

  if (!isOpen) return null

  const handlePay = () => {
    setProcessing(true)
    setTimeout(() => {
      setProcessing(false)
      setPaid(true)
      setTimeout(() => {
        onSuccess?.()
        onClose()
        setPaid(false)
      }, 1500)
    }, 1500)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-navy-900">Secure Payment</h3>
          <button onClick={onClose} className="p-1 hover:bg-navy-100 rounded-lg transition"><X size={20} /></button>
        </div>

        {paid ? (
          <div className="text-center py-8">
            <CheckCircle className="text-emerald-500 mx-auto mb-3" size={48} />
            <p className="text-lg font-semibold text-navy-900">Payment Successful!</p>
            <p className="text-navy-600">₹{amount} paid securely.</p>
          </div>
        ) : (
          <>
            <div className="bg-navy-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-navy-600 mb-1">Total Amount</p>
              <p className="text-3xl font-bold text-navy-900">₹{amount}</p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1">Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" className="w-full rounded-lg border border-navy-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cooperative-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1">Expiry</label>
                  <input type="text" placeholder="MM/YY" className="w-full rounded-lg border border-navy-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cooperative-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1">CVV</label>
                  <input type="text" placeholder="123" className="w-full rounded-lg border border-navy-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cooperative-500" />
                </div>
              </div>
            </div>

            <button
              onClick={handlePay}
              disabled={processing}
              className="w-full bg-cooperative-600 text-white py-3 rounded-xl font-semibold hover:bg-cooperative-700 transition disabled:opacity-50"
            >
              {processing ? 'Processing...' : `Pay ₹${amount}`}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
