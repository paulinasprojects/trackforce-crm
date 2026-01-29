import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
  },
  exit: {
    x: "100%",
    transition: { duration: 1.5 }
  },
};

const MobileNav = ({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void; }) => {
  return (
    <div className="flex justify-between items-center px-4 mt-8 mx-2">
      <a href="/">
        <img src="/trackforce-logo.svg" alt="" />
      </a>
      <button className="cursor-pointer" onClick={onToggle}>
        {isOpen ?
          <IoMdClose className="size-5 fixed top-8 right-7 z-[99] text-white cursor-pointer" />
          : <MdMenu className="size-6 cursor-pointer text-white" />
        }
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="fixed inset-0 z-50 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="bg-[#0e1219] w-full h-screen"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              <div className="flex flex-col gap-12 items-center justify-center pt-[70px] text-white">
                <Link className="hover-underline-animation" onClick={onToggle} to="/product">Product</Link>
                <Link className="hover-underline-animation" onClick={onToggle} to="/changelog">Changelog</Link>
                <Link className="hover-underline-animation" onClick={onToggle} to="/pricing">Pricing</Link>
                <Link className="hover-underline-animation" onClick={onToggle} to="/contact">Contact Sales</Link>
              </div>
              <div className="mt-96 flex flex-col items-center gap-6">
                <button className="font-medium text-sm leading-xl text-white">Sign in</button>
                <button className="button-gradient text-white px-6 py-2.5 rounded-md font-medium text-sm leading-xl">Start for Free</button>
                <div className="mt-5">
                  <img src="/trackforce-logo.svg" alt="" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileNav