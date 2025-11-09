"use client";
import { useEffect, useState, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";
// import { loadAll } from "@/tsparticles/all";
import { loadSlim } from "@tsparticles/slim";
// import { loadBasic } from "@tsparticles/basic";
const ParticleBackground = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    // Using loadSlim instead of loadFull for better performance
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}>
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#0b1729",
              },
            },
            fpsLimit: 60, // Reduced from 120 for better performance
            interactivity: {
              events: {
                onClick: {
                  enable: false, // Disabled for performance
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: {
                  enable: true,
                  delay: 0.5,
                },
              },
              modes: {
                push: {
                  quantity: 0,
                },
                repulse: {
                  distance: 100, // Reduced from 150
                  duration: 0.3, // Reduced from 0.4
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff", // Single color instead of array for better performance
              },
              links: {
                color: "#ffffff",
                distance: 120, // Reduced from 150
                enable: true,
                opacity: 0.3, // Reduced from 0.5
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: false,
                speed: 1.5, // Reduced from 3
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000, // Increased area = fewer particles
                },
                value: 25, // Reduced from 40
              },
              opacity: {
                value: 0.4, // Reduced from 0.5
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 }, // Reduced max from 5
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    )
  );
};

// Memoize to prevent unnecessary re-renders
export default memo(ParticleBackground);
