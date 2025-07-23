import { Footer } from "../components/Footer";

export function Privacy() {
  document.title = "Privacy Policy - Sincerely, Me";

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-8">
        <div className="flex justify-center items-center mb-8">
          <img src="/images/logo.png" className="w-16 sm:w-20" alt="Logo" />
          <h1 className="ml-3 sm:ml-5 text-2xl sm:text-4xl">Privacy Policy</h1>
        </div>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--primary-color)] mb-4">
              What Information We Collect
            </h2>
            <p className="mb-4">When you use Sincerely, Me, we collect:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Your email address when you create an account</li>
              <li>The letters you write to your future self</li>
              <li>Delivery dates you choose for your letters</li>
              <li>Basic usage information to improve our service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--primary-color)] mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Store and deliver your letters at the scheduled times</li>
              <li>Send you notifications about your letters</li>
              <li>Maintain and improve our service</li>
              <li>Communicate with you about your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--primary-color)] mb-4">
              Data Security
            </h2>
            <p className="mb-4">
              Your letters are stored securely using Supabase, a trusted
              database service. We use encryption and security best practices to
              protect your personal thoughts and messages. Your letters are
              private and only visible to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--primary-color)] mb-4">
              We Don't Share Your Data
            </h2>
            <p className="mb-4">
              We never sell, rent, or share your personal information or letters
              with third parties. Your thoughts and messages remain completely
              private.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--primary-color)] mb-4">
              Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Access all your stored letters</li>
              <li>Delete your account and all associated data</li>
              <li>Update your email address</li>
              <li>Request information about your stored data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--primary-color)] mb-4">
              Contact Us
            </h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy, please contact us
              at:
              <span className="text-[var(--primary-color)] font-semibold">
                {" "}
                privacy@sincerelymeapp.com
              </span>
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-500 italic">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
