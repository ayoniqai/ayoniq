"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Generate fixed random values so it doesn't jump on re-renders
const generateNodes = () => {
  return Array.from({ length: 35 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));
};

export default function AINetwork() {
  const [mounted, setMounted] = useState(false);
  const [nodes, setNodes] = useState<{id: number, x: number, y: number, size: number, duration: number, delay: number}[]>([]);
  const [connections, setConnections] = useState<{id: string, from: any, to: any, duration: number, delay: number}[]>([]);

  useEffect(() => {
    const newNodes = generateNodes();
    const newConnections = [];
    
    // Connect nodes that are close to each other
    for (let i = 0; i < newNodes.length; i++) {
      for (let j = i + 1; j < newNodes.length; j++) {
        const dx = newNodes[i].x - newNodes[j].x;
        const dy = newNodes[i].y - newNodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 20) { // connection radius
          newConnections.push({
            id: `${i}-${j}`,
            from: newNodes[i],
            to: newNodes[j],
            duration: Math.random() * 5 + 3,
            delay: Math.random() * 3,
          });
        }
      }
    }
    
    setNodes(newNodes);
    setConnections(newConnections);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-30 mix-blend-screen pointer-events-none">
      <svg className="w-full h-full">
        {connections.map((conn) => (
          <motion.line
            key={conn.id}
            x1={`${conn.from.x}%`}
            y1={`${conn.from.y}%`}
            x2={`${conn.to.x}%`}
            y2={`${conn.to.y}%`}
            stroke="url(#ai-gradient)"
            strokeWidth="1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{
              duration: conn.duration,
              delay: conn.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.size}
            fill="#22d3ee"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.1, 0.9, 0.1], scale: [1, 1.3, 1] }}
            transition={{
              duration: node.duration,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]"
          />
        ))}

        {/* Data Pulses moving along some connections */}
        {connections.slice(0, 15).map((conn, idx) => (
          <motion.circle
            key={`pulse-${idx}`}
            r="1.5"
            fill="#e879f9"
            initial={{ cx: `${conn.from.x}%`, cy: `${conn.from.y}%`, opacity: 0 }}
            animate={{ 
              cx: [`${conn.from.x}%`, `${conn.to.x}%`], 
              cy: [`${conn.from.y}%`, `${conn.to.y}%`],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: conn.duration * 0.5,
              delay: conn.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="drop-shadow-[0_0_8px_rgba(232,121,249,1)]"
          />
        ))}

        <defs>
          <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#e879f9" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
