import { useEffect, useState } from "react";
import "./App.css";
import bitesLogo from './logo.png';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { MultiSelect } from "react-multi-select-component";

const App=()=> {
const [inputs, setInputs] = useState({
    AdSoyad: '',
    date: '',
    ogrenimdurumu:'',
    cinsiyet: '',
    medenidurum:'',
    mail: '',
    phone: '',
    universite: '',
    bolum: '',
    universiteler:'',
    universitebolum:'',
    pozisyon: '',
    languages: [],
    yetenek: '',
    referans: '',
    basarı: '',
    hobi: '',
    dil: '',
    dil2: '',
    dil3: '',
    dil4: '',
    dil5: '',
    dil6: '',
    dil7: '',
    dil8: '',
    dil9: '',
    dil10:'',
    dil11:'',
    dil12:'',
    dil13:'',
    dil14:'',
    dil15:'',
    dil16:'',
    yabancıdilek:'',
 bilgisayarbilgisiek:'',
  });
  const options = [
    { label: "Almanca", value: "Almanca" },
    { label: "Arapça", value: "Arapça" },
    { label: "Arnavutça", value: "Arnavutça" },
    { label: "Azerice", value: "Azerice" },
    { label: "Bengalce", value: "Bengalce" },
    { label: "Boşnakça", value: "Boşnakça" },
    { label: "Bulgarca", value: "Bulgarca" },
    { label: "Çekce", value: "Çekce" },
    { label: "Çince", value: "Çince" },
    { label: "Ermenice ", value: "Ermenice" },
    { label: "Farsça", value: "Farsça" },
    { label: "Felemenkçe", value: "Felemenkce" },
    { label: "Filipince", value: "Filipince" },
    { label: "Fince", value: "Fince" },
    { label: "Fransızca ", value: "Fransızca" },
    { label: "Hırvatça", value: "Hırvatça" },
    { label: "Hintçe", value: "Hintçe" },
    { label: "İbranice", value: "İbranice" },
    { label: "İngilizce", value: "İngilizce" },
    { label: "İspanyolca ", value: "İspanyolca" },
    { label: "İtalyanca", value: "İtalyanca" },
    { label: "Japonca ", value: "Japonca" },
    { label: "Korece", value: "Korece" },
    { label: "Kürtçe", value: "Kürtçe" },
    { label: "Macarca", value: "Macarca" },
    { label: "Moğolca", value: "Moğolca" },
    { label: "Özbekçe ", value: "Özbekçe" },
    { label: "Sırpça", value: "Sırpça" },
    { label: "Türkçe", value: "Türkçe" },
    { label: "Venedikçe", value: "Venedikçe" },
    { label: "Vietnamca ", value: "Vietnamca" },
    { label: "Hiçbiri", value: "Hiçbiri"},
  ];

    const [selected, setSelected] = useState([]);


  useEffect(() => {
    setInputs({...inputs,languages:selected})
  },[selected]);
  

  const handleChange = (key, value) => {
    //console.log(event.target.value);
    // const name = event.target.name;
    // const value = event.target.value;
    //setInputs((values) => ({ ...values, [name]: value }));
    setInputs({ ...inputs, [key]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };



  return (
    
    <div className="page_container">

        <img src={bitesLogo} width="150px" />

        <div className="form_section">
          <form onSubmit={handleSubmit} className="form_container">

            {/*<div className="form-wrapper">
        <label className="form-label">Başlık</label>
        <input className="form-input" />
  </div> */}
            <label className="form-üstbaşlık"> KİŞİSEL BİLGİLER </label>

       {/*<legend>
            <h3> Kişisel-Bilgiler </h3>
          </legend>
       <br />*/}

               <div className="form-wrapper">
                <label className="form-label">AdSoyad:</label>
                {/* <h5> Ad - Soyad </h5> */}
                <input className="form-input"
                type="text"
                value={inputs.AdSoyad}
                onChange={(e) => { handleChange('AdSoyad', e.target.value); } } />
                </div>



        {/*<div className="form-wrapper">
        <label className="form-label">Soyadınız:</label>
        <input className="form-input"
        type="text"
        value={inputs.Soyadınız}
        onchange={(e)=>{handleChange('Soyadınız',e.target.value)}}
        />
        </div>*/}

        {/* {<div className="form-wrapper">
        <label className="form-label"> T.C Numarası:</label>
        <input className="form-input-number"
        type="number"
        step="1" min="0" 
        value={inputs.tc}
        onChange={(e) => { handleChange('tc', e.target.value); } } />
        </div>} */}

            <div className="form-wrapper">
              <label className="form-label"> Doğum Tarihi: </label>
              {/*<h5>Doğum Tarihi: </h5>*/}
              <input className="form-input-date"
                type="date"
                value={inputs.date}
                onChange={(e) => { handleChange('date', e.target.value); } } />
              </div>

            <div className="form-wrapper">
              <label className="form-label"> Cinsiyet:</label>
              {/*<h5>Cinsiyet: </h5>*/}
              <select className="form-input-select"
                value={inputs.cinsiyet}
                onChange={(e) => { handleChange('cinsiyet', e.target.value); } }>
                <option value="  ">   </option>
                <option value="erkek">erkek</option>
                <option value="kadın">Kadın</option>
                </select>
                 </div>



            <div className="checkbox-wrapper">
            <label className="form-label"> Medeni Durum:</label>
            <input className="my-checkbox" type="checkbox" onChange={(e) => { handleChange('medenidurum', e.target.value); } } value="evli" />
            <label className="my-label">evli</label>

            <input className="my-checkbox" type="checkbox" onChange={(e) => { handleChange('medenidurum', e.target.value); } } value="bekar" />
            <label className="my-label">bekar</label>
            </div>

          

            <label className="form-üstbaşlık"> İLETİŞİM BİLGİLERİ </label>

            {/*<legend>
            <h3>İletişim Bilgileri</h3>
   </legend>*/}
 <div className="form-wrapper">
              <label className="form-label">E-posta:</label>
              {/* <h5>Email:</h5>*/}
              <input className="form-input"
                type="email"
                value={inputs.mail}
                onChange={(e) => handleChange('mail', e.target.value)} />
            </div>

           {/* <div>
              <PhoneInput
                country={'us'}
                value={this.state.phone}
                onChange={phone => this.setState({ phone })}
          />
          </div> */}

            <div className="form-wrapper">
              <label className="form-label">Telefon Numarası:</label>
              <PhoneInput className=""
             country={'tr'}
             value={inputs.phone}
             onChange={(e) => handleChange('phone', e)}
              />
            </div>
                 {/* <label className="form-üstbaşlık"> ÖĞRENİM DURUMU</label>
                 <div className="form-wrapper">
                 <select className="form-input-select"
                 value={inputs.ogrenimdurumu}
                 onChange={(e) => handleChange('ogrenimdurumu', e.target.value)}>
                 <option value=" ">   </option>
                 <option value="yüksek lisans">yüksek lisans</option>
                 <option value="lisans">lisans</option>
                 <option value="ön lisans">ön lisans</option>
                 <option value="lise">lise</option>
                 </select>
                 </div> */}
            




            {/* <label className="form-üstbaşlık"> ÖĞRENİM DURUMU</label>
            <div className="form-wrapper">
              <label className="form-label">Üniversite:</label>
              <input className="form-input"
                type="text"
                value={inputs.universite}
                onChange={(e) => handleChange('universite', e.target.value)} />
            </div> */}


            {/* <div className="form-wrapper">
              <label className="form-label">Bölüm:</label>
              <input className="form-input"
                type="text"
                value={inputs.bolum}
                onChange={(e) => handleChange('bolum', e.target.value)} />

            </div>   */}

   <label className="form-üstbaşlık"> ÖĞRENİM DURUMU</label>
   <label className="form-label">Üniversite:</label>
   <div className="form-wrapper">
   <select className="form-input-select"
   value={inputs.universiteler}
   onChange={(e) => handleChange('universiteler', e.target.value)}>


  <option value=" ">   </option>
  <option value="ABDULLAH GÜL ÜNİVERSİTESİ">ABDULLAH GÜL ÜNİVERSİTESİ</option>
  <option value="ACIBADEM MEHMET ALİ AYDINLAR ÜNİVERSİTESİ ">ACIBADEM MEHMET ALİ AYDINLAR ÜNİVERSİTESİ   </option>
  <option value="ADANA ALPARSLAN TÜRKEŞ BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ "> ADANA ALPARSLAN TÜRKEŞ BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ  </option>
  <option value="ADIYAMAN ÜNİVERSİTESİ "> ADIYAMAN ÜNİVERSİTESİ  </option>
  <option value="AFYON KOCATEPE ÜNİVERSİTESİ"> AFYON KOCATEPE ÜNİVERSİTESİ  </option>
  <option value="AFYONKARAHİSAR SAĞLIK BİLİMLERİ ÜNİVERSİTESİ">  AFYONKARAHİSAR SAĞLIK BİLİMLERİ ÜNİVERSİTESİ </option>
  <option value="AĞRI İBRAHİM ÇEÇEN ÜNİVERSİTESİ"> AĞRI İBRAHİM ÇEÇEN ÜNİVERSİTESİ  </option>
  <option value="AKDENİZ ÜNİVERSİTESİ">AKDENİZ  ÜNİVERSİTESİ</option>
  <option value="AKSARAY ÜNİVERSİTESİ">AKSARAY ÜNİVERSİTESİ</option>
  <option value="ALANYA ALAADDİN KEYKUBAT ÜNİVERSİTESİ ">ALANYA ALAADDİN KEYKUBAT ÜNİVERSİTESİ</option>
  <option value="ALANYA HAMDULLAH EMİN PAŞA ÜNİVERSİTESİ ">ALANYA HAMDULLAH EMİN PAŞA ÜNİVERSİTESİ </option>
  <option value="ALTINBAŞ ÜNİVERSİTESİ">ALTINBAŞ ÜNİVERSİTESİ</option>
  <option value="AMASYA ÜNİVERSİTESİ">AMASYA ÜNİVERSİTESİ</option>
  <option value="ANADOLU ÜNİVERSİTESİ ">ANADOLU ÜNİVERSİTESİ</option>
  <option value="ANKA TEKNOLOJİ ÜNİVERSİTESİ">ANKA TEKNOLOJİ ÜNİVERSİTESİ</option>
  <option value="ANKARA BİLİM ÜNİVERSİTESİ">ANKARA BİLİM ÜNİVERSİTESİ</option>
  <option value="ANKARA HACI BAYRAM VELİ ÜNİVERSİTESİ">ANKARA HACI BAYRAM VELİ ÜNİVERSİTESİ</option>
  <option value="ANKARA MEDİPOL ÜNİVERSİTESİ"> ANKARA MEDİPOL ÜNİVERSİTESİ </option>
  <option value="ANKARA MÜZİK VE GÜZEL SANATLAR ÜNİVERSİTESİ ">ANKARA MÜZİK VE GÜZEL SANATLAR ÜNİVERSİTESİ  </option>
  <option value="ANKARA SOSYAL BİLİMLER ÜNİVERSİTESİ"> ANKARA SOSYAL BİLİMLER ÜNİVERSİTESİ </option>
  <option value=" ANKARA ÜNİVERSİTESİ">ANKARA ÜNİVERSİTESİ</option>
  <option value="ANKARA YILDIRIM BEYAZIT ÜNİVERSİTESİ ">ANKARA YILDIRIM BEYAZIT ÜNİVERSİTESİ </option>
  <option value="ANTALYA AKEV ÜNİVERSİTESİ"> ANTALYA AKEV ÜNİVERSİTESİ </option>
  <option value="ANTALYA BİLİM ÜNİVERSİTESİ "> ANTALYA BİLİM ÜNİVERSİTESİ </option>
  <option value="ARDAHAN ÜNİVERSİTESİ "> ARDAHAN ÜNİVERSİTESİ  </option>
  <option value=" ARTVİN ÇORUH ÜNİVERSİTESİ"> ARTVİN ÇORUH ÜNİVERSİTESİ  </option>
  <option value=" ATATÜRK ÜNİVERSİTESİ">  ATATÜRK ÜNİVERSİTESİ </option>
  <option value="ATILIM ÜNİVERSİTESİ "> ATILIM ÜNİVERSİTESİ  </option>
  <option value=" AVRASYA ÜNİVERSİTESİ"> AVRASYA ÜNİVERSİTESİ </option>
  <option value="AYDIN ADNAN MENDERES ÜNİVERSİTESİ"> AYDIN ADNAN MENDERES ÜNİVERSİTESİ </option>
  <option value="BAHÇEŞEHİR ÜNİVERSİTESİ "> BAHÇEŞEHİR ÜNİVERSİTESİ </option>
  <option value="BALIKESİR ÜNİVERSİTESİ"> BALIKESİR ÜNİVERSİTESİ</option>
  <option value="	BANDIRMA ONYEDİ EYLÜL ÜNİVERSİTESİ 	">BANDIRMA ONYEDİ EYLÜL ÜNİVERSİTESİ 		  </option>
  <option value="BARTIN ÜNİVERSİTESİ "> BARTIN ÜNİVERSİTESİ  </option>
  <option value=" BAŞKENT ÜNİVERSİTESİ"> BAŞKENT ÜNİVERSİTESİ  </option>
  <option value=" BATMAN ÜNİVERSİTESİ">  BATMAN ÜNİVERSİTESİ  </option>
  <option value=" BAYBURT ÜNİVERSİTESİ">BAYBURT ÜNİVERSİTESİ   </option>
  <option value="BEYKENT ÜNİVERSİTESİ "> BEYKENT ÜNİVERSİTESİ   </option>
  <option value="BEYKOZ ÜNİVERSİTESİ ">BEYKOZ ÜNİVERSİTESİ   </option>
  <option value="BİLECİK ŞEYH EDEBALİ ÜNİVERSİTESİ "> BİLECİK ŞEYH EDEBALİ ÜNİVERSİTESİ   </option>
  <option value="BİNGÖL ÜNİVERSİTESİ ">BİNGÖL ÜNİVERSİTESİ    </option>
  <option value=" BİRUNİ ÜNİVERTESİ">  BİRUNİ ÜNİVERTESİ  </option>
  <option value="BİTLİS EREN ÜNİVERSİTESİ "> BİTLİS EREN ÜNİVERSİTESİ  </option>
  <option value="BOĞAZİÇİ ÜNİVERSİTESİ ">BOĞAZİÇİ ÜNİVERSİTESİ    </option>
  <option value="BOLU ABANT İZZET BAYSAL ÜNİVERSİTESİ">BOLU ABANT İZZET BAYSAL ÜNİVERSİTESİ  </option>
  <option value="BURDUR MEHMET AKİF ERSOY ÜNİVERSİTESİ"> BURDUR MEHMET AKİF ERSOY ÜNİVERSİTESİ  </option>
  <option value="BURSA TEKNİK ÜNİVERSİTESİ "> BURSA TEKNİK ÜNİVERSİTESİ  </option>
  <option value="BURSA ULUDAĞ ÜNİVERSİTESİ "> BURSA ULUDAĞ ÜNİVERSİTESİ </option>
  <option value="ÇAĞ  ÜNİVERSİTESİ"> ÇAĞ  ÜNİVERSİTESİ  </option>
  <option value="ÇANAKKALE ONSEKİZ MART ÜNİVERSİTESİ ">  ÇANAKKALE ONSEKİZ MART ÜNİVERSİTESİ </option>
  <option value="ÇANKAYA  ÜNİVERSİTESİ  ">  ÇANKAYA  ÜNİVERSİTESİ    </option>
  <option value="ÇANKIRI KARATEKİN ÜNİVERSİTESİ"> ÇANKIRI KARATEKİN ÜNİVERSİTESİ </option>
  <option value="ÇUKUROVA  ÜNİVERSİTESİ "> ÇUKUROVA ÜNİVERSİTESİ </option>
  <option value=" DEMİROĞLU BİLİM ÜNİVERSİTESİ "> DEMİROĞLU BİLİM ÜNİVERSİTESİ </option>
  <option value="DİCLE  ÜNİVERSİTESİ "> DİCLE  ÜNİVERSİTESİ </option>
  <option value=" DOĞUŞ  ÜNİVERSİTESİ "> DOĞUŞ  ÜNİVERSİTESİ </option>
  <option value=" DOKUZ EYLÜL ÜNİVERSİTESİ ">DOKUZ EYLÜL ÜNİVERSİTESİ   </option>
  <option value=" DÜZCE ÜNİVERSİTESİ "> DÜZCE ÜNİVERSİTESİ  </option>
  <option value=" EGE ÜNİVERSİTESİ  "> EGE ÜNİVERSİTESİ  </option>
  <option value=" ERCİYES  ÜNİVERSİTESİ  "> ERCİYES  ÜNİVERSİTESİ </option>
  <option value=" ERZİNCAN BİNALİ YILDIRIM ÜNİVERSİTESİ"> ERZİNCAN BİNALİ YILDIRIM ÜNİVERSİTESİ  </option>
  <option value=" ERZURUM TEKNİK ÜNİVERSİTESİ"> ERZURUM TEKNİK ÜNİVERSİTESİ  </option>
  <option value="ESKİŞEHİR OSMANGAZİ ÜNİVERSİTESİ"> ESKİŞEHİR OSMANGAZİ ÜNİVERSİTESİ</option>
  <option value=" ESKİŞEHİR TEKNİK  ÜNİVERSİTESİ "> ESKİŞEHİR TEKNİK  ÜNİVERSİTESİ  </option>
  <option value=" FATİH SULTAN MEHMET VAKIF ÜNİVERSİTESİ "> FATİH SULTAN MEHMET VAKIF ÜNİVERSİTESİ   </option>
  <option value=" FENERBAHÇE  ÜNİVERSİTESİ  "> FENERBAHÇE  ÜNİVERSİTESİ  </option>
  <option value="  FIRAT ÜNİVERSİTESİ">FIRAT ÜNİVERSİTESİ   </option>
  <option value=" GALATASARAY  ÜNİVERSİTESİ"> GALATASARAY  ÜNİVERSİTESİ  </option>
  <option value=" GAZİ ÜNİVERSİTESİ "> GAZİ ÜNİVERSİTESİ  </option>
  <option value=" GAZİANTEP İSLAM BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ  "> GAZİANTEP İSLAM BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ  </option>
  <option value=" GAZİANTEP ÜNİVERSİTESİ "> GAZİANTEP ÜNİVERSİTESİ  </option>
  <option value=" GEBZE TEKNİK ÜNİVERSİTESİ"> GEBZE TEKNİK ÜNİVERSİTESİ  </option>
  <option value=" GİRESUN ÜNİVERSİTESİ"> GİRESUN ÜNİVERSİTESİ </option>
  <option value=" GÜMÜŞHANE ÜNİVERSİTESİ">GÜMÜŞHANE ÜNİVERSİTESİ </option>
  <option value="HACETTEPE ÜNİVERSİTESİ ">HACETTEPE ÜNİVERSİTESİ   </option>
  <option value="HAKKARİ ÜNİVERSİTESİ "> HAKKARİ ÜNİVERSİTESİ   </option>
  <option value="HALİÇ ÜNİVERSİTESİ">HALİÇ ÜNİVERSİTESİ  </option>
  <option value="HARRAN ÜNİVERSİTESİ">HARRAN ÜNİVERSİTESİ  </option>
  <option value="HATAY MUSTAFA KEMAL ÜNİVERSİTESİ">HATAY MUSTAFA KEMAL ÜNİVERSİTESİ </option>
  <option value="HİTİT ÜNİVERSİTESİ "> HİTİT ÜNİVERSİTESİ  </option>
  <option value=" IĞDIR ÜNİVERSİTESİ"> IĞDIR ÜNİVERSİTESİ  </option>
  <option value=" ISPARTA UYGULAMALI BİLİMLER ÜNİVERSİTESİ"> ISPARTA UYGULAMALI BİLİMLER ÜNİVERSİTESİ  </option>
  <option value="IŞIK ÜNİVERSİTESİ "> IŞIK ÜNİVERSİTESİ  </option>
  <option value="İBN HALDUN ÜNİVERSİTESİ ">İBN HALDUN ÜNİVERSİTESİ</option>
  <option value="İHSAN DOĞRAMACI BİLKENT ÜNİVERSİTESİ "> İHSAN DOĞRAMACI BİLKENT ÜNİVERSİTESİ </option>
  <option value=" İNÖNÜ ÜNİVERSİTESİ"> İNÖNÜ ÜNİVERSİTESİ  </option>
  <option value="İSKENDERUN TEKNİK ÜNİVERSİTESİ ">  İSKENDERUN TEKNİK ÜNİVERSİTESİ  </option>
  <option value="İSTANBUL AREL ÜNİVERSİTESİ "> İSTANBUL AREL ÜNİVERSİTESİ  </option>
  <option value=" İSTANBUL ATLAS ÜNİVERSİTESİ ">İSTANBUL ATLAS ÜNİVERSİTESİ    </option>
  <option value="İSTANBUL AYDIN ÜNİVERSİTESİ "> İSTANBUL AYDIN ÜNİVERSİTESİ  </option>
  <option value="İSTANBUL BİLGİ ÜNİVERSİTESİ ">  İSTANBUL BİLGİ ÜNİVERSİTESİ </option>
  <option value="İSTANBUL ESENYURT ÜNİVERSİTESİ">İSTANBUL ESENYURT ÜNİVERSİTESİ  </option>
  <option value="İSTANBUL GALATA ÜNİVERSİTESİ "> İSTANBUL GALATA ÜNİVERSİTESİ  </option>
  <option value="İSTANBUL GEDİK ÜNİVERSİTESİ ">  İSTANBUL GEDİK ÜNİVERSİTESİ </option>
  <option value="İSTANBUL GELİŞİM ÜNİVERSİTESİ ">İSTANBUL GELİŞİM ÜNİVERSİTESİ </option>
  <option value="İSTANBUL KENT ÜNİVERSİTESİ "> İSTANBUL KENT  ÜNİVERSİTESİ </option>
  <option value=" İSTANBUL KÜLTÜR ÜNİVERSİTESİ"> İSTANBUL KÜLTÜR ÜNİVERSİTESİ  </option>
  <option value=" İSTANBUL MEDENİYET ÜNİVERSİTESİ"> İSTANBUL MEDENİYET ÜNİVERSİTESİ </option>
  <option value=" İSTANBUL MEDİPOL  ÜNİVERSİTESİ">  İSTANBUL MEDİPOL ÜNİVERSİTESİ </option>
  <option value=" İSTANBUL OKAN ÜNİVERSİTESİ  "> İSTANBUL OKAN ÜNİVERSİTESİ  </option>
  <option value="İSTANBUL RUMELİ ÜNİVERSİTESİ ">  İSTANBUL RUMELİ ÜNİVERSİTESİ </option>
  <option value="İSTANBUL SABAHATTİN ZAİM ÜNİVERSİTESİ "> İSTANBUL SABAHATTİN ZAİM ÜNİVERSİTESİ  </option>
  <option value="İSTANBUL SAĞLIK VE TEKNOLOJİ ÜNİVERSİTESİ ">İSTANBUL SAĞLIK VE TEKNOLOJİ ÜNİVERSİTESİ    </option>
  <option value="İSTANBUL TEKNİK ÜNİVERSİTESİ "> İSTANBUL TEKNİK ÜNİVERSİTESİ  </option>
  <option value="İSTANBUL TİCARET ÜNİVERSİTESİ ">İSTANBUL TİCARET ÜNİVERSİTESİ   </option>
  <option value="İSTANBUL TOPKAPI ÜNİVERSİTESİ "> İSTANBUL TOPKAPI ÜNİVERSİTESİ  </option>
  <option value="İSTANBUL ÜNİVERSİTESİ ">İSTANBUL ÜNİVERSİTESİ   </option>
  <option value="İSTANBUL ÜNİVERSİTESİ-CERRAHPAŞA ">İSTANBUL ÜNİVERSİTESİ-CERRAHPAŞA  </option>
  <option value="İSTANBUL YENİ YÜZYIL ÜNİVERSİTESİ "> İSTANBUL YENİ YÜZYIL ÜNİVERSİTESİ  </option>
  <option value="İSTANBUL 29 MAYIS ÜNİVERSİTESİ "> İSTANBUL 29 MAYIS ÜNİVERSİTESİ  </option>
  <option value=" İSTİNYE ÜNİVERSİTESİ">  İSTİNYE ÜNİVERSİTESİ  </option>
  <option value="İZMİR BAKIRÇAY ÜNİVERSİTESİ "> İZMİR BAKIRÇAY ÜNİVERSİTESİ  </option>
  <option value="İZMİR DEMOKRASİ ÜNİVERSİTESİ "> İZMİR DEMOKRASİ ÜNİVERSİTESİ  </option>
  <option value="İZMİR EKONOMİ ÜNİVERSİTESİ "> İZMİR EKONOMİ ÜNİVERSİTESİ  </option>
  <option value="İZMİR KATİP ÇELEBİ ÜNİVERSİTESİ "> İZMİR KATİP ÇELEBİ ÜNİVERSİTESİ  </option>
  <option value="İZMİR TINAZTEPE ÜNİVERSİTESİ ">İZMİR TINAZTEPE ÜNİVERSİTESİ  </option>
  <option value="İZMİR YÜKSEK TEKNOLOJİ ENSTİTÜSÜ ">İZMİR YÜKSEK TEKNOLOJİ ENSTİTÜSÜ   </option>
  <option value=" KADİR HAS ÜNİVERSİTESİ">  KADİR HAS ÜNİVERSİTESİ </option>
  <option value="KAFKAS ÜNİVERSİTESİ "> KAFKAS ÜNİVERSİTESİ   </option>
  <option value="KAHRAMANMARAŞ İSTİKLAL ÜNİVERSİTESİ "> KAHRAMANMARAŞ İSTİKLAL ÜNİVERSİTESİ   </option>
  <option value="KAHRAMANMARAŞ SÜTÇÜ İMAM ÜNİVERSİTESİ "> KAHRAMANMARAŞ SÜTÇÜ İMAM ÜNİVERSİTESİ  </option>
  <option value="KAPADOKYA ÜNİVERSİTESİ">KAPADOKYA ÜNİVERSİTESİ   </option>
<option value=" KARABÜK ÜNİVERSİTESİ"> KARABÜK ÜNİVERSİTESİ  </option>
<option value="KARADENİZ TEKNİK ÜNİVERSİTESİ"> KARADENİZ TEKNİK ÜNİVERSİTESİ  </option>
<option value="KARAMANOĞLU MEHMETBEY ÜNİVERSİTESİ">KARAMANOĞLU MEHMETBEY  ÜNİVERSİTESİ  </option>
<option value="KASTAMONU  ÜNİVERSİTESİ"> KASTAMONU ÜNİVERSİTESİ  </option>
<option value="KAYSERİ ÜNİVERSİTESİ">KAYSERİ  ÜNİVERSİTESİ  </option>
<option value="KIRIKKALE ÜNİVERSİTESİ"> KIRIKKALE ÜNİVERSİTESİ  </option>
<option value="KIRKLARELİ ÜNİVERSİTESİ"> KIRKLARELİ ÜNİVERSİTESİ  </option>
<option value="KİLİS 7 ARALIK  ÜNİVERSİTESİ">KİLİS 7 ARALIK  ÜNİVERSİTESİ  </option>
<option value="KOCAELİ SAĞLIK VE TEKNOLOJİ  ÜNİVERSİTESİ">KOCAELİ SAĞLIK VE TEKNOLOJİ ÜNİVERSİTESİ  </option>
<option value="KOCAELİ  ÜNİVERSİTESİ">KOCAELİ  ÜNİVERSİTESİ  </option>
<option value="KOÇ ÜNİVERSİTESİ"> KOÇ ÜNİVERSİTESİ  </option>
<option value="KONYA GIDA VE TARIM ÜNİVERSİTESİ">KONYA GIDA VE TARIM ÜNİVERSİTESİ  </option>
<option value="KONYA TEKNİK  ÜNİVERSİTESİ"> KONYA TEKNİK  ÜNİVERSİTESİ  </option>
<option value="KTO KARATAY  ÜNİVERSİTESİ">   KTO KARATAY  ÜNİVERSİTESİ  </option>
<option value="KÜTAHYA DUMLIPINAR ÜNİVERSİTESİ"> KÜTAHYA DUMLUPINAR  ÜNİVERSİTESİ  </option>
<option value="KÜTAHYA SAĞLIK BİLİMLERİ ÜNİVERSİTESİ"> KÜTAHYA SAĞLIK BİLİMLERİ ÜNİVERSİTESİ  </option>
<option value="LOKMAN HEKİM ÜNİVERSİTESİ">LOKMAN HEKİM ÜNİVERSİTESİ  </option>
<option value="MALATYA TURGUT ÖZAL ÜNİVERSİTESİ">MALATYA TURGUT ÖZAL ÜNİVERSİTESİ  </option>
<option value="MALTEPE ÜNİVERSİTESİ"> MALTEPE ÜNİVERSİTESİ  </option>
<option value="MANİSA CELAL BAYAR ÜNİVERSİTESİ"> MANİSA CELAL BAYAR ÜNİVERSİTESİ  </option>
<option value="MARDİN ARTUKLU  ÜNİVERSİTESİ"> MARDİN ARTUKLU  ÜNİVERSİTESİ  </option>
<option value="MARMARA  ÜNİVERSİTESİ"> MARMARA   ÜNİVERSİTESİ  </option>
<option value="MEF ÜNİVERSİTESİ"> MEF ÜNİVERSİTESİ  </option>
<option value="MERSİN ÜNİVERSİTESİ">MERSİN  ÜNİVERSİTESİ </option>
<option value="MİMAR SİNAN GÜZEL SANATLAR ÜNİVERSİTESİ"> MİMAR SİNAN GÜZEL SANATLAR ÜNİVERSİTESİ </option>
<option value="MUDANYA ÜNİVERSİTESİ">MUDANYA ÜNİVERSİTESİ </option>
<option value="MUĞLA SITKI KOÇMAN ÜNİVERSİTESİ">MUĞLA SITKI KOÇMAN ÜNİVERSİTESİ</option>
<option value="MUNZUR ÜNİVERSİTESİ ">MUNZUR ÜNİVERSİTESİ   </option>
<option value=" MUŞ ALPARSLAN ÜNİVERSİTESİ "> MUŞ ALPARSLAN ÜNİVERSİTESİ</option>
<option value="NECMETTİN ERBAKAN ÜNİVERSİTESİ ">NECMETTİN ERBAKAN ÜNİVERSİTESİ</option>
<option value="NEVŞEHİR HACI BEKTAŞ VELİ ÜNİVERSİTESİ ">NEVŞEHİR HACI BEKTAŞ VELİ ÜNİVERSİTESİ</option>
<option value="NİĞDE ÖMER HALİSDEMİR ÜNİVERSİTESİ">NİĞDE ÖMER HALİSDEMİR ÜNİVERSİTESİ</option>
<option value="NİŞANTAŞI ÜNİVERSİTESİ ">NİŞANTAŞI ÜNİVERSİTESİ </option>
<option value="NUH NACİ YAZGAN ÜNİVERSİTESİ">NUH NACİ YAZGAN ÜNİVERSİTESİ</option>
<option value="ONDOKUZ MAYIS ÜNİVERSİTESİ "> ONDOKUZ MAYIS ÜNİVERSİTESİ  </option>
<option value="ORDU ÜNİVERSİTESİ"> ORDU ÜNİVERSİTESİ  </option>
<option value="ORTA DOĞU TEKNİK ÜNİVERSİTESİ">ORTA DOĞU TEKNİK ÜNİVERSİTESİ   </option>
<option value="OSMANİYE KORKUT ATA ÜNİVERSİTESİ ">OSMANİYE KORKUT ATA ÜNİVERSİTESİ   </option>
<option value="OSTİM TEKNİK ÜNİVERSİTESİ ">OSTİM TEKNİK ÜNİVERSİTESİ   </option>
<option value=" ÖZYEĞİN ÜNİVERSİTESİ">ÖZYEĞİN ÜNİVERSİTESİ </option>
<option value="PAMUKKALE ÜNİVERSİTESİ "> PAMUKKALE ÜNİVERSİTESİ  </option>
<option value="PİRİ REİS ÜNİVERSİTESİ "> PİRİ REİS ÜNİVERSİTESİ  </option>
<option value="RECEP  TAYYİP ERDOĞAN ÜNİVERSİTESİ "> RECEP TAYYİP ERDOĞAN ÜNİVERSİTESİ  </option>
<option value="SABANCI ÜNİVERSİTESİ "> SABANCI ÜNİVERSİTESİ  </option>
<option value="SAĞLIK BİLİMLERİ ÜNİVERSİTESİ ">  SAĞLIK BİLİMLERİ ÜNİVERSİTESİ </option>
<option value="SAKARYA UYGULAMALI BİLİMLER ÜNİVERSİTESİ "> SAKARYA UYGULAMALI BİLİMLER ÜNİVERSİTESİ  </option>
<option value="SAKARYA ÜNİVERSİTESİ "> SAKARYA ÜNİVERSİTESİ  </option>
<option value="SAMSUN ÜNİVERSİTESİ"> SAMSUN ÜNİVERSİTESİ  </option>
<option value="SANKO ÜNİVERSİTESİ">SANKO ÜNİVERSİTESİ   </option>
<option value="SELÇUK ÜNİVERSİTESİ "> SELÇUK ÜNİVERSİTESİ  </option>
<option value="SİİRT ÜNİVERSİTESİ "> SİİRT ÜNİVERSİTESİ  </option>
<option value="SİNOP ÜNİVERSİTESİ "> SİNOP ÜNİVERSİTESİ  </option>
<option value="SİVAS BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ"> SİVAS BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ  </option>
<option value="SİVAS CUMHURİYET ÜNİVERSİTESİ ">  SİVAS CUMHURİYET ÜNİVERSİTESİ </option>
<option value="SÜLEYMAN DEMİREL ÜNİVERSİTESİ ">SÜLEYMAN DEMİREL ÜNİVERSİTESİ   </option>
<option value="ŞIRNAK ÜNİVERSİTESİ "> ŞIRNAK ÜNİVERSİTESİ  </option>
<option value="TARSUS ÜNİVERSİTESİ "> TARSUS ÜNİVERSİTESİ  </option>
<option value="TED ÜNİVERSİTESİ "> TED ÜNİVERSİTESİ  </option>
<option value="TEKİRDAĞ NAMIK KEMAL ÜNİVERSİTESİ "> TEKİRDAĞ NAMIK KEMAL ÜNİVERSİTESİ  </option>
<option value="TOBB EKONOMİ VE TEKNOLOJİ ÜNİVERSİTESİ"> TOBB EKONOMİ VE TEKNOLOJİ ÜNİVERSİTESİ  </option>
<option value="TOKAT GAZİOSMANPAŞA ÜNİVERSİTESİ "> TOKAT GAZİOSMANPAŞA ÜNİVERSİTESİ  </option>
<option value=" TOROS ÜNİVERSİTESİ">TOROS ÜNİVERSİTESİ   </option>
<option value="TRABZON ÜNİVERSİTESİ ">TRABZON ÜNİVERSİTESİ </option>
<option value="TRAKYA ÜNİVERSİTESİ "> TRAKYA ÜNİVERSİTESİ  </option>
<option value="TÜRK HAVA KURUMU ÜNİVERSİTESİ ">TÜRK HAVA KURUMU ÜNİVERSİTESİ   </option>
<option value="TÜRK-ALMAN ÜNİVERSİTESİ "> TÜRK-ALMAN ÜNİVERSİTESİ  </option>
<option value="TÜRKİYE ULUSLARARASI İSLAM,BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ"> TÜRKİYE ULUSLARARASI İSLAM,BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ</option>
<option value="TÜRK-JAPON BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ "> TÜRK-JAPON BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ  </option>
<option value=" UFUK ÜNİVERSİTESİ">UFUK ÜNİVERSİTESİ   </option>
<option value=" UŞAK ÜNİVERSİTESİ">  UŞAK ÜNİVERSİTESİ </option>
<option value=" ÜSKÜDAR ÜNİVERSİTESİ">ÜSKÜDAR ÜNİVERSİTESİ   </option>
<option value="VAN YÜZÜNCÜ YIL ÜNİVERSİTESİ ">VAN YÜZÜNCÜ YIL ÜNİVERSİTESİ   </option>
<option value="YALOVA ÜNİVERSİTESİ "> YALOVA ÜNİVERSİTESİ  </option>
<option value="YAŞAR ÜNİVERSİTESİ "> YAŞAR ÜNİVERSİTESİ  </option>
<option value="YEDİTEPE ÜNİVERSİTESİ"> YEDİTEPE ÜNİVERSİTESİ  </option>
<option value=" YILDIZ TEKNİK ÜNİVERSİTESİ">YILDIZ TEKNİK ÜNİVERSİTESİ   </option>
<option value="YOZGAT BOZOK ÜNİVERSİTESİ ">YOZGAT BOZOK ÜNİVERSİTESİ   </option>
<option value="YÜKSEK İHTİSAS ÜNİVERSİTESİ "> YÜKSEK İHTİSAS ÜNİVERSİTESİ  </option>
<option value="ZONGULDAK BÜLENT ECEVİT ÜNİVERSİTESİ "> ZONGULDAK BÜLENT ECEVİT ÜNİVERSİTESİ </option>
 </select>
  </div>



                <div className="form-wrapper">
                <label className="form-label">Bölümü:</label>
                <select className="form-input-select"
                value={inputs.universitebolum}
                onChange={(e) => handleChange('universitebolum', e.target.value)}>
                <option value=" ">   </option>

                <option value="Acil Yardım ve Afet Yönetimi ">Acil Yardım ve Afet Yönetimi   </option>
                <option value="Adli Bilimler "> Adli Bilimler </option>
                <option value=" Adli Bilişim Mühendisliği ">Adli Bilişim Mühendisliği  </option>
                <option value=" Ağaç İşleri Endüstri Mühendisliği">Ağaç İşleri Endüstri Mühendisliği  </option>
                <option value="Aile ve Tüketici Bilimleri ">Aile ve Tüketici Bilimleri </option>
                <option value="Aktüerya Bilimleri "> Aktüerya Bilimleri</option>
                <option value=" Alman Dili ve Edebiyatı ">Alman Dili ve Edebiyatı  </option>
                <option value=" Almanca Mütercim ve Tercümanlık">Almanca Mütrcim ve Tercümanlık  </option>
                <option value="Almanca Öğretmenliği ">Almanca Öğretmenliği  </option>
                <option value=" Amerikan Kültürü ve Edebiyatı">Amerikan Kültürü ve Edebiyatı  </option>
                <option value="Arapça Mütercim ve Tercümanlık  ">  Arapça Mütercim ve Tercümanlık        </option>
                <option value="Astronomi ve Uzay Bilimleri "> Astronomi ve Uzay Bilimleri </option>
                <option value=" Bankacılık "> Bankacılık </option>
                <option value="Bankacılık ve Sigortacılık"> Bankacılık ve Sigortacılık </option>
                <option value="Basın ve Yayın ">Basın ve Yayın  </option>
                <option value="Bilgi Güvenliği Teknolojisi">Bilgi Güvenliği Teknolojisi   </option>
                <option value="Bilgisayar Bilimleri "> Bilgisayar Bilimleri  </option>
                <option value="Bilgisayar Mühendisliği "> Bilgisayar Mühendisliği  </option>
                <option value=" Bilgisayar Teknolojisi ve Bilişim Sistemleri">Bilgisayar Teknolojisi ve Bilişim Sistemleri </option>
                <option value=" Bilgisayar ve Öğretim Teknolojileri Öğretmenliği"> Bilgisayar ve Öğretim Teknolojileri Öğretmenliği  </option>
                <option value="Bilişim Sistemleri Mühendisliği "> Bilişim Sistemleri Mühendisliği  </option>
                <option value="Bilişim Sistemleri ve Teknolojileri "> Bilişim Sistemleri ve Teknolojileri  </option>
                <option value=" Biyomedikal Mühendisliği"> Biyomedikal Mühendisliği  </option>
                <option value=" Biyomühendislik"> Biyomühendislik  </option>
                <option value="Biyosistem Mühendisliği "> Biyosistem Mühendisliği </option>
                <option value=" Biyoteknoloji"> Biyoteknoloji  </option>
                <option value="Boşnak Dili ve Edebiyatı "> Boşnak Dili ve Edebiyatı  </option>
                <option value="Bulgar Dili ve Edebiyatı "> Bulgar Dili ve Edebiyatı  </option>
                <option value="Bulgarca Mütercim ve Tercümanlık "> Bulgarca Mütercim ve Tercümanlık  </option>
                <option value="Cevher Hazırlama Mühendisliği "> Cevher Hazırlama Mühendisliği  </option>
                <option value="Çalışma Ekonomisi ve Endüstri İlişkileri ">Çalışma Ekonomisi ve Endüstri İlişkileri   </option>
                <option value="Çevre Bilimi ">  Çevre Bilimi </option>
                <option value="Çevre Mühendisliği ">  Çevre Mühendisliği </option>
                <option value="Deniz Ulaştırma İşletme Mühendisliği "> Deniz Ulaştırma İşletme Mühendisliği  </option>
                <option value="Deri Mühendisliği "> Deri Mühendisliği  </option>
                 <option value="Dijital Oyun Tasarımı "> Dijital Oyun Tasarımı  </option>
                 <option value="Ekonometri "> Ekonometri  </option>
                 <option value=" Ekonomi">Ekonomi   </option>
                 <option value="Ekonomi ve Finans "> Ekonomi ve Finans  </option>
                 <option value="Elektrik Elektronik Mühendisliği "> Elektrik Elektronik Mühendisliği  </option>
                 <option value="Elektrik Mühendisliği "> Elektrik Mühendisliği  </option>
                  <option value="Elektronik ve Haberleşme Mühendisliği ">  Elektronik ve Haberleşme Mühendisliği </option>
                  <option value="Endüstri Mühendisliği "> Endüstri Mühendisliği  </option>
                  <option value="Endüstriyel Tasarım "> Endüstriyel Tasarım  </option>
                  <option value=" Endüstriyel Tasarım Mühendisliği ">Endüstriyel Tasarım Mühendisliği   </option> 
                  <option value="Enerji Sistemleri Mühendisliği "> Enerji Sistemleri Mühendisliği  </option>
                  <option value=" Enerji Yönetimi">  Enerji Yönetimi </option>
                  <option value="Finans ve Bankacılık ">  Finans ve Bankacılık </option>
                  <option value="Fizik ">Fizik   </option>
                  <option value=" Fizik Mühendisliği">  Fizik Mühendisliği </option>
                  <option value="Gemi İnşaatı ve Gemi Makineleri Mühendisliği ">  Gemi İnşaatı ve Gemi Makineleri Mühendisliği </option>
                  <option value=" Gemi Makineleri ve İşletme Mühendisliği"> Gemi Makineleri ve İşletme Mühendisliği  </option>
                  <option value=" Gemi ve Yat Tasarımı"> Gemi ve Yat Tasarımı  </option>
                  <option value="Genetik ve Biyomühendislik "> Genetik ve Biyomühendislik</option>
                  <option value="Geomatik Mühendisliği ">Geomatik Mühendisliği   </option>
                  <option value=" Gıda Mühendisliği"> Gıda Mühendisliği  </option>
                  <option value="Gıda Teknolojisi "> Gıda Teknolojisi  </option>
                  <option value="Girişimcilik ">Girişimcilik   </option>
                  <option value=" Görsel İletişim Tasarımı">Görsel İletişim Tasarımı   </option>
                  <option value="Görsel Sanatlar ve İletişim Tasarımı ">Görsel Sanatlar ve İletişim Tasarımı   </option>
                  <option value="Grafik Tasarımı "> Grafik Tasarımı  </option>
                  <option value="Gümrük İşletme ">  Gümrük İşletme </option>
                  <option value="HalkBilimi "> HalkBilimi   </option>
                  <option value=" Halkla İlişkiler"> Halkla İlişkiler  </option>
                  <option value="Hakla İlişkiler ve Reklamcılık ">Halkla İlişkiler ve Reklamcılık   </option>
                  <option value="Halkla İlişkiler ve Tanıtım "> Halkla İlişkiler ve Tanıtım  </option>
                  <option value=" Harita Mühendisliği">Harita Mühendisliği   </option>
                  <option value="Havacılık Elektrik ve Elektroniği ">  Havacılık Elektrik ve Elektroniği </option>
                  <option value="Havacılık ve Uzay Mühendisliği "> Havacılık VE Uzay Mühendisliği  </option>
                  <option value="Havacılık Yönetimi ">  Havacılık Yönetimi </option>
                  <option value="Hidrojeoloji Mühendisliği "> Hidrojeoloji Mühendisliği  </option>
                  <option value=" İç Mimarlık"> İç Mimarlık  </option>
                  <option value="İç Mimarlık ve Çevre Tasarımı"> İç Mimarlık ve Çevre Tasarımı  </option>
                  <option value="İktisadi ve İdari Bilimler Programları ">İktisadi ve İdari Bilimler Programları   </option>
                  <option value="İktisat "> İktisat  </option>
                  <option value=" İletişim"> İletişim  </option>
                  <option value=" İmalat Mühendisliği"> İmalat Mühendisliği  </option>
                  <option value="İnşaat Mühendisliği "> İnşaat Mühendisliği  </option>
                  <option value="İstatistik ">İstatistik   </option>
                  <option value="İstatistik veBilgisayar Bilimleri "> İstatistik ve Bilgisayar Bilimleri  </option>
                  <option value="İşletme ">  İşletme </option>
                  <option value="İşletme Mühendisliği "> İşletme Mühendisliği  </option>
                  <option value="Jeofizik Mühendisliği ">Jeofizik Mühendisliği   </option>
                  <option value="Jeoloji Mühendisliği "> Jeoloji Mühendisliği  </option>
                  <option value=" Kamu Yönetimi"> Kamu Yönetimi  </option>
                  <option value="Kentsel Tasarım ve Peyzaj Mimarlığı ">  Kentsel Tasarım ve Peyzaj Mimarlığı  </option>
                  <option value="Kimya Mühendisliği "> Kimya Mühendisliği  </option>
                  <option value="Kimya-Biyoloji Mühendisliği ">Kimya-Biyoloji Mühendisliği   </option>
                  <option value="Lojistik Yönetimi "> Lojistik Yönetimi  </option>
                  <option value="Maden Mühendisliği ">  Maden Mühendisliği  </option>
                  <option value="Makine Mühendisliği"> Makine Mühendisliği  </option>
                  <option value="Matematik Mühendisliği "> Matematik Mühendisliği  </option>
                  <option value="Matematik ve Bilgisayar Bilimleri ">Matematik ve Bilgisayar Bilimleri   </option>
                  <option value="Mekatronik Mühendisliği ">  Mekatronik Mühendisliği </option>
                  <option value="Metalurji ve Malzeme Mühendisliği "> Metalurji ve Malzeme Mühendisliği   </option>
                  <option value="Meteoroloji Mühendisliği ">Meteoroloji Mühendisliği    </option>
                  <option value="Mimarlık ">Mimarlık   </option>
                  <option value="Muhasebe ve Finans Yönetimi "> Muhasebe ve Finans Yönetimi  </option>
                  <option value=" Nanobilim ve NanoTeknoloji">Nanobilim ve NanoTeknoloji  </option>
                  <option value="Nükleer Enerji Mühendisliği"> Nükleer Enerji Mühendisliği </option>
                  <option value="Orman Endüstrisi Mühendisliği">Orman Endüstrisi Mühendisliği  </option>
                  <option value=" Orman Mühendisliği"> Orman Mühendisliği  </option>
                  <option value="Peyzaj Mimarlığı "> Peyzaj Mimarlığı  </option>
                  <option value="Pilotaj ">Pilotaj   </option>
                  <option value="Politika ve Ekonomi "> Politika ve Ekonomi  </option>
                  <option value=" Raylı Sistemler Mühendisliği"> Raylı Sistemler Mühendisliği  </option>  
                  <option value="Siyaset Bilimi ve Uluslararası İlişkiler "> Siyaset Bilimi ve Uluslararası İlişkiler  </option>
                  <option value="Su bİlimleri ve Mühendisliği ">Su Bilimleri ve Mühendisliği   </option>
                  <option value="Su Ürünleri  Mühendisliği "> Su Ürünleri Mühendisliği  </option>
                  <option value="Tarım Makineleri ve Teknolojileri Mühendisliği ">Tarım Makineleri ve Teknolojileri Mühendisliği    </option>
                  <option value=" Tekstil Mühendisliği"> Tekstil Mühendisliği  </option>
                  <option value=" Tıp Mühendisliği"> Tıp Mühendisliği  </option>
                  <option value=" Uçak Bakım ve Onarım">  Uçak Bakım ve Onarım </option>
                  <option value="Uçak Elektrik ve Elektroniği ">Uçak Elektrik ve Elektroniği   </option>
                  <option value="Uçak Gövde ve Motor Bakımı ">Uçak Gövde ve Motor Bakımı   </option>
                  <option value=" Uçak Mühendisliği"> Uçak Mühendisliği  </option>
                  <option value="Uluslararası Finans ">Uluslararası Finans   </option>
                   <option value="Uluslararası Finans ve Bankacılık "> Uluslararası Finans ve Bankacılık  </option>

                </select>
                </div>



            <label className="form-üstbaşlık">BAŞVURU YAPILAN POZİSYON</label>
            {/*<legend>
             <h3>Başvuru Yapılan Pozisyon</h3>
              </legend>*/}



            <div className="form-wrapper">
              {/*<label className="form-label">Başvuru Yapılan Pozisyon:</label>*/}
              <select className="form-input-select"
                value={inputs.pozisyon}
                onChange={(e) => handleChange('pozisyon', e.target.value)}>
                <option value=" ">   </option>
                <option value="ik">İK</option>
                <option value="erpuzmanı">ERP Uzmanı</option>
                <option value="yazılım mühendisi">Yazılım Mühendisi</option>
                <option value="İş Analisti">İş Analisti</option>
                <option value="Proje Yönetmeni">Proje Yönetmeni</option>
              </select>
            </div>




        <label className="form-üstbaşlık"> YABANCI DİL </label>   
        <div className="form-wrapper">
        <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected} 
        labelledBy="Select"
       />
       </div>

       

      <div className="form-wrapper">
      <label className="form-label">Varsa dil eğitimi-dil sınavı ve puanınızı ekleyiniz:</label>
      <input className="form-input"
      type="text"
      value={inputs.yabancıdilek}
      onChange={(e) => { handleChange('yabancıdilek', e.target.value); } } />
      </div>


          
            <label className="form-üstbaşlık"> BİLGİSAYAR BİLGİLERİ </label>

            <div className="checkbox-wrapper">
              <input className="my-checkbox" type="checkbox" onChange={(e) => { handleChange('dil', e.target.value); } } value="JS" />
              <label className="my-label">JS</label>

              <input className="my-checkbox" type="checkbox" onChange={(e) => { handleChange('dil1', e.target.value); } } value="Java" />
              <label className="my-label">Java</label>

              <input className="my-checkbox" type="checkbox" onChange={(e) => { handleChange('dil2', e.target.value); } } value="PHP" />
              <label className="my-label">PHP</label>

              <input className="my-checkbox" type="checkbox" onChange={(e) => { handleChange('dil3', e.target.value); } } value="C#" />
              <label className="my-label">C#</label>

              <input className="my-checkbox" type="checkbox" onChange={(e) => { handleChange('dil4', e.target.value); } } value="HTML" />
              <label className="my-label">HTML</label>

              <input className="my-checkbox" type="checkbox" onChange={(e) => { handleChange('dil5', e.target.value); } } value="C++" />
              <label className="my-label">C++</label>

              <input className="my-checkbox" type="checkbox" onChange={(e) => { handleChange('dil6', e.target.value); } } value="TS" />
              <label className="my-label">TS</label>

              <input className="my-checkbox" type="checkbox" onChange={(e) => { handleChange('dil7', e.target.value); } } value="C" />
              <label className="my-label">C</label>

              <input className="my-checkbox" type="checkbox" onChange={(e) => { handleChange('dil8', e.target.value); } } value="Kotlin" />
              <label className="my-label">Kotlin</label>

              <input className="my-checkbox" type="checkbox" onChange={(e) => { handleChange('dil9', e.target.value); } } value="Matlab" />
              <label className="my-label">Matlab</label>

              <input className="my-checkbox" type="checkbox" onChange={(e) => { handleChange('dil10', e.target.value); } } value="Ruby" />
              <label className="my-label">Ruby</label>

              <input className="my-checkbox" type="checkbox" onChange={(e) => { handleChange('dil11,', e.target.value); } } value="Go" />
              <label className="my-label">Go</label>

              <input className="my-checkbox" type="checkbox" onChange={(e) => { handleChange('dil12', e.target.value); } } value="Swift" />
              <label className="my-label">Swift</label>

              <input className="my-checkbox" type="checkbox" onChange={(e) => { handleChange('dil13', e.target.value); } } value="Phyton" />
              <label className="my-label">Phyton</label>

              <input className="my-checkbox" type="checkbox" onChange={(e) => { handleChange('dil14', e.target.value); } } value="R" />
              <label className="my-label">R</label>

              <input className="my-checkbox" type="checkbox" onChange={(e) => { handleChange('dil15', e.target.value); } } value="Jira" />
              <label className="my-label">Jira</label>

              <input className="my-checkbox" type="checkbox" onChange={(e) => { handleChange('dil16', e.target.value); } } value="Redmine" />
              <label className="my-label">Redmine</label>
              </div>



                <div className="form-wrapper">
                <label className="form-label">Yukarıdaki listede yer almayan  bilgisayar bilginiz(Yazılım,paket programlar vb.)var ise ekleyiniz:</label>
                <input className="form-input"
                type="text"
                value={inputs.bilgisayarbilgisiek}
                onChange={(e) => { handleChange('bilgisayarbilgisiek', e.target.value); } } />
                </div>



            <label className="form-üstbaşlık">DİĞER BİLGİLER:</label>
            <div className="form-wrapper">
              <label className="form-label">Yetenekler:</label>
              <input className="form-input"
                type="text"
                value={inputs.yetenek}
                onChange={(e) => { handleChange('yetenek', e.target.value); } } />
            </div>

            {/*<legend>
       <h3>Referanslar</h3>
      </legend>*/}
            <div className=" form-wrapper">
              <label className="form-label">Referanslar:</label>
              <input className="form-input"
                type="text"
                name="referans"
                value={inputs.referans}
                onChange={(e) => { handleChange('referans', e.target.value); } } />
            </div>
            {/*<label className="form-label"> Diğer Bilgiler </label>*/}

            {/* <legend>
       <h3>Diğer Bilgiler</h3>
    </legend>*/}
            <div className=" form-wrapper">
              <label className="form-label"> Başarılar/Ödüller:</label>
              {/* <h5>Başarılar/Ödüller:</h5>*/}
              <input className="form-input"
                type="text"
                value={inputs.basarı}
                onChange={(e) => { handleChange('basarı', e.target.value); } } />
            </div>


            <div className=" form-wrapper">
              <label className="form-label">Hobiler:</label>
              {/* <h5>Hobiler:</h5>*/}
              <input className="form-input"
                type="text"
                value={inputs.hobi}
                onChange={(e) => { handleChange('hobi', e.target.value); } } />
         </div>

           <div className="">
            <label className="form-label-CV"> CV Yükleme :</label>
            
           <input className="form-file"
           type="file" onChange={(e)=>{
            console.log(e.target.files)
          }}/>
           </div>


           <div className="">
            <label className="form-label-ÖnYazı"> ÖnYazı Yükleme :</label>
            
           <input className="form-file"
           type="file" onChange={(e)=>{
            console.log(e.target.files)
          }}/>
           </div>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
  ) ; 
 } ;
export default App;
