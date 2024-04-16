import { motion } from "framer-motion"
import { useAstroTheme } from '@/utils/hooks/useAstroTheme';

// TODO: Investigar como mejorar la carga con framer-motion

const Image = ({ src }) => {
  
    const animations = {
      initial: { y: 10, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.2, delay: 0.3 }
    }
  
    return (
      <motion.img
      className=" w-auto h-full object-cover"
      {...animations}
      src={src}
      />
    )
  
}

export const ImageHome = () => {

  const { theme } = useAstroTheme();

  const isDark = theme === 'dark';
  
  return (
    <>

      {
        isDark && (<Image src="/images/hero-image-dark.png" />)
      }
      {
        !isDark && (<Image src="/images/hero-image-white.png" />)
      }

    </>

  )
}