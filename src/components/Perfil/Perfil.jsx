export function Perfil({ nombre, edad, ciudad }) {
  return (
    <div>
      <h1>Mi nombre es: {nombre}</h1>
      <p>Edad: {edad}</p>
      <p>Vengo de: {ciudad}</p>
    </div>
  );
}
