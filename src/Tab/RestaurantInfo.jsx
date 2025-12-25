export default function RestaurantInfo({ data, setData, editing }) {
  return (
    <>
      <div className="restaurant-wrapper">
        <div className="field">
          <label>
            <span>Restaurant Name</span>
            <input
              type="text"
              disabled={!editing}
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </label>
        </div>

        <div className="field">
          <label>
            <span>Address</span>
            <input
              type="text"
              disabled={!editing}
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
          </label>
        </div>

        <div className="field">
          <label>
            <span>Contact</span>
            <input
              type="text"
              disabled={!editing}
              value={data.contact}
              onChange={(e) => setData({ ...data, contact: e.target.value })}
            />
          </label>
        </div>

        {!editing && (
          <p className="hint">Click <strong>Edit</strong> to update restaurant info</p>
        )}
      </div>

      {/* Custom CSS */}
      <style>{`
        .restaurant-wrapper {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .field label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-weight: 600;
          color: #374151;
        }

        .field span {
          font-size: 15px;
        }

        .field input {
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid #d1d5db;
          font-size: 15px;
          transition: all 0.3s ease;
          background: #f9fafb;
        }

        .field input:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.25);
          background: #ffffff;
        }

        .field input:disabled {
          background: #e5e7eb;
          color: #6b7280;
          cursor: not-allowed;
        }

        .hint {
          margin-top: 4px;
          font-size: 14px;
          color: #6b7280;
          font-style: italic;
        }

        /* Dark Mode */
        .dark .field label {
          color: #e5e7eb;
        }

        .dark .field input {
          background: #374151;
          border-color: #4b5563;
          color: #f9fafb;
        }

        .dark .field input:disabled {
          background: #1f2937;
          color: #9ca3af;
        }

        .dark .hint {
          color: #9ca3af;
        }
      `}</style>
    </>
  );
}
