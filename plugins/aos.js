import AOS from 'aos'
import 'aos/dist/aos.css'
export default ({ app }) => {
  /* eslint-disable new-cap */
  app.AOS = new AOS.init({ disable: 'phone' }) // or any other options you need
}