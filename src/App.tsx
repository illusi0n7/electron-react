import './App.css';
import GroupSelect from './GroupSelect';

const data: any = {
  kospi: ['kakao', 'kakao pay', 'kakao bank'],
  nyse: ['unity', 'elastic', 'paypal'],
};

function App() {
  return (
    <>
      <GroupSelect data={data}></GroupSelect>
    </>
  );
}

export default App;
