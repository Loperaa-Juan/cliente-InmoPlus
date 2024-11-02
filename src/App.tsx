import { HeaderCard } from "./components/my-components/Header";
import { Inmuebles } from "./components/my-components/Inmuebles";
import { TipoInmueble } from "./components/my-components/TipoInmueble";

export const App = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-8">
        <HeaderCard title="InmoPlus" description="Tu espacio ideal, nuestro compromiso" />
        <div className="grid grid-cols-1 gap-12 mt-8">
          <h1 className="text-5xl font-extrabold text-black w-full text-center">Consulta de Inmuebles</h1>
          <Inmuebles />
          <h1 className="text-5xl font-extrabold text-black w-full text-center">Consulta de Tipo Inmuebles</h1>
          <TipoInmueble />
        </div>
      </div>
    );
};
