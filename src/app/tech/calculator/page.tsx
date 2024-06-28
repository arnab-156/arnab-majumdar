import Image from "next/image";
import { Calculator } from "../../components/calculator";

export default function CalculatorPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <div className="m-2 h-screen max-w-xl">
        <h1 className="text-xl font-bold text-center mt-8">Basic Calculator</h1>
        <Calculator />
      </div>
    </main>
  );
}
