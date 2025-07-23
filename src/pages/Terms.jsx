import { Footer } from "../components/Footer";

export function Terms() {
  document.title = "Terms of Service - Sincerely, Me";

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-8">
        <div className="flex justify-center items-center mb-8">
          <img src="/images/logo.png" className="w-16 sm:w-20" alt="Logo" />
          <h1 className="ml-3 sm:ml-5 text-2xl sm:text-4xl">
            Terms of Service
          </h1>
        </div>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--primary-color)] mb-4">
              Welcome to Sincerely, Me
            </h2>
            <p className="mb-4">
              By using our service, you agree to these terms. Sincerely, Me is a
              platform that allows you to write letters to your future self and
              schedule them for delivery at a later date.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--primary-color)] mb-4">
              Age Requirements
            </h2>
            <p className="mb-4">
              You must be at least 13 years old to use Sincerely, Me. If you're
              under 18, you should have parental permission to use our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--primary-color)] mb-4">
              How to Use Our Service
            </h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Provide accurate information when creating your account</li>
              <li>Keep your password secure and not share your account</li>
              <li>
                Use the service only for personal, non-commercial purposes
              </li>
              <li>Write letters that are appropriate and legal</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--primary-color)] mb-4">
              What You Can't Do
            </h2>
            <p className="mb-4">Please don't:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Write letters containing illegal, harmful, or threatening
                content
              </li>
              <li>Use the service to harass or harm others</li>
              <li>Try to hack or disrupt our service</li>
              <li>Share inappropriate content</li>
              <li>Use our service for spam or commercial purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--primary-color)] mb-4">
              Your Letters
            </h2>
            <p className="mb-4">
              You own the content of your letters. We store them securely and
              deliver them according to your schedule. We don't read, edit, or
              share your letters with anyone.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--primary-color)] mb-4">
              Service Availability
            </h2>
            <p className="mb-4">
              We work hard to keep our service running smoothly, but we can't
              guarantee 100% uptime. Sometimes technical issues happen, and
              we'll do our best to fix them quickly. We're not responsible if a
              letter is delayed due to technical problems.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--primary-color)] mb-4">
              Account Termination
            </h2>
            <p className="mb-4">
              You can delete your account anytime, which will permanently remove
              all your letters. We may also terminate accounts that violate
              these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--primary-color)] mb-4">
              Changes to These Terms
            </h2>
            <p className="mb-4">
              We may update these terms occasionally. If we make significant
              changes, we'll notify you via email or through the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--primary-color)] mb-4">
              Contact Us
            </h2>
            <p className="mb-4">
              Questions about these terms? Contact us at:
              <span className="text-[var(--primary-color)] font-semibold">
                {" "}
                support@sincerelymeapp.com
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
