import { useState, useEffect } from "react";
import { Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import "./index.css";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Import the Footer component

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Typing animation
  const [text, setText] = useState("");
  const fullText = "Something Extraordinary is Coming...";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }

    const resetTimeout = setTimeout(() => {
      setIndex(0);
      setText("");
    }, 5000);

    return () => clearTimeout(resetTimeout);
  }, [index, fullText]);

  // Handle newsletter subscription
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      try {
        // Add email to Firestore
        await addDoc(collection(db, "subscribers"), {
          email: email,
          timestamp: new Date(),
        });

        setIsSubscribed(true);
        setTimeout(() => {
          setIsSubscribed(false);
          setEmail("");
        }, 3000);
      } catch (error) {
        console.error("Error adding email to Firestore: ", error);
      }
    }
  };

  const fetchSubscribers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "subscribers"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => `, doc.data());
      });
    } catch (error) {
      console.error("Error fetching subscribers: ", error);
    }
  };

  // Call this function somewhere in your app to test
  useEffect(() => {
    fetchSubscribers();
  }, []);

  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;

        if (isVisible) {
          el.classList.add("animate-in");
          el.classList.remove("opacity-0", "translate-y-8");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black relative">
      <Navbar />
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Mysterious moving lights */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-pink-600/20 rounded-full blur-2xl animate-ping opacity-70"></div>

      {/* Hero Section - Mysterious Version */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center max-w-3xl px-4"
        >
          <div className="mb-3 flex justify-center">
            <span className="px-4 py-1 bg-purple-900/30 backdrop-blur-sm rounded-full text-purple-300 text-sm font-medium border border-purple-500/30">
              The Future of Creative Collaboration
            </span>
          </div>

          <div className="relative">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 min-h-[80px] bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-100 py-10">
              {text}
              <span className="animate-blink text-white">|</span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            ArtfulWay is about to revolutionize how artists and businesses
            collaborate. Be among the first to experience our amazing tool for
            artists and creative freelancers.
          </motion.p>

          {/* Join the Waitlist Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                document
                  .getElementById("email-signup")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              Join the Waitlist
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Mysterious Teaser Section - No specific features */}
      <div id="teaser" className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="px-4 py-1 bg-purple-900/30 backdrop-blur-sm rounded-full text-purple-300 text-sm font-medium border border-purple-500/30 inline-block mb-3"
            >
              TOP SECRET
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              A New Era for Creative Professionals
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              We're building something revolutionary that will transform how
              artists and businesses work together. Stay tuned for the big
              reveal.
            </motion.p>
          </div>

          {/* Mysterious icon/graphic instead of feature list */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-64 h-64 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-24 h-24 text-purple-300" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section - Modified to be more mysterious */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="px-4 py-1 bg-purple-900/30 backdrop-blur-sm rounded-full text-purple-300 text-sm font-medium border border-purple-500/30">
              Questions? We've Got Answers
            </span>
            <h2 className="text-3xl font-bold text-white mt-6 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "When will ArtfulWay launch?",
                answer:
                  "We're working hard to launch soon. Sign up for our newsletter to be the first to know when we go live!",
              },
              {
                question: "Will there be an early access program?",
                answer:
                  "Yes! We're planning to invite a limited number of artists and businesses to our beta program. Enter your email above to be considered.",
              },
              {
                question: "What exactly is ArtfulWay?",
                answer:
                  "We're keeping specific details under wraps for now, but we can tell you it's an innovative platform designed to empower artists and creative professionals in new and exciting ways.",
              },
              {
                question: "Will it be free to join?",
                answer:
                  "Yes, creating an account on ArtfulWay will be free. We'll have premium features available for power users, but our core services will be accessible to everyone.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div id="email-signup" className="relative z-10 py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl rounded-full"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-10 shadow-xl"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Be Part of the Creative Revolution
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-300 mb-8 text-lg"
            >
              Join our waitlist today and be the first to experience our
              groundbreaking platform for artists and creative professionals.
            </motion.p>

            {/* Email Signup Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for early access"
                className="flex-grow px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubscribed}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubscribed ? (
                  "Thank You!"
                ) : (
                  <>
                    Notify Me <Mail size={16} />
                  </>
                )}
              </motion.button>
            </motion.form>

            {isSubscribed && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 mt-3"
              >
                You're on the list! We'll notify you when we launch.
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Include the Footer component */}
      <Footer />

      {/* CSS for animations */}
      <style jsx>{`
        .animate-in {
          animation: fadeInUp 0.8s ease forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;