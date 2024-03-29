import React from 'react'
import Def from './default'

interface home {
  data: any;
}

function home() {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <div>
          <img src="/images/fruity-smoothie.jpg" width="250" height="250" alt="Fruit Shake" />
          <div>
            Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  )
}

module.exports = home
