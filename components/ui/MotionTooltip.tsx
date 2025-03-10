"use client";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

interface Tool {
  icon: React.ReactNode;
  name: string;
  inProgress?: boolean;
}

export default function MotionTooltip({ tools }: { tools: Tool[] }) {
  return (
    <div className="flex flex-wrap gap-2 lg:gap-4">
      {tools.map((tool, index) => (
        <motion.div
          key={index}
          className="relative bg-gray-800 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-full flex items-center gap-1 lg:gap-2 cursor-pointer text-xs lg:text-base"
          whileHover={tool.inProgress ? {} : { scale: 1.1 }}
          data-tooltip-id={`tooltip-${index}`}
          data-tooltip-content={tool.inProgress ? "Currently Learning" : ""}
        >
          <span className="text-base lg:text-lg">{tool.icon}</span>
          <span>{tool.name}</span>

          {tool.inProgress && (
            <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center"></div>
          )}

          <Tooltip id={`tooltip-${index}`} className="custom-tooltip" opacity={1} />
        </motion.div>
      ))}
    </div>
  );
}
