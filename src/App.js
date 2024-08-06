import "./App.css";
import SideBar from "./SideBar";
import hamburger from "./images/hamburger.png";
import leftarrow from "./images/left-arrow.png";
import rightarrow from "./images/right-arrow.png";

function App() {
  const addRightTransform = ()=>{
    const e = document.querySelector(".right");
    e.classList.add('right-transform');
  }

  const removeRightTransform = ()=>{
    const e = document.querySelector(".right");
    e.classList.remove('right-transform');
  }

  const addLeftTransform = ()=>{
    const e = document.querySelector(".left");
    e.classList.add('left-transform');
  }

  const removeLeftTransform = ()=>{
    const e = document.querySelector(".left");
    e.classList.remove('left-transform');
  }

  const addSelectorTransform = ()=>{
    const e = document.querySelector(".selector>select");
    e.classList.add('selector-transform');
  }

  const removeSelectorTransform = ()=>{
    const e = document.querySelector(".selector>select");
    e.classList.remove('selector-transform');
  }

  const addHamburgerTransform = ()=>{
    const e = document.querySelector(".hamburger-icon");
    e.classList.add('hamburger-transform');
  }

  const removeHamburgerTransform = ()=>{
    const e = document.querySelector(".hamburger-icon");
    e.classList.remove('hamburger-transform');
  }


  return (
    <div className="App">
      <header className="flex-row">
        <SideBar />
        <nav className="flex-row items-center mt-05">
          <div onTouchStart={addHamburgerTransform} onTouchEnd={removeHamburgerTransform}
          onMouseDown={addHamburgerTransform} onMouseUp={removeHamburgerTransform}
          className="hamburger-icon">
            <img src={hamburger} alt="hamburger.png"></img>
          </div>
          <div className="flex-around items-center">
            <div className="navigator">
              <button onTouchStart={addLeftTransform} onTouchEnd={removeLeftTransform}
              onMouseDown={addLeftTransform} onMouseUp={removeLeftTransform}
              className="flex-row items-center gap-05 left">
                <img src={leftarrow} alt="arrow-left.png"></img>
                <div>Previous</div>
              </button>
            </div>
            <div className="selector">
              <select onTouchStart={addSelectorTransform} onTouchEnd={removeSelectorTransform}
              onMouseDown={addSelectorTransform} onMouseUp={removeSelectorTransform}>
                <option>Asfsdfsdfsdf</option>
                <option>A</option>
                <option>Asfsfsdfsdfsdfsdfsdf</option>
              </select>
            </div>
            <div className="navigator">
              <button onTouchStart={addRightTransform} onTouchEnd={removeRightTransform} 
              onMouseDown={addRightTransform} onMouseUp={removeRightTransform} 
              className="flex-row items-center gap-05 right">
                <div>Next</div>
                <img src={rightarrow} alt="arrow-right.png"></img>
              </button>
            </div>
          </div>
        </nav>
      </header>
      
      
      <section className="flex-row">
        <div className="placeholder-aside"></div>
        <main>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam exercitationem iusto quia, autem sunt maiores rem quam veritatis placeat eum nobis! Praesentium tempora iure accusantium odit debitis expedita voluptate velit explicabo vitae. Ipsum, sit omnis quo accusamus quidem voluptates eius dolorem laudantium necessitatibus quia. Cum quibusdam assumenda eius consequatur, nostrum quasi. Voluptatibus ipsum cumque ex voluptatem molestias ad reprehenderit quis optio provident mollitia a voluptatum sunt rerum necessitatibus consequuntur saepe eos ut aliquid, quasi, in consectetur. Atque iusto saepe sunt, officiis tempora fugiat unde vel, commodi nihil ut deleniti ullam, aperiam et at maiores dignissimos numquam magni necessitatibus quidem expedita maxime. Debitis vitae facere molestias sit, sunt itaque quibusdam cumque sequi omnis, neque nam nostrum mollitia quisquam necessitatibus magni in maxime nihil reiciendis commodi consectetur eos laboriosam excepturi error voluptas. Cupiditate consequatur magni blanditiis eligendi? Blanditiis assumenda ipsum tenetur, cumque iusto, numquam cupiditate est sunt beatae quibusdam eos illo ullam quam eveniet eum fuga. Eius ex omnis provident officia debitis dolorum qui suscipit, praesentium optio voluptas officiis ratione id dignissimos quia recusandae aliquid, nemo modi laborum accusantium labore perspiciatis at? Nulla vel quidem cumque doloremque corporis fugit atque, obcaecati facilis. Ea provident delectus ex, nostrum nisi molestiae adipisci exercitationem. Incidunt quae in accusantium maxime possimus expedita deleniti sapiente, commodi iure eaque consectetur itaque vero corrupti consequatur porro at sunt illum ipsum a? Quod cupiditate quidem explicabo tempora, dicta autem magnam suscipit cum eveniet doloremque odit quibusdam delectus? Consequatur non, iure tenetur ut porro velit in ipsam esse repellendus minima quasi autem voluptates sunt odit aliquid possimus. Commodi, repudiandae. Fugit dolores vel quisquam aperiam, odio placeat delectus magnam vitae tempore facere rerum debitis ex nobis explicabo ratione autem, cumque assumenda aliquam! Alias omnis, laudantium, quibusdam recusandae nulla aperiam quod illo perspiciatis cumque dignissimos odio dolore incidunt! Ullam culpa vero dolor accusantium natus delectus, rerum debitis. Omnis perferendis odio necessitatibus, earum quaerat quas. Eveniet, adipisci. Excepturi dolore impedit, accusamus nesciunt sunt, similique, at consequuntur illo praesentium alias temporibus corporis molestias soluta doloremque adipisci qui nemo pariatur repellat architecto! Fuga sit unde tempora molestiae, earum doloribus, laudantium eos asperiores dignissimos aliquid impedit velit? Beatae doloribus, sit, iure est necessitatibus placeat eos ipsum optio tenetur nobis eveniet ea quisquam nulla similique, rem suscipit dignissimos vero dolorem dicta repellendus. Tempore, ab corporis. Officiis soluta expedita iure ullam provident fugiat dolorum, cum possimus inventore, molestiae incidunt voluptates, porro culpa. Optio quos cum iste dolores consectetur. Accusantium accusamus possimus, et eaque iusto, quo ipsa assumenda sunt hic rem harum. Omnis quidem totam, atque eum perspiciatis iusto cupiditate fuga nobis quaerat? Odio et accusantium placeat facere obcaecati enim ea quaerat, deleniti explicabo earum nobis reiciendis voluptate dignissimos velit adipisci perspiciatis nulla error, non libero aliquam sed cum quibusdam fugiat! Quasi earum sed doloremque nihil, corrupti consequatur praesentium qui. Omnis voluptates tenetur, exercitationem quasi laboriosam et! Itaque, magnam veniam repudiandae alias dolorem dolor perspiciatis corporis optio laborum error nam, asperiores quos dolorum nihil? Rerum, temporibus quas! Mollitia dicta laboriosam optio laborum, suscipit accusantium animi consectetur et commodi nihil. Sint ab temporibus optio? Eos expedita perferendis alias non aliquid saepe illo in, pariatur impedit nihil sapiente ut doloremque nulla quis exercitationem aspernatur accusantium laboriosam repellendus possimus, tempore ad facere. Dolore odio, voluptatum quia veritatis laudantium possimus mollitia suscipit in illum omnis asperiores? Possimus sed consectetur optio est omnis non officia dignissimos. Modi similique vitae atque. Aperiam, in ad iste, quas quos repellat cupiditate, blanditiis enim consequuntur nemo illo deleniti distinctio quaerat necessitatibus aliquid iure quis. At facere saepe fugiat beatae suscipit, eligendi iusto quo minima vero debitis. Alias atque asperiores neque incidunt aspernatur modi, rem voluptatem fugit possimus amet omnis officiis deserunt dignissimos nam qui iste natus ducimus. Expedita asperiores dolorum cumque at deserunt ullam, doloribus magni sapiente molestiae. Corrupti deleniti nulla consectetur fuga provident voluptates tempore hic sunt similique dignissimos adipisci ullam debitis, aut aperiam facere sit quibusdam in quia beatae commodi modi optio harum ratione. Fuga commodi nam vel eaque provident, id dicta animi iusto possimus odio sint alias, eligendi esse eius maxime nesciunt voluptas. Ullam provident repellat reiciendis sapiente velit ea voluptas autem, quae quasi qui saepe magni facere labore est similique illo. Maxime, explicabo dolorum? Animi tempore debitis earum iusto provident, dicta sint, laboriosam veniam dolorum fugiat eum? Hic, rerum itaque. Laborum aliquam nesciunt architecto voluptas illo eius sequi adipisci! Consequatur minus blanditiis doloribus nam tenetur reprehenderit voluptatibus delectus quam? Facere doloribus assumenda quos sunt, hic aut reiciendis modi blanditiis perferendis corrupti, eaque expedita dolore suscipit, recusandae placeat totam. Praesentium, nesciunt reprehenderit molestias vel repellendus autem eligendi itaque ad reiciendis ullam quidem ipsa possimus similique architecto maiores quisquam aspernatur tempora officia ex at delectus quam tenetur dignissimos? Voluptate quaerat eos iure placeat quod animi deserunt voluptatibus repudiandae! Ducimus unde nemo tempora dolor, harum ab sit sunt animi reprehenderit voluptatem vitae architecto rerum! Et repellat nihil reiciendis at similique accusantium dolorem quas dolore sint labore inventore, excepturi blanditiis officia, ducimus cumque cupiditate. Commodi dicta temporibus voluptates, a molestias ipsam repudiandae distinctio aut illo est, eius fuga maiores id aspernatur? Impedit soluta, totam expedita veritatis fuga explicabo ullam officia laudantium deleniti accusantium tenetur? Incidunt ab sed sunt omnis alias tenetur repellendus odio id. Eum debitis odit, iusto ex at incidunt dicta distinctio labore laborum tempora expedita, illo sit dolor repellendus ab maxime. Velit provident vitae sapiente delectus. Sequi aut nam adipisci autem voluptatem aperiam dolorem quos fuga natus mollitia eum, illum veritatis a et. Sapiente, reprehenderit! Itaque recusandae labore accusamus explicabo ea consequatur laboriosam illum dolore rerum! Nam esse tempore tempora voluptates numquam quaerat in totam ipsa iure, debitis exercitationem amet similique sit quisquam, aliquam et nobis, odio dolor? Minus excepturi quasi adipisci eum rem architecto velit inventore amet vel nam eius tempora voluptates eligendi, atque distinctio eaque, at natus corrupti odio, reiciendis fugit laboriosam. Eaque minima sint corporis veniam quae quibusdam illum atque possimus at ad. Sequi aperiam laborum quae laudantium autem animi quasi consequuntur quia minus fuga odio consequatur neque odit fugiat, repudiandae repellat. Fugit totam atque et vitae fugiat cupiditate consequuntur doloribus id, eligendi asperiores? Temporibus facilis laudantium voluptatum possimus, velit eius pariatur aperiam adipisci autem ab accusantium ipsam aliquam nam minima ipsa! Natus quae doloremque provident tempora illum impedit repellendus eligendi a! Similique, adipisci incidunt! Laborum repellendus a explicabo dolor, necessitatibus eligendi distinctio quia! Reiciendis sit illum labore earum saepe similique. In deleniti assumenda nihil ea sint quas? Voluptatem, cumque ex. Quae, consequuntur repudiandae ea provident sequi molestiae cupiditate doloremque laudantium eaque tempora unde impedit nihil veritatis. Consectetur dolores officia quia fuga dolorem praesentium numquam animi perferendis, placeat libero velit, omnis nihil quidem explicabo natus quaerat quam. Maiores mollitia assumenda corrupti in fuga nulla, voluptas architecto, sit excepturi ut dolore inventore saepe veritatis tenetur harum ab totam impedit! Ab incidunt libero, in esse est voluptatibus, odio dolorum reiciendis fugiat dolor at placeat error tempore mollitia facilis tenetur, corrupti quod veritatis pariatur cumque animi. Vero quas similique libero odit laborum! Quidem magni maiores eos accusantium necessitatibus ipsa eaque labore ratione itaque provident quos repudiandae voluptatibus error ipsam expedita autem reiciendis, eveniet voluptatum assumenda veritatis animi repellendus. Dolore saepe aspernatur ipsum? Fuga itaque explicabo sed quidem! Necessitatibus reprehenderit sint et expedita, id iste saepe est magni atque aut earum a animi nisi ipsam facere aliquam accusantium soluta! Corporis corrupti minus saepe illo quia deserunt, ab tempore ea quasi laudantium at asperiores numquam quibusdam est dolores itaque in odit, officiis cum voluptates iste fugiat eius eos. Sint perferendis neque debitis error esse vel veritatis obcaecati aspernatur temporibus sequi recusandae ad ipsa, sit et tempora deleniti sed accusamus voluptatum iusto! Exercitationem tenetur qui nihil venia     
        </main>
      </section>
    </div>
  );
}

export default App;
