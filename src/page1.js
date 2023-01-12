import React from 'react';              //Reactを読み込んでいる
 
class page1 extends React.Component {   //page1クラスにReact.Componentを継承する
 
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div>
                HelloPage1!!!
            </div>
        );
    }
}
 
export default page1;                   //page1を出力する為に必要