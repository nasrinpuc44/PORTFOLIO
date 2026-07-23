import React from "react";

const Contact = () => {
  return (
    <section className="mt-24">
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <h2 className="text-2xl font-bold tracking-widest text-gray-200 sm:text-3xl">
          CONTACT
        </h2>
      </div>

      {/* Contact Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left Column - Contact Info */}
        <div className="space-y-6">
          {/* Phone */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-yellow-400/30 hover:bg-white/[0.06]">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Phone
            </h3>
            <p className="mt-2 text-lg font-medium text-gray-200">
              +8801883274408
            </p>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-yellow-400/30 hover:bg-white/[0.06]">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Email
            </h3>
            <p className="mt-2 text-lg font-medium text-gray-200">
              snasrin291@gmail.com
            </p>
          </div>

          {/* Address */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-yellow-400/30 hover:bg-white/[0.06]">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Address
            </h3>
            <p className="mt-2 text-lg font-medium text-gray-200">
              Chattogram, Bangladesh
            </p>
          </div>

          {/* Social Links */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-yellow-400/30 hover:bg-white/[0.06]">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Connect With Me
            </h3>
            <div className="mt-4 flex gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nasrin-sultana-415047338?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-300 transition hover:bg-yellow-400 hover:text-black"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/nasrinpuc44"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-300 transition hover:bg-yellow-400 hover:text-black"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.48 2 2 6.58 2 12.2c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.5v-1.75c-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.11-1.51-1.11-1.51-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.74 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9v2.82c0 .28.18.6.69.5A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/nasrin.sultana.airin.2025"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-300 transition hover:bg-yellow-400 hover:text-black"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Location Map */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-yellow-400/30 hover:bg-white/[0.06]">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Location
          </h3>
          <p className="mt-2 text-lg font-medium text-gray-200">
            Chattogram, Bangladesh
          </p>
          
          {/* Map Embed */}
          <div className="mt-4 overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29498.31891061059!2d91.7935467!3d22.356851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095fe4b%3A0x83e2b850b7b6f45f!2sChattogram%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;