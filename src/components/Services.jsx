import React from "react";
import directtax from '../assets/photo/direct-tax.webp';
import indirecttax from '../assets/photo/indirect-tax.webp';
import accountingbookkeeping from '../assets/photo/accounting-bookkeeping.webp';
import auditingassurance from '../assets/photo/auditassurance.jpg';
import corporate from '../assets/photo/corporate.webp';
import fundraising from '../assets/photo/fundraising.jpg';
import managementconsult from '../assets/photo/managementconsult.jpeg';
import fema from '../assets/photo/fema.jpeg';

const Services = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 md:w-1/3 cursor-pointer">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-36 md:h-24 w-full object-cover object-center"
                  src={directtax}
                  alt="Direct Taxes"
                />
                <div className="p-4">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    SERVICE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Direct Taxes
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Comprehensive direct tax services: filing, compliance, planning, cross-border transactions, and international advisory.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-green-700 hover:scale-110 transition duration-300 ease-in-out">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-1/3 cursor-pointer">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-36 md:h-24 w-full object-cover object-center"
                  src={indirecttax}
                  alt="Indirect Taxes"
                />
                <div className="p-4">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    SERVICE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Indirect Taxes
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Comprehensive indirect tax services: GST registration, e-filing, refunds, transaction planning, representation, audits, advisory.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-green-700 hover:scale-110 transition duration-300 ease-in-out">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-1/3 cursor-pointer">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-36 md:h-24 w-full object-cover object-center"
                  src={accountingbookkeeping}
                  alt="Accounting & Bookkeeping"
                />
                <div className="p-4">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    SERVICE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Accounting & Bookkeeping
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Comprehensive accounting services: bookkeeping, financials, accounting processes, MIS, fixed assets, payroll, IND-AS, Virtual CFO.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-green-700 hover:scale-110 transition duration-300 ease-in-out">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 md:w-1/3 cursor-pointer">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-36 md:h-24 w-full object-cover object-center"
                  src={auditingassurance}
                  alt="Auditing & Assurance"
                />
                <div className="p-4">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    SERVICE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Auditing & Assurance
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Comprehensive auditing services: statutory, internal, bank, stock, TDS audits, due diligence, systems review.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-green-700 hover:scale-110 transition duration-300 ease-in-out">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-1/3 cursor-pointer">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-36 md:h-24 w-full object-cover object-center"
                  src={corporate}
                  alt="Corporate Laws"
                />
                <div className="p-4">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    SERVICE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Corporate Laws
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Comprehensive corporate law services: entity formation, MCA filings, compliance, legal drafting, and liaison.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-green-700 hover:scale-110 transition duration-300 ease-in-out">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-1/3 cursor-pointer">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-36 md:h-24 w-full object-cover object-center"
                  src={fundraising}
                  alt="Fundraising"
                />
                <div className="p-4">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    SERVICE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Fundraising
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Comprehensive fundraising services: bank finance, project reports, forecasts, equity advisory.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-green-700 hover:scale-110 transition duration-300 ease-in-out">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 md:w-1/3 cursor-pointer">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-36 md:h-24 w-full object-cover object-center"
                  src={managementconsult}
                  alt="Management Consulting"
                />
                <div className="p-4">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    SERVICE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Management Consulting
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Comprehensive management consulting services: planning, business set-up, restructuring, valuation, due diligence, market entry, feasibility.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-green-700 hover:scale-110 transition duration-300 ease-in-out">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-1/3 cursor-pointer">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-36 md:h-24 w-full object-cover object-center"
                  src={fema}
                  alt="FEMA / International Transactions"
                />
                <div className="p-4">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    SERVICE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    FEMA / International Transactions
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Comprehensive FEMA services: outbound/inbound investments, borrowings, advisory, compliance.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-green-700 hover:scale-110 transition duration-300 ease-in-out">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
