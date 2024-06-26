import { route } from '@routes/route'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const ErrorPage = lazy(() => import('@pages/ErrorPage'))
const Home = lazy(() => import('@pages/Home'))

function Router() {
    return (
        <Routes>
            <Route
                path={route.index}
                element={<Home />}
            />

            <Route
                path='/*'
                element={
                    <ErrorPage
                        code='404'
                        message='Page not found'
                        width='100%'
                        height='100vh'
                    />
                }
            />
        </Routes>
    )
}

export default Router
