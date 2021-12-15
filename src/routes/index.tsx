// import dependencies
import {
    Routes as RouterDomRoutes,
    Route
} from 'react-router-dom';

// pages
import { SignIn } from '../pages/SignIn';
import { Dashboard } from '../pages/Dashboard';

export const Routes = () => {
    return (
        <RouterDomRoutes>
            <Route path="/dashboard" element={<Dashboard />}/> :
            <Route path="/" element={<SignIn />}/>
        </RouterDomRoutes>
    )
}