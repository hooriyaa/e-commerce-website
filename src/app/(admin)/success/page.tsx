"use client";

const SuccessPage = () => {
  return (
    <section className="flex items-center justify-center pb-32 pt-24 bg-gray-50 mx-w-7xl mx-auto w-[890px] sm:w-full px-9">
      <div className="max-w-3xl text-center bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-[#029FAE] mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you for your payment. Your transaction was completed
          successfully, and you can now enjoy our services.
        </p>
        <button
          className="px-6 py-3 bg-[#029FAE] text-white font-medium rounded-lg hover:bg-[#02a0aebd] transition"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default SuccessPage;
