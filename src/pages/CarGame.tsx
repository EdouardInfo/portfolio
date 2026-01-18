import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, RotateCcw, Gamepad2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface Obstacle {
  x: number
  y: number
  color: string
  active: boolean
}

export default function CarGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [score, setScore] = useState(0)
  const [difficulty, setDifficulty] = useState(6)
  const [, setIsGameOver] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  
  const gameStateRef = useRef({
    carX: 180,
    carY: 500,
    carSpeed: 6,
    obstacleSpeed: 6,
    obstacles: [] as Obstacle[],
    keys: { up: false, down: false, left: false, right: false },
    roadLineY: -50,
    frameCount: 0,
    score: 0,
    isGameOver: false
  })

  const resetGame = useCallback(() => {
    const state = gameStateRef.current
    state.carX = 180
    state.carY = 500
    state.carSpeed = 6
    state.obstacleSpeed = 6
    state.obstacles = []
    state.roadLineY = -50
    state.frameCount = 0
    state.score = 0
    state.isGameOver = false
    setScore(0)
    setDifficulty(6)
    setIsGameOver(false)
    setGameStarted(true)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const state = gameStateRef.current

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      if (key === 'z' || key === 'arrowup') state.keys.up = true
      if (key === 's' || key === 'arrowdown') state.keys.down = true
      if (key === 'q' || key === 'arrowleft') state.keys.left = true
      if (key === 'd' || key === 'arrowright') state.keys.right = true
      if (key === 'enter' && state.isGameOver) {
        resetGame()
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      if (key === 'z' || key === 'arrowup') state.keys.up = false
      if (key === 's' || key === 'arrowdown') state.keys.down = false
      if (key === 'q' || key === 'arrowleft') state.keys.left = false
      if (key === 'd' || key === 'arrowright') state.keys.right = false
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    const drawRoad = () => {
      ctx.fillStyle = '#323232'
      ctx.fillRect(0, 0, 400, 600)
      
      ctx.fillStyle = '#ffffff'
      for (let y = state.roadLineY; y < 600; y += 50) {
        ctx.fillRect(195, y, 10, 30)
      }
      state.roadLineY += 4
      if (state.roadLineY >= 50) state.roadLineY = -50
    }

    const drawCar = () => {
      ctx.fillStyle = '#3edf59'
      ctx.beginPath()
      ctx.roundRect(state.carX, state.carY, 40, 80, 10)
      ctx.fill()

      ctx.fillStyle = '#323232'
      ctx.beginPath()
      ctx.arc(state.carX + 20, state.carY + 15, 10, Math.PI, 0)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(state.carX + 20, state.carY + 65, 10, 0, Math.PI)
      ctx.fill()

      ctx.fillStyle = '#a8ffff'
      ctx.beginPath()
      ctx.roundRect(state.carX + 10, state.carY + 20, 20, 40, 5)
      ctx.fill()
    }

    const drawObstacles = () => {
      state.obstacles.forEach(obs => {
        if (obs.active) {
          ctx.fillStyle = obs.color
          ctx.fillRect(obs.x, obs.y, 50, 50)
        }
      })
    }

    const moveCar = () => {
      let dx = 0, dy = 0
      if (state.keys.up) dy -= state.carSpeed
      if (state.keys.down) dy += state.carSpeed
      if (state.keys.left) dx -= state.carSpeed
      if (state.keys.right) dx += state.carSpeed

      if (dx !== 0 && dy !== 0) {
        dx /= 1.5
        dy /= 1.5
      }

      state.carX = Math.max(0, Math.min(360, state.carX + dx))
      state.carY = Math.max(0, Math.min(520, state.carY + dy))
    }

    const spawnObstacle = () => {
      state.frameCount++
      if (state.frameCount >= 45) {
        const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
        state.obstacles.push({
          x: Math.random() * 350,
          y: -50,
          color: randomColor,
          active: true
        })
        state.frameCount = 0
      }
    }

    const moveObstacles = () => {
      state.obstacles.forEach(obs => {
        if (obs.active) {
          obs.y += state.obstacleSpeed
          if (obs.y > 600) obs.active = false
        }
      })
      state.obstacles = state.obstacles.filter(obs => obs.active || obs.y <= 600)
    }

    const checkCollision = () => {
      for (const obs of state.obstacles) {
        if (obs.active &&
            state.carX < obs.x + 50 &&
            state.carX + 40 > obs.x &&
            state.carY < obs.y + 50 &&
            state.carY + 80 > obs.y) {
          state.isGameOver = true
          setIsGameOver(true)
          return
        }
      }
    }

    const drawUI = () => {
      ctx.fillStyle = '#ffffff'
      ctx.font = '20px Arial'
      ctx.textAlign = 'left'
      ctx.fillText(`Score: ${state.score}`, 10, 30)
      ctx.textAlign = 'right'
      ctx.fillText(`Difficulté: ${(state.obstacleSpeed).toFixed(1)}`, 390, 30)
    }

    const drawGameOver = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
      ctx.fillRect(0, 0, 400, 600)
      
      ctx.fillStyle = '#dc3142'
      ctx.font = 'bold 48px Arial'
      ctx.textAlign = 'center'
      ctx.fillText('Perdu !', 200, 280)
      
      ctx.fillStyle = '#ffffff'
      ctx.font = '24px Arial'
      ctx.fillText(`Score final : ${state.score}`, 200, 330)
      
      ctx.font = '16px Arial'
      ctx.fillText("Appuyez sur 'Entrée' pour recommencer", 200, 380)
    }

    let animationId: number
    let lastTime = 0
    const targetFPS = 60
    const frameInterval = 1000 / targetFPS

    const gameLoop = (currentTime: number) => {
      animationId = requestAnimationFrame(gameLoop)
      
      const deltaTime = currentTime - lastTime
      if (deltaTime < frameInterval) return
      lastTime = currentTime - (deltaTime % frameInterval)

      if (!gameStarted) {
        return
      }

      if (state.score > 0 && state.score % 240 === 0) {
        state.obstacleSpeed += 0.2
        state.carSpeed += 0.1
        setDifficulty(state.obstacleSpeed)
      }

      drawRoad()

      if (!state.isGameOver) {
        moveCar()
        moveObstacles()
        spawnObstacle()
        checkCollision()
        state.score++
        setScore(state.score)
      }

      drawCar()
      drawObstacles()
      drawUI()

      if (state.isGameOver) {
        drawGameOver()
      }
    }

    animationId = requestAnimationFrame(gameLoop)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      cancelAnimationFrame(animationId)
    }
  }, [gameStarted, resetGame])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/projets" 
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors mb-8 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Retour aux projets
            </Link>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Jeu de Voiture</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Projet Processing Java réalisé en L1. Esquivez les obstacles et survivez le plus longtemps possible !
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="mb-6 p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 w-full max-w-md">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <Gamepad2 size={20} className="text-primary-500" />
                Contrôles
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span>⬆️ Z ou ↑</span>
                <span>⬇️ S ou ↓</span>
                <span>⬅️ Q ou ←</span>
                <span>➡️ D ou →</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800">
              <canvas
                ref={canvasRef}
                width={400}
                height={600}
                className="block"
              />
              
              {!gameStarted && (
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center">
                  <Gamepad2 size={64} className="text-primary-500 mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-4">Jeu de Voiture</h2>
                  <p className="text-gray-300 mb-6 text-center px-4">
                    Esquivez les obstacles qui apparaissent sur la route !
                  </p>
                  <button
                    onClick={resetGame}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Gamepad2 size={20} />
                    Jouer
                  </button>
                </div>
              )}
            </div>

            <div className="mt-6 flex gap-4">
              <div className="px-6 py-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Score</span>
                <p className="text-2xl font-bold text-primary-500">{score}</p>
              </div>
              <div className="px-6 py-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Difficulté</span>
                <p className="text-2xl font-bold text-accent-500">{difficulty.toFixed(1)}</p>
              </div>
              {gameStarted && (
                <button
                  onClick={resetGame}
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <RotateCcw size={24} className="text-gray-600 dark:text-gray-400" />
                </button>
              )}
            </div>

            <motion.a
              href="https://github.com/EdouardInfo/Processing-Java-L1-Info/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 btn-secondary flex items-center gap-3"
            >
              <Github size={20} />
              Voir le code source (Processing Java)
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
