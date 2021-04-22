import Header from '../templates/Header.js'
import Iam from '../templates/iam.js'
import menuDisplay from '../utils/menuDisplay.js'

const router = async () => {
  const header = document.getElementById('header')
  const iam = document.getElementById('iam')

  header.innerHTML = await Header()
  iam.innerHTML = await Iam()

  menuDisplay()
}

export default router
