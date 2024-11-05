import { Map } from "../../../assets";

export default function HistoryPage() {
  return (
    <div className="p-10">
      <h1 className="mb-8 font-bold text-center text-[#575EA6] text-2xl">Dados relacionados as florestas contabilizadas</h1>

      <div className="relative overflow-x-auto">
        <table className="w-full  text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                ID da imagem
              </th>
              <th scope="col" className="px-6 py-3">
                Região
              </th>
              <th scope="col" className="px-6 py-3">
                Data
              </th>
              <th scope="col" className="px-6 py-3">
                Floresta
              </th>
              <th scope="col" className="px-6 py-3">
                Versão do modelo
              </th>
            </tr>
          </thead>
          <tbody>
            {[0, 1, 2, 3].map((item) => (
              <tr className="bg-white border-b  hover:bg-slate-100 cursor-pointer">
                <th
                  scope="row"
                  className="px-6 py-4 w-1/7 font-medium text-gray-900 whitespace-nowrap"
                >
                  <img src={Map} className="max-w-52" alt="" />
                </th>
                <td className="px-6 py-4">mapa_aurora.png</td>
                <td className="px-6 py-4">Sudeste</td>
                <td className="px-6 py-4">24/08/2024</td>
                <td className="px-6 py-4">Aurora Verde</td>
                <td className="px-6 py-4">v1.0</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
