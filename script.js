
const stories = [
  {
    title: "Ang Leon at ang Daga",
    author: "Kids Story",
    genre: "Animal Story",
    synopsis: "Isang maliit na daga ang tumulong sa isang malaking leon.",
    chapter: "Ang Munting Tagapagligtas",
    content: "Isang araw, nakahuli ang leon ng isang maliit na daga. Nagmakaawa ang daga na pakawalan siya at nangakong tutulong balang araw. Natawa ang leon ngunit pinakawalan niya ito. Makalipas ang ilang araw, nahuli ang leon sa lambat. Narinig siya ng daga at kinagat ang mga tali hanggang makalaya ang leon. Natutuhan ng leon na kahit maliit ay maaaring maging malaking tulong."
  },
  {
    title: "Ang Pagong at ang Kuneho",
    author: "Kids Story",
    genre: "Animal Story",
    synopsis: "Nagkarera ang isang mabagal na pagong at mabilis na kuneho.",
    chapter: "Ang Karera",
    content: "Ipinagyabang ng kuneho ang bilis niya at hinamon ang pagong sa karera. Dahil kampante, natulog ang kuneho sa ilalim ng puno. Samantala, dahan-dahang nagpatuloy ang pagong. Nang magising ang kuneho, malapit nang matapos ang karera. Naunang nakarating ang pagong. Natutuhan nila na mahalaga ang tiyaga at hindi dapat maging mayabang."
  },
  {
    title: "Ang Langgam at ang Tipaklong",
    author: "Kids Story",
    genre: "Fable",
    synopsis: "Isang masipag na langgam ang naghanda para sa tag-ulan.",
    chapter: "Paghahanda sa Tag-ulan",
    content: "Habang nag-iipon ng pagkain ang mga langgam, masayang umaawit ang tipaklong. Dumating ang tag-ulan at nahirapan siyang humanap ng pagkain. Humingi siya ng tulong sa mga langgam. Tinulungan nila siya at pinayuhang maghanda rin sa susunod. Natutuhan ng tipaklong na mahalaga ang pagsisikap at paghahanda."
  },
  {
    title: "Ang Batang Mapagbigay",
    author: "Kids Story",
    genre: "Good Values",
    synopsis: "Ibinahagi ng isang bata ang kaniyang baon sa kaibigan.",
    chapter: "Ang Baon ni Ana",
    content: "May dalang tinapay si Ana sa paaralan. Napansin niyang walang baon ang kaniyang kaklaseng si Lito. Hinati niya ang tinapay at ibinigay ang kalahati sa kaibigan. Nagpasalamat si Lito at naging masaya silang dalawa. Natutuhan ni Ana na ang pagbabahagi ay isang simpleng paraan ng pagpapakita ng kabaitan."
  },
  {
    title: "Ang Nawawalang Tuta",
    author: "Kids Story",
    genre: "Animal Story",
    synopsis: "Tinulungan ng isang batang babae ang nawawalang tuta.",
    chapter: "Hanapin si Bantay",
    content: "Habang pauwi si Mia, may nakita siyang maliit na tuta sa tabi ng daan. Gutom at takot ito. Binigyan niya ito ng tubig at tinanong ang mga kapitbahay kung sino ang may-ari. Maya-maya, dumating ang isang batang naghahanap sa kaniyang alaga. Masayang nagkita ang dalawa. Natutuhan ni Mia na mahalagang tumulong sa mga nangangailangan."
  },
  {
    title: "Ang Mahiwagang Binhi",
    author: "Kids Story",
    genre: "Fantasy",
    synopsis: "Nagtanim si Ben ng binhing may kakaibang kapangyarihan.",
    chapter: "Ang Puno ng Pag-asa",
    content: "Binigyan si Ben ng matandang hardinero ng isang maliit na binhi. Araw-araw niya itong dinidiligan. Pagkaraan ng ilang linggo, tumubo ang isang punong namumunga ng masasarap na prutas. Ibinahagi ni Ben ang mga bunga sa buong barangay. Natutuhan niyang ang pag-aalaga at tiyaga ay nagbubunga ng magagandang bagay."
  },
  {
    title: "Si Maya at ang mga Bulaklak",
    author: "Kids Story",
    genre: "Nature",
    synopsis: "Inalagaan ni Maya ang hardin ng kaniyang lola.",
    chapter: "Ang Makulay na Hardin",
    content: "Mahilig sa bulaklak si Maya. Isang araw, nakita niyang nalalanta ang hardin ng kaniyang lola. Diniligan niya ang mga halaman at inalis ang mga damo. Makalipas ang ilang araw, namulaklak muli ang hardin. Natuwa ang kaniyang lola. Natutuhan ni Maya na ang kalikasan ay dapat alagaan."
  },
  {
    title: "Ang Munting Bituin",
    author: "Kids Story",
    genre: "Fantasy",
    synopsis: "Tinulungan ng isang bata ang bituing naligaw sa mundo.",
    chapter: "Pauwi sa Langit",
    content: "Isang gabi, nakakita si Ella ng maliit na bituing kumikislap sa damuhan. Nalungkot ito dahil hindi nito mahanap ang daan pauwi. Inakyat ni Ella ang pinakamataas na burol at hiniling na makabalik ang bituin sa langit. Biglang umangat ang bituin at kumislap nang maliwanag. Mula noon, lagi itong kumikislap para kay Ella."
  },
  {
    title: "Ang Mabait na Higante",
    author: "Kids Story",
    genre: "Fantasy",
    synopsis: "Natakot ang mga tao sa isang higanteng may mabuting puso.",
    chapter: "Ang Tunay na Kaibigan",
    content: "May higanteng nakatira sa bundok. Iniiwasan siya ng mga tao dahil sa laki niya. Isang araw, bumaha sa baryo at tinulungan ng higante ang mga pamilya na makaligtas. Nalaman ng lahat na mabait pala siya. Naging magkaibigan sila at madalas siyang dalawin ng mga bata."
  },
  {
    title: "Ang Munting Ibon",
    author: "Kids Story",
    genre: "Animal Story",
    synopsis: "Natutong lumipad ang isang batang ibon sa tulong ng kaniyang ina.",
    chapter: "Ang Unang Paglipad",
    content: "Takot tumalon mula sa pugad ang munting ibon. Hinikayat siya ng kaniyang ina na subukan. Huminga siya nang malalim, ibinuka ang mga pakpak at lumipad nang kaunti. Unti-unti siyang naging matapang. Natutuhan niyang normal ang matakot, ngunit mahalagang subukan ang mga bagong bagay."
  },
  {
    title: "Ang Sapatos ni Carlo",
    author: "Kids Story",
    genre: "Good Values",
    synopsis: "May natagpuang sapatos si Carlo sa labas ng paaralan.",
    chapter: "Ang Matapat na Bata",
    content: "Nakita ni Carlo ang isang pares ng sapatos sa may pintuan ng paaralan. Gusto niya itong isuot ngunit naisip niyang baka hinahanap na ito ng may-ari. Dinala niya ang sapatos sa guro. Maya-maya, dumating ang batang nawalan nito. Nagpasalamat ito kay Carlo. Natuwa si Carlo dahil ginawa niya ang tama."
  },
  {
    title: "Ang Isdang Makulay",
    author: "Kids Story",
    genre: "Animal Story",
    synopsis: "Tinulungan ng isang makulay na isda ang mga kaibigan sa dagat.",
    chapter: "Ang Lihim ng Bahura",
    content: "May isang makulay na isdang nagngangalang Kiko. Isang araw, may mga isdang hindi makalabas sa pagitan ng mga bato. Ginabayan sila ni Kiko patungo sa ligtas na bahagi ng bahura. Nagpasalamat ang kaniyang mga kaibigan. Natutuhan ni Kiko na ang pagtutulungan ay nagpapalakas sa lahat."
  },
  {
    title: "Ang Prinsesang Matapang",
    author: "Kids Story",
    genre: "Adventure",
    synopsis: "Naglakbay ang prinsesa upang hanapin ang nawawalang kampana.",
    chapter: "Ang Kampana ng Kaharian",
    content: "Nawala ang kampana ng kaharian at nalungkot ang mga tao. Naglakbay si Prinsesa Lina sa kagubatan upang hanapin ito. Nakakita siya ng maliit na kubo kung saan nakatago ang kampana. Kinausap niya nang maayos ang tagapagbantay at naibalik nila ito. Natutuhan niyang ang tapang ay may kasamang kabaitan."
  },
  {
    title: "Ang Pusang si Ming",
    author: "Kids Story",
    genre: "Animal Story",
    synopsis: "Tinulungan ng isang pusa ang batang naligaw sa hardin.",
    chapter: "Ming ang Gabay",
    content: "Mahilig maglaro sa hardin si Ming. Isang araw, may batang hindi mahanap ang daan pauwi. Sinundan niya ang pusa hanggang makarating sila sa bahay ng hardinero. Tinulungan sila ng hardinero na mahanap ang pamilya ng bata. Mula noon, tinawag nilang bayani si Ming."
  },
  {
    title: "Ang Regalo ni Lolo",
    author: "Kids Story",
    genre: "Family",
    synopsis: "Binigyan ni Lolo si Niko ng regalong may mahalagang aral.",
    chapter: "Ang Munting Orasan",
    content: "Sa kaarawan ni Niko, isang lumang orasan ang ibinigay ni Lolo. Akala ni Niko ay hindi ito espesyal. Ipinaliwanag ni Lolo na ang oras ay hindi na maibabalik kapag lumipas na. Kaya dapat gamitin ito sa pag-aaral, pagtulong, at pagsasama ng pamilya. Simula noon, pinahalagahan ni Niko ang bawat araw."
  },
  {
    title: "Ang Punong Mangga",
    author: "Kids Story",
    genre: "Nature",
    synopsis: "Inalagaan ng magkakapatid ang punong mangga sa kanilang bakuran.",
    chapter: "Masarap na Bunga",
    content: "Nagtanim ang magkakapatid ng punong mangga. Araw-araw nila itong dinidiligan. Noong una, maliit lamang ito, ngunit patuloy nila itong inalagaan. Pagkaraan ng ilang taon, namunga ito nang marami. Ibinahagi nila ang mangga sa mga kapitbahay. Natutuhan nilang may gantimpala ang tiyaga."
  },
  {
    title: "Ang Kunehong Matulungin",
    author: "Kids Story",
    genre: "Animal Story",
    synopsis: "Tinulungan ng kuneho ang mga kaibigan niyang naghahanda sa taglamig.",
    chapter: "Sama-Samang Tulong",
    content: "Nang dumating ang malamig na panahon, nag-ipon ng pagkain ang mga hayop. Tinulungan ni Kiko ang pagong na magdala ng mga dahon at ang ibon na ayusin ang pugad. Nang matapos sila, sama-sama silang nagpahinga. Natutuhan nila na mas magaan ang trabaho kapag nagtutulungan."
  },
  {
    title: "Ang Mahiwagang Lapis",
    author: "Kids Story",
    genre: "Fantasy",
    synopsis: "Natuklasan ni Bea na may kakaibang kapangyarihan ang kaniyang lapis.",
    chapter: "Ang Larawang Nabuhay",
    content: "Isang araw, nakakita si Bea ng lapis sa kaniyang mesa. Gumuhit siya ng paru-paro at bigla itong kumampay ng pakpak. Gumuhit siya ng mga bulaklak para sa hardin ng paaralan. Ngunit ginamit niya ang lapis upang makatulong, hindi upang manakit. Natutuhan niyang ang talento ay dapat gamitin sa mabuti."
  },
  {
    title: "Ang Araw at ang Ulap",
    author: "Kids Story",
    genre: "Fable",
    synopsis: "Nagkaroon ng pagtatalo ang araw at ulap kung sino ang mas mahalaga.",
    chapter: "Magkaibang Kakayahan",
    content: "Ipinagyabang ng araw ang liwanag nito. Sinabi naman ng ulap na kaya nitong magdala ng ulan. Nang matuyo ang mga halaman, nagbigay ng ulan ang ulap at muling pinainit ng araw ang lupa. Namulaklak ang hardin. Napagtanto nilang parehong mahalaga ang kanilang mga kakayahan."
  },
  {
    title: "Ang Batang Mahilig Magbasa",
    author: "Kids Story",
    genre: "School Story",
    synopsis: "Natutuklasan ni Ella ang mga bagong mundo sa pagbabasa.",
    chapter: "Ang Aklat sa Silid-Aklatan",
    content: "Tuwing recess, pumupunta si Ella sa silid-aklatan. Isang araw, nakakita siya ng aklat tungkol sa mga planeta. Marami siyang natutuhan at ibinahagi niya ito sa kaniyang mga kaklase. Naging interesado rin silang magbasa. Natutuhan ni Ella na ang mga aklat ay puno ng kaalaman at imahinasyon."
  },
  {
    title: "Ang Munting Palaka",
    author: "Kids Story",
    genre: "Animal Story",
    synopsis: "Hinahanap ng isang palaka ang pinakamagandang lawa.",
    chapter: "Ang Bagong Tahanan",
    content: "Umalis si Pilo sa kaniyang maliit na lawa upang humanap ng mas magandang tahanan. Nakakita siya ng malaking lawa ngunit marumi ang tubig. Sa huli, bumalik siya sa dati niyang lawa at tumulong maglinis nito kasama ang mga kaibigan. Natutuhan niyang mahalin at alagaan ang tahanan."
  },
  {
    title: "Ang Batang Hindi Sumuko",
    author: "Kids Story",
    genre: "Inspiration",
    synopsis: "Patuloy na nagsanay si Marco upang matutong sumakay ng bisikleta.",
    chapter: "Kaya Ko Ito",
    content: "Ilang beses natumba si Marco habang nag-aaral magbisikleta. Gusto na niyang sumuko, ngunit hinikayat siya ng kaniyang ama. Araw-araw siyang nagsanay hanggang sa makapagbisikleta siya nang mag-isa. Masayang-masaya siya. Natutuhan niyang ang pagkakamali ay bahagi ng pagkatuto."
  },
  {
    title: "Ang Maya at ang Ulan",
    author: "Kids Story",
    genre: "Animal Story",
    synopsis: "Nakahanap ang isang maya ng ligtas na silungan para sa kaniyang mga kaibigan.",
    chapter: "Silungan sa Puno",
    content: "Biglang bumuhos ang malakas na ulan. Naghahanap ng masisilungan ang mga ibon. Nakakita si Maya ng malaking punong may makapal na mga sanga. Tinawag niya ang kaniyang mga kaibigan upang sumilong. Ligtas silang naghintay hanggang humina ang ulan. Natutuhan nilang mahalagang magmalasakit sa isa't isa."
  },
  {
    title: "Ang Munting Bayani",
    author: "Kids Story",
    genre: "Adventure",
    synopsis: "Tinulungan ng isang bata ang kapitbahay na nawalan ng mga gamit.",
    chapter: "Tulong ni Jun",
    content: "Habang naglalaro, napansin ni Jun na nahulog ang mga pinamili ng kaniyang matandang kapitbahay. Agad niya itong tinulungan na pulutin at dalhin ang mga gamit sa bahay. Nagpasalamat ang matanda at binigyan siya ng isang ngiti. Nalaman ni Jun na hindi kailangang maging malakas upang maging bayani."
  },
  {
    title: "Ang Bituin sa Banga",
    author: "Kids Story",
    genre: "Fantasy",
    synopsis: "May nakita si Lila na kumikislap na liwanag sa lumang banga.",
    chapter: "Ang Munting Liwanag",
    content: "Habang naglilinis, nakita ni Lila ang isang lumang banga na kumikislap. Sa loob nito ay may maliit na batong kumikinang. Ipinakita niya ito sa kaniyang lola, na nagsabing ang tunay na liwanag ay nagmumula rin sa mabuting puso. Inilagay ni Lila ang banga sa hardin upang magbigay ng saya sa lahat."
  },
  {
    title: "Ang Magkaibigang Oso",
    author: "Kids Story",
    genre: "Animal Story",
    synopsis: "Nag-away ang dalawang oso ngunit natutong magpatawad.",
    chapter: "Ang Pagkakaibigan",
    content: "Nag-away sina Berto at Bruno dahil sa isang basket ng berries. Hindi sila nag-usap buong araw. Nang madulas si Berto sa tabi ng sapa, agad siyang tinulungan ni Bruno. Humingi sila ng tawad sa isa't isa at pinagsaluhan ang berries. Natutuhan nilang mas mahalaga ang pagkakaibigan kaysa sa pagkain."
  },
  {
    title: "Ang Malinis na Ilog",
    author: "Kids Story",
    genre: "Environment",
    synopsis: "Nagtulungan ang mga bata upang linisin ang kanilang ilog.",
    chapter: "Bayanihan sa Barangay",
    content: "Napansin ng mga bata na maraming basura sa kanilang ilog. Nagpaalam sila sa mga magulang at nag-organisa ng paglilinis kasama ang mga nakatatanda. Pinulot nila ang mga kalat at naglagay ng mga basurahan sa paligid. Muling naging malinis ang ilog. Natutuhan nilang responsibilidad ng lahat ang pangangalaga sa kalikasan."
  },
  {
    title: "Ang Tapat na Pastol",
    author: "Kids Story",
    genre: "Fable",
    synopsis: "Natutuhan ng isang pastol na mahalaga ang pagsasabi ng totoo.",
    chapter: "Ang Aral ni Tomas",
    content: "Madalas magbiro si Tomas na may lobo sa burol kahit wala naman. Isang araw, totoong may lobo na lumapit sa mga tupa. Sumigaw siya para humingi ng tulong, at agad dumating ang mga tagabaryo. Pagkatapos nito, humingi siya ng tawad sa kaniyang mga dating biro. Natutuhan niyang mahalaga ang katapatan."
  },
  {
    title: "Ang Sapatos na Lumilipad",
    author: "Kids Story",
    genre: "Fantasy",
    synopsis: "Nakatuklas si Pio ng sapatos na kayang lumipad.",
    chapter: "Paglalakbay sa Ulap",
    content: "Isinuot ni Pio ang lumang sapatos na nakita niya sa aparador. Bigla siyang umangat at lumipad sa ibabaw ng mga ulap. Nakita niya ang magagandang bundok at ilog. Ngunit bumalik siya bago dumilim upang hindi mag-alala ang kaniyang pamilya. Natutuhan niyang ang bawat pakikipagsapalaran ay may kasamang responsibilidad."
  },
  {
    title: "Ang Huling Piraso ng Keyk",
    author: "Kids Story",
    genre: "Family",
    synopsis: "Pinili ni Nena na ibahagi ang huling piraso ng keyk.",
    chapter: "Mas Masaya Kapag Nagbabahagi",
    content: "May isang piraso na lamang ng keyk sa mesa. Parehong gusto ito nina Nena at ng kaniyang kapatid. Naisip ni Nena na hatiin nila ito sa dalawa. Sabay silang kumain at nagtawanan. Natutuhan niyang mas masarap ang pagkain kapag ibinabahagi sa mahal sa buhay."
  },
  {
    title: "Ang Munting Pagong sa Dalampasigan",
    author: "Kids Story",
    genre: "Animal Story",
    synopsis: "Naghahanap ng ligtas na daan pauwi ang isang batang pagong.",
    chapter: "Pabalik sa Dagat",
    content: "Kagagaling lamang ni Timo sa kaniyang pugad nang maligaw siya sa dalampasigan. Nakakita siya ng mga bakas sa buhangin at sinundan ang mga ito patungo sa dagat. Tinulungan siya ng isang alimango na umiwas sa mga bato. Sa wakas, nakarating siya sa tubig. Natutuhan niyang mahalagang mag-ingat at tumanggap ng tulong."
  },
  {
    title: "Ang Regalo ng Kaibigan",
    author: "Kids Story",
    genre: "Friendship",
    synopsis: "Gumawa si Sara ng simpleng regalo para sa kaniyang kaibigan.",
    chapter: "Ang Gawang-Kamay",
    content: "Malapit na ang kaarawan ni Mina, ngunit walang pambili ng regalo si Sara. Gumawa siya ng kard at iginuhit ang kanilang masasayang alaala. Labis na natuwa si Mina dahil alam niyang pinag-isipan ito. Nalaman ni Sara na hindi kailangang mahal ang regalo upang maipakita ang tunay na pagmamahal."
  }
];

