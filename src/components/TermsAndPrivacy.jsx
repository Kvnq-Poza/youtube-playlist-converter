import React from "react";
import { FaFileContract, FaShieldAlt } from "react-icons/fa";

const TermsAndPrivacy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center flex items-center justify-center">
        <FaFileContract className="mr-3 text-red-500" />
        Terms of Service and Privacy Policy
      </h1>

      <div className="bg-white shadow-md rounded-lg p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-red-500">
            Terms of Service
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Welcome to YouTube Playlist Converter. By using our service, you
              agree to the following terms:
            </p>

            <h3 className="text-xl font-semibold mt-4">Service Limitations</h3>
            <ul className="list-disc pl-5">
              <li>Playlist downloads are limited to 25 items</li>
              <li>Each video must be under 1 hour in length</li>
              <li>Only public YouTube playlist URLs are supported</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">
              Usage Responsibilities
            </h3>
            <p>You are responsible for:</p>
            <ul className="list-disc pl-5">
              <li>Using the service for personal, non-commercial purposes</li>
              <li>Ensuring you have the right to download content</li>
              <li>Respecting copyright laws and artist rights</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Content Storage</h3>
            <p>
              Converted playlists are temporarily stored for 15 minutes. After
              this time, you'll need to reconvert the playlist to download files
              again.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-red-500">
            Privacy Policy
          </h2>
          <div className="space-y-4 text-gray-700">
            <h3 className="text-xl font-semibold mt-4">
              Information Collection
            </h3>
            <p>
              We do not collect or store personal user data beyond the playlist
              conversion process. Temporary playlist data is automatically
              deleted after 15 minutes.
            </p>

            <h3 className="text-xl font-semibold mt-4">Data Usage</h3>
            <p>
              The playlist URL you provide is used solely for the conversion
              process. We do not track, sell, or share your information with
              third parties.
            </p>

            <h3 className="text-xl font-semibold mt-4">Third-Party Services</h3>
            <p>
              Our service interacts with YouTube's public APIs. We recommend
              reviewing YouTube's Terms of Service for additional information.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsAndPrivacy;
