import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PingPong() {
  const canvasRef = useRef(null);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set initial canvas size
    canvas.width = window.innerWidth / 5;
    canvas.height = window.innerHeight / 5;

    // Detect if the device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    let paddleHeight = canvas.height / 5;
    const paddleWidth = canvas.width * 0.05;

    let ball, leftPaddle, rightPaddle;

    // Initialize game objects
    function initializeGameObjects() {
      ball = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: canvas.width * 0.02,
        speed: canvas.width * 0.05,
        dx: canvas.width * 0.01,
        dy: canvas.height * 0.005
      };

      leftPaddle = {
        x: 0,
        y: canvas.height / 2 - paddleHeight / 2,
        width: paddleWidth,
        height: paddleHeight,
        speed: canvas.height * 0.02
      };

      rightPaddle = {
        x: canvas.width - paddleWidth,
        y: canvas.height / 2 - paddleHeight / 2,
        width: paddleWidth,
        height: paddleHeight,
        speed: canvas.height * 0.02
      };
    }

    // Set canvas size to fit the screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth / 2;
      canvas.height = window.innerHeight / 2;
      paddleHeight = canvas.height / 5;
      initializeGameObjects();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const keys = {};

    // Keyboard event handlers
    const handleKeyDown = (e) => {
      keys[e.key] = true;
    };

    const handleKeyUp = (e) => {
      keys[e.key] = false;
    };

    // Draw functions
    function drawBall() {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.closePath();
    }

    function drawPaddle(x, y, width, height) {
      ctx.fillStyle = '#fff';
      ctx.fillRect(x, y, width, height);
    }

    function drawScore() {
      ctx.font = `${canvas.width * 0.04}px Arial`;
      ctx.fillStyle = '#FF4B4B'; // Red color for Player 1
      ctx.fillText('Player 1: ' + player1Score, canvas.width * 0.05, canvas.height * 0.1);
      ctx.fillStyle = '#61dafb'; // Blue color for Player 2
      ctx.fillText('Player 2: ' + player2Score, canvas.width * 0.7, canvas.height * 0.1);
    }

    // Update game state
    function update() {
      // Move the ball
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Ball collision with top and bottom walls
      if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy *= -1;
      }

      // Ball collision with paddles
      if (
        (ball.x - ball.radius < leftPaddle.x + leftPaddle.width && ball.y > leftPaddle.y && ball.y < leftPaddle.y + leftPaddle.height) ||
        (ball.x + ball.radius > rightPaddle.x && ball.y > rightPaddle.y && ball.y < rightPaddle.y + rightPaddle.height)
      ) {
        ball.dx *= -1;
      }

      // Scoring
      if (ball.x + ball.radius > canvas.width) {
        setPlayer1Score(prevScore => prevScore + 1);
        resetBall();
      } else if (ball.x - ball.radius < 0) {
        setPlayer2Score(prevScore => prevScore + 1);
        resetBall();
      }

      // Move paddles for keyboard controls
      if (!isMobile) {
        if (keys.w && leftPaddle.y > 0) {
          leftPaddle.y -= leftPaddle.speed;
        } else if (keys.s && leftPaddle.y + leftPaddle.height < canvas.height) {
          leftPaddle.y += leftPaddle.speed;
        }

        if (keys.ArrowUp && rightPaddle.y > 0) {
          rightPaddle.y -= rightPaddle.speed;
        } else if (keys.ArrowDown && rightPaddle.y + rightPaddle.height < canvas.height) {
          rightPaddle.y += rightPaddle.speed;
        }
      }
    }

    function resetBall() {
      ball.x = canvas.width / 2;
      ball.y = canvas.height / 2;
      ball.dx = -ball.dx;
      ball.dy = Math.random() > 0.5 ? canvas.height * 0.005 : canvas.height * -0.005;
    }

    // Main game loop
    let animationFrameId;
    function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawBall();
      drawPaddle(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height);
      drawPaddle(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height);
      drawScore();

      update();

      animationFrameId = requestAnimationFrame(gameLoop);
    }

    // Touch controls
    if (isMobile) {
      canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const root = document.documentElement;
        const touch = e.touches[0];
        const mouseY = (touch.clientY - rect.top - root.scrollTop) / (rect.bottom - rect.top) * canvas.height;

        if (touch.clientX < canvas.width / 2) {
          leftPaddle.y = mouseY - leftPaddle.height / 2;
        } else {
          rightPaddle.y = mouseY - rightPaddle.height / 2;
        }

        // Keep paddles inside the canvas
        leftPaddle.y = Math.max(0, Math.min(canvas.height - leftPaddle.height, leftPaddle.y));
        rightPaddle.y = Math.max(0, Math.min(canvas.height - rightPaddle.height, rightPaddle.y));
      }, { passive: false });
    } else {
      // Keyboard controls for non-mobile devices
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
    }

    // Start the game loop
    gameLoop();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (!isMobile) {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [player1Score, player2Score]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>PingPong Game</h1>
        <canvas
          ref={canvasRef}
          style={{ border: '2px solid #fff', touchAction: 'none' }}
        />
        <Link
          to="/"
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#61dafb',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          Back to Home
        </Link>
      </header>
    </div>
  );
}

export default PingPong;