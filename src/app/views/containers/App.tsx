import {CustomerList} from "../../../customer/views/containers/customer-list";
import {Link, Outlet, Route, Routes} from "react-router-dom";
import {Container} from "@mui/material";
import {CustomersAdd} from "../../../customer/views/containers/customers-add";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/> }>
        <Route index element={<Home />} />
        <Route path='customers' element={<CustomerList />} />
        <Route path='customers/add' element={<CustomersAdd />}/>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

const Home = () => {
  return (<div><h1>Home</h1></div>)
}

const Layout = () => {
  return (
    <Container fixed>
      <nav>
        <ul>
          <li>
            <Link to={'/customers'}>Customers</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </Container>
  )
}

const NoMatch = () => {
  return (
    <main>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </main>
  )
}


export default App
