import { motion } from "framer-motion"
import { MoreIcon } from "@icons/Icons"

export const ButtonCharacter = ({ id }) => {

    return (
        <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}

        >
            <a
                href={`/lugares/${id}`}
                className="left-1/2 flex gap-2 py-1  border border-default-200 hover:bg-default-200 transition-all -translate-x-1/2 px-4 bg-default-100 rounded-full absolute w-min text-nowrap -bottom-3 text-center"
            >
                <MoreIcon />
                Donde estoy?
            </a>
        </motion.div>

    )
}