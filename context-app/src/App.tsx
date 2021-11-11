import { Dashboard } from 'components/Dashboard'
import 'antd/dist/antd.css'
import { UsersProvider } from 'Users/UsersContext'

function App() {
  return (
    <div className="App">
      <UsersProvider>
        <Dashboard />
      </UsersProvider>
    </div>
  )
}

export default App
