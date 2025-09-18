import './XeldaGame.css'

export function XeldaGame() {
  return(
    <div className='xelda-game-component'>
      <h3>Check out my latest project...</h3>
      <h2>NESY-Engine</h2>
      <iframe src='/game.html'></iframe>
      <h5>'W', 'A', 'S', and 'D' to move; 'J' to attack</h5>
      <p>
        I'm developing an open source 2D game engine package using Python and Pygame. The game you see here is a demo to display the engine's capabilities.
        Once this project is complete, developers will be able to use it to develop any 2D NES-style game they can imagine. 
        Check out the source code at <a href="https://github.com/tylerapear/NESY-Engine">https://github.com/tylerapear/NESY-Engine</a>
      </p>
      <h5>Huge thanks to all NESY-Engine Contributors!</h5>
      <p class = "centered-paragraph">
        <a href="https://github.com/tylerapear">tylerapear</a>
        <br></br>
        <a href="https://github.com/punz321">punz321</a>
      </p>
    </div>
  );
}