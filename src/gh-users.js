/* @flow */

type GHUser = {
  login: string;
  id: number;
  avatar_url: string;
}

const urls = ['facebook', 'github', 'google', 'microsoft', 'airbnb']
  .map(user => `https://api.github.com/users/${user}`)
  .map(url => fetch(url, { method: 'GET' })
                .then(res => res.json()));

export default Promise.all(urls)

//import gh_users from "./gh-users"

//gh_users.then(e => 
//  ReactDOM.render(
//    <MuiThemeProvider>
//      <MyApp users={new Set(e)} />
//    </MuiThemeProvider>
//    , document.getElementById('main')
//  )
//);


