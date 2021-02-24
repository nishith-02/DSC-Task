import React, { useState, useEffect } from "react"
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import { Card, Icon, Image } from 'semantic-ui-react'
function App() {
    const [Name, setName] = useState('')
    const [login, setlogin] = useState('')
    const [followers, setfollowers] = useState('')
    const [gitname, setgitname] = useState('')
    const [following, setfollowing] = useState('')
    const [avatar, setavatar] = useState('')
    const [repos, setrepos] = useState('')
    const [company, setcompany] = useState('')
    const [bio, setbio] = useState('')
    const [blog, setblog] = useState('')
    const [location, setlocation] = useState('')
    const [email, setemail] = useState('')
    const [gist, setgist] = useState('')
    const [error, seterror] = useState(null)
    var button
    useEffect(() => {
        fetch('https://api.github.com/users/example')
            .then(res => res.json())
            .then(data => { Naruto(data) })
    },
        [])
    const Change = () => {
        fetch(`https://api.github.com/users/${Name}`)
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    seterror(data.message)

                }
                else {
                    Naruto(data)
                    seterror(null)

                }
            })
    }
    const Naruto = ({ name, public_repos, login, followers, following, avatar_url, company, bio, blog, location, email, public_gists }) => {
        setgitname(name)
        setlogin(login)
        setfollowers(followers)
        setfollowing(following)
        setavatar(avatar_url)
        setrepos(public_repos)
        setcompany(company)
        setbio(bio)
        setblog(blog)
        setlocation(location)
        setemail(email)
        setgist(public_gists)
    }
    return (
        <div className="firstclass">
            <div className="secondclass">
                <div class="wrapper">
                    <div class="input-data">
                        <input type="text" required value={Name} onChange={e => setName(e.target.value)}></input>
                        <div class="underline"></div>
                        <label>Username</label>
                    </div>
                </div>
                <button className="ripple" type="submit" onClick={Change}>fetch</button>
            </div>
            {error ? (<h1>{error}</h1>) : (
            <div className="thirdclass">
            <Card className="card">
                <Image src={avatar} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{gitname}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {followers} followers
      </a>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {following} following
      </a>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        {repos} repositories
      </a>
                </Card.Content>
                {company != null ? 
                (<Card.Content extra>
                    <a>
                        Company:{company}
                    </a>
                </Card.Content>) 
                : 
                (<h5 className="hide">Hello world</h5>)}
                {email != null ? 
                (<Card.Content extra>
                    <a>
                        Email:{email}
                    </a>
                </Card.Content>) 
                : 
                (<h5 className="hide">Hello world</h5>)}
                {blog != "" ? 
                (<Card.Content extra>
                    <a>
                        Portfolio:{blog}
                    </a>
                </Card.Content>) 
                : 
                (<h5 className="hide">Hello world</h5>)}
                {location != null ? 
                (<Card.Content extra>
                    <a>
                        Location:{location}
                    </a>
                </Card.Content>) 
                : 
                (<h5 className="hide">Hello world</h5>)}
            </Card>
            </div>
            )}
        </div>
    )
}
export default App