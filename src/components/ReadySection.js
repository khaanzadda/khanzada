import React from "react";
import { motion } from "framer-motion";
import "./ReadySection.css";

const marqueeLeft = {
    animate: {
        x: ["-5%", "20%"],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 12,
                ease: "linear",
            },
        },
    },
}

const marqueeRight = {
    animate: {
        x: ["-25%", "-15%"],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 12,
                ease: "linear",
            },
        },
    },
};
const marqueeLeft2 = {
    animate: {
        x: ["-29%", "-15%"],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 12,
                ease: "linear",
            },
        },
    },
};

export default function ReadySection() {
    return (
        <section className="ready">
            <div className="ready-text">
                <motion.div
                    className="ready-row"
                    variants={marqueeLeft}
                    animate="animate"
                >
                    READY TO
                </motion.div>
                <motion.div
                    className="ready-row"
                    variants={marqueeRight}
                    animate="animate"
                >
                    DISCUSS YOUR
                </motion.div>
                <motion.div
                    className="ready-row"
                    variants={marqueeLeft2}
                    animate="animate"
                >
                    NEXT PROJECT
                </motion.div>
            </div>
            <motion.a
                href="https://www.upwork.com/freelancers/~01cc9384a787cfb4fe?companyReference=1567804226158288897&mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="ready-cta"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.2, ease: "easeOut" }}
            >
                Work with me <span>↗</span>
            </motion.a>
        </section>
    );
}