const grid = document.getElementById("bookGrid");
const search = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

function showBooks(query = "") {
  const filtered = stories.filter(story =>
    (story.title + " " + story.author + " " + story.genre)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  grid.innerHTML = filtered.map(story => {
    const id = stories.indexOf(story) + 1;

    return `
      <article class="book-card">
        <img class="cover"
          src="images/cover${String(id).padStart(2, "0")}.jpg"
          alt="Book cover for ${story.title}"
          onerror="this.style.display='none'">

        <div class="book-info">
          <span class="genre">${story.genre}</span>
          <h3>${story.title}</h3>
          <p class="author">By ${story.author}</p>
          <p class="synopsis">${story.synopsis}</p>

          <div class="card-actions">
            <button class="read-btn" data-read="${id - 1}">
              Read Story
            </button>
            <button class="like-btn" data-like="${id - 1}">
              ♡
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  noResults.hidden = filtered.length !== 0;
}

showBooks();

search.addEventListener("input", () => {
  showBooks(search.value);
});


grid.addEventListener("click", event => {
  const readButton = event.target.closest("[data-read]");
  const likeButton = event.target.closest("[data-like]");

  if (readButton) {
    const story = stories[Number(readButton.dataset.read)];

    if (!story) return;

    document.querySelector("main").innerHTML = `
      <section class="about">
        <button id="backBtn" class="read-btn">
          ← Back to Library
        </button>
        <h1>${story.title}</h1>
        <p>By ${story.author}</p>
        <h3>${story.chapter}</h3>
        <p id="storyContent"></p>
      </section>
    `;

    document.getElementById("storyContent").textContent =
      story.content;

    document.getElementById("backBtn").onclick = () => {
      location.reload();
    };
  }

  if (likeButton) {
    likeButton.classList.toggle("liked");
    likeButton.textContent =
      likeButton.classList.contains("liked") ? "♥" : "♡";
  }
});


const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "Light Mode";
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  });
}


if (themeBtn) {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "Light Mode";
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  });
}
