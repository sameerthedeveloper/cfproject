import React from 'react';

const QuotationPDF = () => {
  return (
    <div id="pdf-target" style={{ padding: '20px' }}>
      <div className="max-w-[210mm] mx-auto p-8 bg-white text-black text-sm font-sans shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4 text-center">QUOTATION</h1>

        {/* Company & Customer Details */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <h2 className="font-semibold">From:</h2>
            <p>CINEMA FOCUS (INDIA) PRIVATE LIMITED</p>
            <p>No.71, Dr. Radhakrishnan Salai,</p>
            <p>Mylapore,</p>
            <p>Chennai - 600 004</p>
            <p>GSTIN/UIN : 33AAECC3036B1ZF</p>
            <p>State Name : Tamil Nadu, Code : 33</p>
          </div>
          <div>
            <h2 className="font-semibold">To:</h2>
            <input type="text" placeholder="Customer Name" className="border p-1 w-full mb-1" id="cd" />
            <input type="email" placeholder="Customer Email" className="border p-1 w-full mb-1" id="cd" />
            <input type="tel" placeholder="Customer Phone" className="border p-1 w-full mb-1" id="cd" />
            <input type="date" placeholder="Quotation Date" className="border p-1 w-full mb-1 date" id="cd" />
          </div>
        </div>

        {/* Screen Details Table */}
        <table className="w-full table-auto border border-collapse mb-6 text-left">
          <tbody>
            <tr className="border">
              <th className="p-2 bg-gray-100">Signature Screen</th>
              <td className="p-2" id="quote-series">-</td>
            </tr>
            <tr className="border">
              <th className="p-2 bg-gray-100">Screen W x H</th>
              <td className="p-2"><span id="quote-hv-panels">-</span></td>
            </tr>
            <tr className="border">
              <th className="p-2 bg-gray-100">Panel Count</th>
              <td className="p-2"><span id="quote-panel-count">-</span></td>
            </tr>
            <tr className="border">
              <th className="p-2 bg-gray-100">Diagonal</th>
              <td className="p-2"><span id="quote-diag">-</span> inches</td>
            </tr>
            <tr className="border">
              <th className="p-2 bg-gray-100">Area (sq.ft)</th>
              <td className="p-2"><span id="quote-area-ft">-</span> ft²</td>
            </tr>
            <tr className="border">
              <th className="p-2 bg-gray-100">W/H (mm) (With Wood Work)</th>
              <td className="p-2"><span id="quote-mm-ww">-</span> mm</td>
            </tr>
            <tr className="border">
              <th className="p-2 bg-gray-100">W/H (in) (With Wood Work)</th>
              <td className="p-2"><span id="quote-h-ww">-</span> in</td>
            </tr>
            <tr className="border">
              <th className="p-2 bg-gray-100">W/H (mm) (Without Wood Work)</th>
              <td className="p-2"><span id="quote-hw-mm">-</span> mm</td>
            </tr>
            <tr className="border">
              <th className="p-2 bg-gray-100">W/H (in) (Without Wood Work)</th>
              <td className="p-2"><span id="quote-hw-in">-</span> in</td>
            </tr>
            <tr className="border">
              <th className="p-2 bg-gray-100">Resolution</th>
              <td className="p-2" id="quote-res">-</td>
            </tr>
            <tr className="border">
              <th className="p-2 bg-gray-100">Total Pixels</th>
              <td className="p-2" id="quote-total-pixels">-</td>
            </tr>
          </tbody>
        </table>

        {/* Pricing Table */}
        <table className="w-full table-auto border border-collapse text-left mb-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Item</th>
              <th className="p-2 border">Details</th>
              <th className="p-2 border">Amount (excl GST)</th>
              <th className="p-2 border">Amount (incl GST)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="p-2 border">Signature Screen</td>
              <td className="p-2 border"></td>
              <td className="p-2 border" id="quote-total-price">-</td>
              <td className="p-2 border" id="quote-total-gst">-</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">Processor</td>
              <td className="p-2 border" id="quote-processor">-</td>
              <td className="p-2 border" id="quote-processor-price">-</td>
              <td className="p-2 border" id="quote-processor-gst">-</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">Installation</td>
              <td className="p-2 border"></td>
              <td className="p-2 border" id="quote-install-price">-</td>
              <td className="p-2 border" id="quote-install-gst">-</td>
            </tr>
            <tr className="border font-bold">
              <td className="p-2 border">Grand Total</td>
              <td className="p-2 border"></td>
              <td className="p-2 border" id="quote-grand-total">-</td>
              <td className="p-2 border"></td>
            </tr>
            <tr className="border font-bold">
              <td className="p-2 border" colSpan={3}>Grand Total incl GST</td>
              <td className="p-2 border gt" rowSpan={2} id="quote-grand-total-gst">-</td>
            </tr>
          </tbody>
        </table>

        {/* Footer Section */}
        <div className="pdf-footer-section">
          <h1 className="text-lg mt-10 font-bold text-gray-800 hidden pdf-title">Terms & Conditions</h1>
          <p className="text-sm mt-4 text-gray-600">
            <strong>Delivery Details:</strong><br />
            • Delivery within 30 to 45 days from the date of order confirmation.
          </p>
          <p className="text-sm mt-4 text-gray-600">
            <strong>Payment Terms:</strong><br />
            • 60% Advance Payment – upon order confirmation.<br />
            • 20% on Material Handover – after delivery of all materials.<br />
            • 20% on Completion – after full installation and final handover.
          </p>
          <p className="text-sm mt-4 text-gray-600">
            <strong>Warranty Details:</strong><br />
            • 1 Year Signature Warranty.<br />
            • Additional 2 Years of Free Service Warranty (Total: 3 Years).<br />
            • <em>Optional:</em> 4 Years Full Warranty available at 5% of the total cost (<span id="4yw"></span>).
          </p>
          <p className="text-sm mt-4 text-gray-600">
            <strong>Note:</strong><br />
            • Woodwork (18mm Plywood), and Power supply should be provided by the customer.
          </p>
        </div>
      </div>

      <div className="flex flex-col m-4 bg-white p-3 gap-2 rounded-2xl shadow-2xl mb-20 dark:bg-gray-700 dark:text-white">
        <button
          onClick={() => window.generatePDF?.()}
          className="no-print bg-blue-200 p-3 rounded-xl shadow border border-black flex justify-center items-center dark:bg-gray-700 dark:text-white"
        >
          Print Quotation
        </button>
      </div>
    </div>
  );
};

export default QuotationPDF;
