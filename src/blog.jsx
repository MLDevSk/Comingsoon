import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Blog = () => (
  <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center px-4 py-20">
    <Navbar />
    <div className="flex-1 flex flex-col items-center justify-center w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full text-center bg-black/60 rounded-2xl shadow-xl p-12 border border-white/10 relative"
      >
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">Blog & Updates</h1>
        <div className="spark-line mb-8"></div>
        <p className="text-xl text-gray-300 mb-8 font-medium">
          Our blog is launching soon.<br />
          Stay tuned for insights, updates, and stories from the future of AI-driven creativity.
        </p>
        <div className="flex justify-center mt-8">
          <span className="flow-node"></span>
          <span className="flow-node"></span>
          <span className="flow-node"></span>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Blog;