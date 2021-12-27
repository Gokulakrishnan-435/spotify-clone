import React from 'react'
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import UserLeftBlock from './UserLeftBlock'
import UserRightBlock from './UserRightBlock'
import "./user.css"
const UserHome = () => {
  let { path } = useRouteMatch();
  console.log(path);
    return (
      <section id="userBlock">
        <article>
          <UserLeftBlock />
          <Switch>
            <Route path={`${path}/:id`}>
              <UserRightBlock />
            </Route>
          </Switch>
        </article>
      </section>
    );
}

export default UserHome
