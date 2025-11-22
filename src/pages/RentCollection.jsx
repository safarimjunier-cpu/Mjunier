export default function RentCollection() {
  return (
    <div className="mt-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-primary text-center">Rent Collection</h1>
      <p className="text-center text-gray-700 mt-2">
        Tenants can submit monthly rent details below.
      </p>

      <form className="bg-white shadow-md p-6 rounded-lg mt-8 space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Tenant Name</label>
          <input
            type="text"
            placeholder="Enter tenant name"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">House Number / Unit</label>
          <input
            type="text"
            placeholder="e.g., House 3A"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Month</label>
          <select className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Amount Paid (KSh)</label>
          <input
            type="number"
            placeholder="e.g., 15000"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Payment Method</label>
          <select className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            <option>M-Pesa</option>
            <option>Bank Deposit</option>
            <option>Cash</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Transaction Code</label>
          <input
            type="text"
            placeholder="M-Pesa or Bank reference"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition">
          Submit Rent Payment
        </button>
      </form>
    </div>
  );
}
