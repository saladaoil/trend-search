import React from 'react';
import './commonstyles.css';
import { useNavigate } from "react-router-dom"
import { Button } from '@chakra-ui/react';

const homeUrl = process.env.PUBLIC_URL;
const Firstchoice = () => {
  const navigate = useNavigate()


  return (
    <div>
      <div className="app-container">
        <div className="body">
          <div className="description">
            <h1>どちらかを選択<br></br>してください</h1>
          </div>
        </div>
        <Button className='BottomRadius' onClick={() => navigate(`${homeUrl}/gender`)}style={{ fontSize: '1em' }}>流行から選ぶ</Button>
        <br></br><br></br>
        <Button className='BottomRadius' onClick={() => navigate(`${homeUrl}/preselect`)}style={{ fontSize: '1em' }}>好みから選ぶ</Button>
      </div>
    </div>
  );
};
export default Firstchoice;




// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import { useNavigate } from "react-router-dom"
// import './styles.css';


// import Op1 from './images/TrendSearch 流行 kari.png'

// const Gender = () => {
//   const navigate = useNavigate()

//   return (
//     <div>
//       <Header />
//       <div className="app-container">
//         <header className="header">
//         </header>
//         <div className="body">
//           <div className="description">
//             <h1>どちらかを選択<br></br>してください</h1>
//           </div>
//         </div>
//             <img src={Op1} alt="アイコン" className="op1" />
//             <img src={Op1} alt="アイコン" className="op1" />
//       </div>
//       <Footer />
//     </div>
//   );
// };
// export default Gender