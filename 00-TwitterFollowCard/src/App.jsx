import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    },
]

export function App() {
    // const midudev = { initialIsFollowing: true, userName: 'midudev', name: 'Miguel Ángel Durán'}

    return (
        <section className='App'>
            {/* <TwitterFollowCard
                formatUserName={formatUserName}
                // {...midudev }>
                >
                Miguel Ángel Durán
            </TwitterFollowCard>
            <TwitterFollowCard
                formatUserName={formatUserName}
                initialIsFollowing = {false}
                userName="pheralb">
                Pablo Hernandez
            </TwitterFollowCard>
            <TwitterFollowCard
                formatUserName={formatUserName}
                initialIsFollowing
                userName="elonmusk">
                Elon Musk
            </TwitterFollowCard> */}
            {
                users.map(({ userName, name, isFollowing }) =>
                (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
                )
            }
        </section>
    )
} 