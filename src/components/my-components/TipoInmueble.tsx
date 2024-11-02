import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useEffect, useState } from "react";

export const TipoInmueble = () => {
    const [tipoInmueble, setTipoInmueble] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = 'http://localhost:8070/consultartipoinmueble';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTipoInmueble(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error al cargar los datos:', error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <p className="text-center text-lg text-gray-600">Cargando datos...</p>;

    return (
        <div className="overflow-hidden border border-gray-300 shadow-lg rounded-lg p-4 bg-white">
            <Table>
                <TableHeader>
                    <TableRow className="bg-gray-100">
                        <TableHead className="font-semibold text-gray-700">Id Tipo Inmueble</TableHead>
                        <TableHead className="font-semibold text-gray-700">Tipo Inmueble</TableHead>
                        <TableHead className="font-semibold text-gray-700">Activo</TableHead>
                        <TableHead className="font-semibold text-gray-700">Fecha de Actualización</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tipoInmueble.map((tipo, index) => (
                        <TableRow key={index} className="hover:bg-blue-100 transition-colors duration-300">
                            <TableCell className="font-medium text-gray-900">{tipo[0]}</TableCell>
                            <TableCell className="text-gray-600">{tipo[1]}</TableCell>
                            <TableCell className="text-blue-600 font-semibold">{tipo[2] === '1'? 'Sí':'No'  }</TableCell>
                            <TableCell className="text-gray-600 font-semibold">{tipo[3]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
