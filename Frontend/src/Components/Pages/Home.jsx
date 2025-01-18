import React from 'react'
import Navbar from '../common/Navbar';

const Home = () => {
    // const Navbar = () => {
    //     return (
    //       <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
    //         <h1 className="text-2xl font-bold">NutriScan</h1>
    //         <ul className="flex space-x-6">
    //           <li><a href="#" className="text-gray-600 hover:text-yellow-500">Home</a></li>
    //           <li><a href="#features" className="text-gray-600 hover:text-yellow-500">Features</a></li>
    //           <li><a href="#contact" className="text-gray-600 hover:text-yellow-500">Contact</a></li>
    //         </ul>
    //       </nav>
    //     );
    //   };

      const HeroSection = () => {
        return (
          <section className="bg-yellow-500 text-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Track Calories Instantly with QR</h1>
              <p className="text-lg mb-8">Experience seamless calorie tracking in India with NutriScan. Simply scan QR codes to stay on top of your nutrition.</p>
              <button className="bg-white text-yellow-500 px-6 py-2 rounded font-bold">Track Now</button>
            </div>
          </section>
        );
      };

      const Features = () => {
        const features = [
          { title: "Instant Calorie Scanning", description: "Scan food items with QR codes to instantly view detailed calorie information." },
          { title: "Meal Planning Assistant", description: "Get personalized meal suggestions based on your calorie goals and dietary preferences." },
          { title: "Nutritional Insights Dashboard", description: "Access comprehensive data on your daily nutrient intake through an intuitive dashboard." },
          { title: "Custom Diet Recommendations", description: "Receive tailored diet plans designed to meet your goals and health conditions." },
          { title: "Progress Tracking Tools", description: "Monitor your fitness journey with tools that track calorie intake and weight changes over time." },
          { title: "Barcode Food Library", description: "Explore an extensive database of food items with barcode scanning for easy calorie tracking." },
        ];
      
        return (
          <section id="features" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-10">Instant Calorie Tracking Solution</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white shadow-md p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      };

      const DetailedInfo = () => {
        const details = [
          { title: "Enhanced User Interface", description: "Focused on user-friendly designs that simplify calorie tracking for users." },
          { title: "Efficient Data Management", description: "Accurate and reliable calorie information for better dietary habits." },
          { title: "Expanded Food Database", description: "A wide variety of foods and detailed calorie counts for comprehensive tracking." },
        ];
      
        return (
          <section className="py-20 px-6 bg-yellow-100">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-10">Master Calorie Management Instantly</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {details.map((detail, index) => (
                  <div key={index} className="bg-white shadow-md p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">{detail.title}</h3>
                    <p className="text-gray-600">{detail.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      };

      const ContactForm = () => {
        return (
          <section id="contact" className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-10">Connect with NutriScan Team</h2>
              <form className="bg-white shadow-md p-8 rounded-lg">
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    placeholder="Message"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none h-32"
                  ></textarea>
                </div>
                <button className="bg-yellow-500 text-white px-6 py-2 rounded">Submit</button>
              </form>
            </div>
          </section>
        );
      };

      const Footer = () => {
        return (
          <footer className="bg-yellow-500 text-white text-center py-6">
            <p>&copy; 2025 NutriScan. All rights reserved.</p>
          </footer>
        );
      };

  return (
    <div>
        {/* <Navbar /> */}
        <Navbar/>
      <HeroSection />
      <Features />
      <DetailedInfo />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home
