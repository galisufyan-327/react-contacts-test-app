import './main.scss'
import Button from  '../Button/Button'
import { connect } from 'react-redux';


const MainScreen = () =>  {
  return (
    <div>
      <div className='main-container'>
        <Button text='Modal A' variant='a' onClick={() => openModal('A')} />
        <Button text='Modal B' variant='b' onClick={() => openModal('B')}/>
      </div>
    </div>
  )
};

export default MainScreen;
