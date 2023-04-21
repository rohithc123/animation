import React from "react";
import "../styles/FirstPage.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function FirstPage() {
  const particlesInit = async (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="App">
      {/* <Particles 
        id="tsparticles" 
        init={particlesInit} 
        loaded={particlesLoaded} 
        options={{ 
          background: { 
            color: "rgb(10,10,25)", 
          }, 
          fpsLimit: 60, 
          particles: { 
            shape: { 
              type: "circle", 
            }, 
            size: { 
              random: { 
                enable: true, 
                minimumValue: 0.5, 
              }, 
              value: 1.4, 
            }, 
            color: { 
              value: "#f1f1f1", 
            }, 
            number: { 
              density: { 
                enable: true, 
                area: 1080, 
              }, 
              limit: 0, 
              value: 800, 
            }, 
            opacity: { 
              animation: { 
                enable: true, 
                minimumValue: 0.5, 
                speed: 1.6, 
                sync: false, 
              }, 
              random: { 
                enable: true, 
                minimumValue: 0.1, 
              }, 
              value: 1, 
            }, 
            interactivity: { 
              detectsOn: "canvas", 
              events: { 
                resize: true, 
              }, 
            }, 
          }, 
        }} 
      />  */}
      {/* <Particles
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
          },
        }}
      /> */}
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#1e1f26",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "square",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <section>
        {/* <h1>FRONTEND TRENDS</h1> */}
        <h3 class="span loader">
          <span class="m">S</span>
          <span class="m">O</span>
          <span class="m">C</span>
          <span class="m">I</span>
          <span class="m">E</span>
          <span class="m">T</span>
          <span class="m">Y</span>
          <span class="m">&nbsp;</span>
          <span class="m">O</span>
          <span class="m">F</span>
          <span class="m">&nbsp;</span>
          <span class="m">C</span>
          <span class="m">O</span>
          <span class="m">D</span>
          <span class="m">E</span>
          <span class="m">R</span>
          <span class="m">S</span>
          <span class="m">&nbsp;</span>

          <span class="m">C</span>
          <span class="m">L</span>
          <span class="m">U</span>
          <span class="m">B</span>
        </h3>
      </section>

      <canvas class="background"></canvas>
    </div>
  );
}

export default FirstPage;
