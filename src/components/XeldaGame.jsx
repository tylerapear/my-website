import './XeldaGame.css'

export function XeldaGame() {
  return(
    <div className='xelda-game-component'>
      <h3>Check out my latest project...</h3>
      <h2>The Legend of 'Xelda'</h2>
      <iframe src='/game.html'></iframe>
      <h5>'W', 'A', 'S', and 'D' to move; 'J' to attack</h5>
      <p>
        Well, the game is a demonstration of my project anyway. I'm developing a 2D game engine using Python and Pygame.
        Once this project is complete, developers will be able to use it to develop any 2D Zelda-like game they can imagine.
      </p>
    </div>
  );
}