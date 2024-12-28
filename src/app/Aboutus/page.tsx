const AboutUs = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* About Us Content */}
      <div className="p-5 sm:p-10 lg:p-20 space-y-12">
        <h1 className="text-center text-4xl font-bold text-yellow-400 mb-10">About Us</h1>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-lg text-gray-400">
            Welcome to <span className="font-bold text-teal-400">Swasthi!</span> At Swasthi, we believe that wellness should be accessible to everyone, everywhere. As a comprehensive global health application, Swasthi is designed to empower individuals to take charge of their wellness through a variety of interactive tools, resources, and personalized insights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-400 mb-4">Who We Are</h2>
          <p className="text-lg">
            Swasthi is a product of <span className="font-bold">FitnEarn (alias Fit Earn Meditate)</span>, a pioneer in the digital health and wellness space dedicated to making fitness and healthy living a rewarding experience for all. FitnEarn strives to create innovative solutions that inspire and empower individuals to lead healthier lives through practical and engaging digital tools.
          </p>
          <p className="mt-4 text-lg">
            For details, please visit{" "}
            <a
              href="https://www.fitnearn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              www.fitnearn.com
            </a>.
          </p>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-teal-400 mb-4">Our Vision</h2>
          <p className="text-lg">
            Our vision is to create a healthier world by making essential health information and tools available to all, regardless of age, location, or background. We aim to foster a proactive approach to health management, where users can easily monitor their wellness and make informed decisions to improve their quality of life.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-400 mb-4">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>
              <b>Health Calculators:</b> Access a diverse range of health calculators such as Body Mass Index (BMI), Basal Metabolic Rate (BMR), Calorie Burn, Water Requirement, Mood Management, Body Fat Percentage, Total Daily Energy Expenditure (TDEE), Healthy Blood and Water Volume, and Blood Alcohol Concentration.
            </li>
            <li>
              <b>Personalized Insights:</b> Our premium membership unlocks enhanced features, including interactive graphs and detailed progress tracking, to provide users with deeper insights into their health data over time.
            </li>
            <li>
              <b>Daily Engagement Tools:</b> Stay motivated with daily health goals, quizzes, and motivational health tip cards. Set reminders and create customized health routines to foster regular, healthy habits.
            </li>
            <li>
              <b>User-Friendly Experience:</b> Enjoy a customizable user experience with features like theme changes (dark and light modes) and multiple language options, ensuring comfort and accessibility for all users.
            </li>
          </ul>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-teal-400 mb-4">Our Mission</h2>
          <p className="text-lg">
            Swasthi’s mission is to reduce lifestyle-related health issues on a global scale by making health monitoring tools simple, accessible, and engaging. We strive to educate and inspire individuals to lead healthier, more active lives through innovative digital solutions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-400 mb-4">Why Choose Swasthi?</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>
              <b>Global Reach:</b> With multilingual support and a user-friendly interface, Swasthi is designed to be a truly global health companion, accessible to anyone, anywhere.
            </li>
            <li>
              <b>Comprehensive Tools:</b> From basic health metrics to advanced progress tracking, our app provides a holistic set of tools to help you understand and improve your health.
            </li>
            <li>
              <b>Community Focus:</b> Swasthi fosters a sense of community by encouraging users to share their progress, engage in health challenges, and support one another in achieving their wellness goals.
            </li>
          </ul>
        </section>

        <section className="bg-teal-400 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-black mb-4">Join Us on Our Journey</h2>
          <p className="text-lg text-black">
            At Swasthi, we are committed to transforming health and wellness through technology. Join us in creating a healthier, more informed world by downloading the Swasthi app today and starting your journey towards better health.
          </p>
          <div className="mt-4">
            <a
              href="/download"
              className="bg-black text-yellow-400 px-6 py-3 rounded-md text-xl font-semibold hover:bg-gray-700"
            >
              Download the App
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-400 mb-4">Contact Us</h2>
          <p className="text-lg">
            We value your feedback and are here to help. If you have any questions, concerns, or suggestions, please reach out to us at:
          </p>
          <p className="text-lg">
            <b>Email:</b>{" "}
            <a
              href="mailto:info@swasthi.fit"
              className="text-yellow-400 hover:underline"
            >
              info@swasthi.fit
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
