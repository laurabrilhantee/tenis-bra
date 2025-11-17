import { useState } from 'react'
import './App.css'
import Tenisnike from './assets/tenisdanike.webp'
import Tenisnike2 from './assets/tenis nike.png'
import Tenisnike3 from './assets/tn.webp'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import BRA from './assets/bra.png'
import BRA1 from './assets/bra2.png'
import BRA2 from './assets/bra3.png'
import BRA3 from './assets/bra4.png'
import Logo from './assets/nlg.png'
import 'swiper/css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
      <header>    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false, 
            }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={BRA} alt="" className="img-prod" /></SwiperSlide>
      <SwiperSlide><img src={BRA1} alt="" className="img-prod" /></SwiperSlide>
      <SwiperSlide><img src={BRA2} alt="" className="img-prod" /></SwiperSlide>
      <SwiperSlide><img src={BRA3} alt="" className="img-prod" /></SwiperSlide>
    </Swiper>
</header>
      <section className="produtos">

        {/*Produto 1 */}
        <a href="#" className="link-card">
          <div className="card">
          <img src={Tenisnike}alt="" className="img-prod" />
            <h2>ênis Dc Shoes Construct Imp Black And White</h2>
            <p className="desc">O DC Shoes Construct é a escolha ideal para quem busca um tênis robusto, confortável e com um visual autêntico. Com um design imponente e inspirado no skate dos anos 2000, esse modelo combina durabilidade, amortecimento e aderência, garantindo máxima performance tanto nas sessões de skate quanto no dia a dia</p>
            <p className="preco">R$ 483,99</p>
          <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (472)</div>
          <div className="off">- 15%</div>
          </div>      
        </a>              

        {/*Produto 2 */}
        <a href="#" className="link-card">
          <div className="card">
          <img src={Tenisnike2}alt="" className="img-prod" />
            <h2>Tênis Nike DM0823 003 MC Trainer 2 Preto</h2>
            <p className="desc">O Tênis Nike Trainer 2  é sinônimo de conforto durante o dia a dia. A entressola reforçada garante amortecimento e estabilidade em cada passada. O cano baixo proporciona um ajuste macio ao redor do tornozelo e o calce fácil oferece praticidade na hora de usar. Não deixe pra depois e adquira já esse tênis! </p>
            <p className="preco">R$ 669,90</p>
          <div className="avaliacao"> <span>★ ★ ☆ ☆ ☆</span> (172)</div>
          <div className="off">- 15%</div>
          </div>      
        </a>              

        {/*Produto 3 */}
        <a href="#" className="link-card">
          <div className="card">
          <img src={Tenisnike3}alt="" className="img-prod" />
            <h2>Tênis Adidas Runfalcon 5 Feminino Preto e Branco</h2>
            <p className="desc">A Adidas apresenta o tênis Runfalcon 5, a pedida certa para quem busca por leveza e conforto durante suas práticas esporivas diárias. Com cabedal feito em material têxtil, o calçado traz design na cor preta, além de contar com solado de borracha antiderrapante.</p>
            <p className="preco">R$ 399,90</p>
          <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (28)</div>
          <div className="off">- 15%</div>
          </div>      
        </a>                      
      </section>
       <section className="destaque">
          <iframe 
          width="100%" 
          height="315"
          src="https://www.youtube.com/embed/IqgBn7sT6vI?autoplay=1&mute=1&loop=1&playlist=IqgBn7sT6vI" 
          title="YouTube video player"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen>
        </iframe>
        </section>

        <footer>

         <img src={Logo} alt="" className="logo-footer" /> 

          <div className="social-icons">
            <div className="icon">
              <img src="" alt="" id="instagram" />
            </div>
            <div className="icon">
              <img src="" alt="" id="discord" />
            </div>
            <div className="icon">
              <img src="" alt="" id="x" />
            </div>
            <div className="icon">
              <img src="" alt="" id="youtube" />
            </div>
          </div>

        </footer>
      </main>
    </>
  )
}

export default App