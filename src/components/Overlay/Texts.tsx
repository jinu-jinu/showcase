import { useProject } from "../../store/projectStore";
import { motion } from "framer-motion";
import { useIsTransitionOut } from "../../store/transitionStore";

const Texts = () => {
  const project = useProject();
  const isTransitionOut = useIsTransitionOut();

  return (
    <>
      <h2 className="fixed top-[2vmax] left-[50%] translate-x-[-50%] text-[4vmax] leading-[4vmax] font-black ">
        SHOWCASE
      </h2>

      <motion.div
        initial={{ opacity: 1 }}
        animate={isTransitionOut ? { opacity: 0 } : { opacity: 1 }}
        className="fixed bottom-[6vmax] left-[5vmax] text-[1.2vmax]"
      >
        <div>{project.year}</div>
        <div>{project.project_code}</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={isTransitionOut ? { opacity: 0 } : { opacity: 1 }}
        className="fixed bottom-[2.5vmax] left-[50%] translate-x-[-50%] px-[3vmin] py-[2vmin] text-[1.2vmax]  bg-[rgba(0,0,0,.6)] flex justify-center items-center font-bold"
      >
        {project.name}
      </motion.div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={isTransitionOut ? { opacity: 0 } : { opacity: 1 }}
        className="fixed bottom-[6vmax] right-[5vmax] text-[1.2vmax] max-w-[20vw] text-right"
      >
        {project.technologies}
      </motion.div>

      <h4 className="fixed bottom-[1vmax] right-[1vmax] font-bold text-[1.5vmax] leading-[1.5vmax]">
        JINU KIM
      </h4>
    </>
  );
};

export default Texts;
