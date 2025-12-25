export default function PaymentTab({ data, setData, editing }) {
  return (
    <>
      <div className="payment-wrapper">
        <div className="payment-field">
          <label>
            <span>Tax Rate (%)</span>
            <input
              type="number"
              disabled={!editing}
              value={data.taxRate}
              onChange={(e) => setData({ ...data, taxRate: e.target.value })}
            />
          </label>
        </div>

        <div className="payment-field">
          <label>
            <span>Service Charge (%)</span>
            <input
              type="number"
              disabled={!editing}
              value={data.serviceCharge}
              onChange={(e) => setData({ ...data, serviceCharge: e.target.value })}
            />
          </label>
        </div>

        {!editing && (
          <p className="hint-text">Click <strong>Edit</strong> to update payment settings</p>
        )}
      </div>

      {/* Custom CSS */}
      <style>{`
        .payment-wrapper {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .payment-field label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-weight: 600;
          color: #374151;
        }

        .payment-field span {
          font-size: 15px;
        }

        .payment-field input {
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid #d1d5db;
          font-size: 15px;
          transition: all 0.3s ease;
          background: #f9fafb;
        }

        .payment-field input:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.25);
          background: white;
        }

        .payment-field input:disabled {
          background: #e5e7eb;
          cursor: not-allowed;
          color: #6b7280;
        }

        .hint-text {
          margin-top: 8px;
          font-size: 14px;
          color: #6b7280;
          font-style: italic;
        }

        /* Dark Mode Support */
        .dark .payment-field label {
          color: #e5e7eb;
        }

        .dark .payment-field input {
          background: #374151;
          border-color: #4b5563;
          color: #f9fafb;
        }

        .dark .payment-field input:disabled {
          background: #1f2937;
          color: #9ca3af;
        }

        .dark .hint-text {
          color: #9ca3af;
        }
      `}</style>
    </>
  );
}
