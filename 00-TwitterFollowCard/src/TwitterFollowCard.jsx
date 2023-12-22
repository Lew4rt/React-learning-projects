import { useState } from "react"

export function TwitterFollowCard ({ userName = 'unknown', children, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const textButton = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article  className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src={`https://unavatar.io/${userName}`}
                    alt="A twitter avatar" />

                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span
                        className="tw-followCard-infoUserName">
                        @{(userName)}
                    </span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-buttonText">{textButton}</span>
                    <span className="tw-followCard-unfollow">Dejar de seguir</span>
                </button>
            </aside>
        </article> 
    )
}