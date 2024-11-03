import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useEffect, useState } from "react";

export const Inmuebles = () => {
    const [inmuebles, setInmuebles] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:8070/consultarinmueble';
        fetch(url)
            .then(response => response.json())
            .then(data => setInmuebles(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="overflow-hidden border border-gray-300 shadow-lg rounded-lg p-4 bg-white">
            <Table>
                <TableHeader>
                    <TableRow className="bg-gray-100">
                        <TableHead className="font-semibold text-gray-700">Id Inmueble</TableHead>
                        <TableHead className="font-semibold text-gray-700">Descripción</TableHead>
                        <TableHead className="font-semibold text-gray-700">Id Tipo Inmueble</TableHead>
                        <TableHead className="font-semibold text-gray-700">Id Ciudad</TableHead>
                        <TableHead className="font-semibold text-gray-700">Nombre Ciudad</TableHead>
                        <TableHead className="font-semibold text-gray-700">Precio Inmueble</TableHead>
                        <TableHead className="font-semibold text-gray-700">Activo</TableHead>
                        <TableHead className="font-semibold text-gray-700">Fecha de Actualización</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {inmuebles.map((inmueble, index) => (
                        <TableRow key={index} className="hover:bg-blue-100 transition-colors duration-300">
                            <TableCell className="font-medium text-gray-900">{inmueble[0]}</TableCell>
                            <TableCell className="text-gray-600">{inmueble[1]}</TableCell>
                            <TableCell className="text-gray-900">{inmueble[2]}</TableCell>
                            <TableCell className="font-medium text-gray-900">{inmueble[3]}</TableCell>
                            <TableCell className="text-blue-600 font-semibold">{inmueble[4]}</TableCell>
                            <TableCell className="text-blue-600 font-semibold">{inmueble[5]}</TableCell>
                            <TableCell className="text-gray-900">{inmueble[6] === '1' ? 'Sí' : 'No'}</TableCell>
                            <TableCell className="text-gray-600">{inmueble[7]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
