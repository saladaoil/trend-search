import React from 'react';
import './commonstyles.css';
import { useNavigate } from "react-router-dom"
import { Button } from '@chakra-ui/react';
import Header from '../../ui/Header';
import { Flex } from '@chakra-ui/layout';

const homeUrl = process.env.PUBLIC_URL;

const Firstchoice = () => {
const navigate = useNavigate()

  return (
    <>
      <Header title="どちらかを選択してください" />
      <Flex direction="column" align="center" maxW="500px" mx="auto" p="4">
        <Button onClick={() => navigate(`${homeUrl}/gender`)} size="xl" mb="8" mt="40">
          流行から選ぶ
        </Button>
        <Button onClick={() => navigate(`${homeUrl}/preselect`)} size="xl" mb="8" mt="20">
          好みから選ぶ
        </Button>
      </Flex>
    </>

  );
};
export default Firstchoice;

    // <div>
    //   <div className="app-container">
    //     <div className="body">
    //       <div className="description">
    //         <h1>どちらかを選択<br></br>してください</h1>
    //       </div>
    //     </div>
    //     <Button onClick={() => navigate(`${homeUrl}/gender`)}style={{ fontSize: '1em' }}>流行から選ぶ</Button>
    //     <Button onClick={() => navigate(`${homeUrl}/preselect`)}style={{ fontSize: '1em' }}>好みから選ぶ</Button>
    //   </div>
    // </div>




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