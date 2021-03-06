import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { SearchScreen } from '../components/search/SearchScreen';


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}></Route>
                    <Route exact path="/dc" component={DcScreen}></Route>
                    <Route exact path="/search" component={SearchScreen}></Route>

                    <Route exact path="/hero/:heroeId" component={HeroScreen}></Route>

                    <Redirect to="/marvel"/>
                </Switch>
            </div>

        </>
    )
}
