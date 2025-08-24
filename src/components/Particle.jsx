import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Particle() {
  const [init, setInit] = useState(false);

  // Inicializa el motor de partículas una sola vez
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // carga solo lo necesario
    }).then(() => setInit(true));
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: "transparent" }, // fondo negro
            fpsLimit: 60,
            particles: {
              number: { value: 160, density: { enable: true, area: 1500 } },
              color: { value: "#ffffff" },
              links: { enable: false }, // sin líneas entre partículas
              move: { direction: "right", speed: 0.05, outModes: { default: "out" } },
              size: { value: 1 },
              opacity: { value: 0.5, anim: { enable: true, speed: 1, minimumValue: 0.05 } },
            },
            interactivity: { events: {}, modes: {} },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}

export default Particle;
