import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";

import Head from "next/head";

const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Ryan Chang | Resume | Software Engineer</title>
      </Head>

      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Systems Design Engineering
            </h5>
            <p className="font-semibold">University of Waterloo</p>
            <p className="my-3">
              I am currently a candidate for a Bachelor of Applied Science
              (BASc) in Systems Design Engineering from the University of
              Waterloo. I've taken Digital Computation (C++ and Python), Digital
              Systems (VHDL & Assembly), and Data Structures & Algorithms (C++)
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Recent Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Engineer Intern</h5>
            <p className="font-semibold">Bloomberg L.P.</p>
            <p className="my-3">
              Owned S3 event notifications system for cloud object storage with
              using Go, Kafka, Kubernetes. Streamed 6 million+ daily S3 events
              enabling developers to create data pipelines.
            </p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Frameworks & Technologies</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
