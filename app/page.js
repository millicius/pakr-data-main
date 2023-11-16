import DataList from '../components/DataList'

export default async function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <h1>pakr_data</h1>
      <DataList />
    </div>
  )
}
