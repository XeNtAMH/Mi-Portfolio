import { useState } from "react";

// Muestra el logo de una tecnología. Si no carga, muestra su inicial.
export default function TechLogo({ tech, size = 32 }) {
  const [ok, setOk] = useState(true);

  if (!ok) {
    return (
      <span className="logo-fallback" style={{ width: size, height: size }}>
        {tech.name[0]}
      </span>
    );
  }

  return (
    <img
      src={tech.logo}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      className={tech.mono ? "logo-mono" : ""}
      onError={() => setOk(false)}
    />
  );
}