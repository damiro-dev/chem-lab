import { motion } from 'framer-motion';
import cn from '../lib/tailwindMerge';

export default function AnimatePopUp({ children }) {
  return <div className='absolute -bottom-28 lg:-bottom-20'>{children}</div>;
}
