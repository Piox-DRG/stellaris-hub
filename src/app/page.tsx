import EmpirePreview from "./components/EmpirePreview";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world!</h1>
      <EmpirePreview empireData={undefined}></EmpirePreview>
    </main>
  )
}
