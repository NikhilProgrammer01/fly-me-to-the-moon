import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

function Car() {
  const carGltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/car/scene.gltf"
  );

  const houseGltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/house/scene.gltf"
  );

  const spidermanGltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/carr/scene.gltf"
  );

  useEffect(() => {
    carGltf.scene.scale.set(0.07, 0.07, 0.08);
    carGltf.scene.position.set(-2, -0.035, 0);

    houseGltf.scene.scale.set(0.3, 0.4, 0.6);
    houseGltf.scene.position.set(2, -0.035, 0);

    spidermanGltf.scene.scale.set(0.02, 0.02, 0.10 ); // Adjust scale for Spider-Man
    spidermanGltf.scene.position.set(-1, -0.035, 0); // Position Spider-Man beside the car

    // Setting up shadows and envMapIntensity for car and house (similar to your code)

  }, [carGltf, houseGltf, spidermanGltf]);

  return (
    <>
      <primitive object={carGltf.scene} />
      <primitive object={houseGltf.scene} />
      <primitive object={spidermanGltf.scene} /> {/* Add Spider-Man to the scene */}
    </>
  );
}

export default Car;
